const githubData = {
    username: 'MiqueiasBastos',
    repositorie: 'OiDevs--FrontEnd-Estatico',
    branch: 'master'
}

async function getAllGithubFiles(username, repositories, branch){
    const response = await fetch(`https://api.github.com/repos/${username}/${repositories}/git/trees/${branch}?recursive=1`);
    const filesList = await response.json()
    return filesList.tree
}

function getExercisesList (list){
    const exercisesList = [];
    list.forEach(item => {
        if(item.type !== 'tree'){
            return
        }
        if(item.path.indexOf("/") !== -1) {
            return
        }
        if(item.path.indexOf("exercicio-") !== -1){
            exercisesList.push(item.path)
        }
    });

    return exercisesList;
}

async function init (){
    const filesList = await getAllGithubFiles(githubData.username, githubData.repositorie, githubData.branch)
    const exercisesList = getExercisesList(filesList)
    exercisesList.forEach(exercise => {
        let line = document.createElement('tr');
        line.innerHTML = `<td>${exercise}</td><td><a href="https://github.com/${githubData.username}/${githubData.repositorie}/tree/${githubData.branch}/${exercise}" target="_blank">Github</a></td><td><a href="https://${githubData.username}.github.io/${githubData.repositorie}/${exercise}/" target="_blank">Visualizar</a></td>`;
        document.querySelector('table tbody').appendChild(line)
    })
}

init()