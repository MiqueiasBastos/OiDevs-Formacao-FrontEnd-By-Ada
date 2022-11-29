document.querySelector("#toggle").addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelectorAll(".vidro").forEach((item) => {
        if (item.classList.contains("vidro-aceso")) {
            item.classList.remove("vidro-aceso");
        } else {
            item.classList.add("vidro-aceso");
        }
    });
    document.querySelectorAll(".haste").forEach((item) => {
        if (item.classList.contains("haste-acesa")) {
            item.classList.remove("haste-acesa");
        } else {
            item.classList.add("haste-acesa");
        }
    });
    document.querySelectorAll(".filamento").forEach((item) => {
        if (item.classList.contains("filamento-aceso")) {
            item.classList.remove("filamento-aceso");
        } else {
            item.classList.add("filamento-aceso");
        }
    });
    const bodyDocument = document.body;
    if (bodyDocument.classList.contains("dark")) {
        bodyDocument.classList.remove("dark");
    } else {
        bodyDocument.classList.add("dark");
    }

    const toggleButton = document.querySelector("#toggle");
    if (toggleButton.textContent === "Ligar") {
        toggleButton.textContent = "Desligar";
        toggleButton.style.backgroundColor = "#800000";
    } else {
        toggleButton.textContent = "Ligar";
        toggleButton.style.backgroundColor = "#1d6dce";
    }
});
