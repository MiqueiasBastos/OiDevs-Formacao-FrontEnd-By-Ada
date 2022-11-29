const githubData = {
    username: 'MiqueiasBastos',
    repositorie: 'OiDevs-Formacao-FrontEnd-By-Ada',
    folderName: 'Modulo-01--FrontEnd-Estatico',
    shaFolder: '8a9443fc55e5c1a514742b95650e2bdd1b3150f5'
}

async function getAllGithubFiles(username, repositories, shaFolder){
    const response = await fetch(`https://api.github.com/repos/${username}/${repositories}/git/trees/${shaFolder}`);
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
    const filesList = await getAllGithubFiles(githubData.username, githubData.repositorie, githubData.shaFolder)
    const exercisesList = getExercisesList(filesList)
    exercisesList.forEach(exercise => {
        let line = document.createElement('tr');
        line.innerHTML = `<td>${exercise}</td><td><a href="https://github.com/${githubData.username}/${githubData.repositorie}/tree/main/${githubData.folderName}/${exercise}" target="_blank">Github</a></td><td><a href="https://${githubData.username}.github.io/${githubData.repositorie}/${githubData.folderName}/${exercise}/" target="_blank">Visualizar</a></td>`;
        document.querySelector('table tbody').appendChild(line)
    })
}

init()