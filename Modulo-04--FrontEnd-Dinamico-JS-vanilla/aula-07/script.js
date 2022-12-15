// -- Em cada item deve conter um botao editar e deletar

// -- Ao clicar clicar em editar devera abrir um modal para edicao dos dados
// -- No modal devera conter um botao para submeter as alteracoes a api no endpoint /products/:id utilizando o verbo PUT e um cancelar
// -- Ao clicar em cancelar devera limpar as alteracoes e fechar o modal
// -- Ao clicar em deletar devera abrir uma janela de confirmacao com a mensagem Ao confirmar o item ${id - nome do produto} sera apagado completamente

// -- Ao clicar em confirmar devera fazer uma chamada para a api /products/:id utilizando o verbo DELETE para apagar um registro

// -- Barra de pesquisa

// Devera conter uma barra de pesquisa para pesquisar por nome e categoria

// Caso seja feita pesquisas > 1 em uma determinada categoria, devera salvar a consulta em um array no localStorage

const BASE_URL = "https://servidor-aula.herokuapp.com";

const productModalElement = document.querySelector("#product-modal");
const confirmModalElement = document.querySelector("#confirm-modal");
const formSearch = document.querySelector("#form-search");

const productModalTitleElement =
    productModalElement.querySelector(".modal-header h1");
const confirmModalNameItemElement =
    confirmModalElement.querySelector(".modal-body span");

const productFormElement = productModalElement.querySelector("form");
const confirmFormElement = confirmModalElement.querySelector("form");

const nameInput = productFormElement.querySelector("#name");
const categoryInput = productFormElement.querySelector("#category");
const priceInput = productFormElement.querySelector("#price");

const suggestionsList = document.querySelector("#search-suggestions");
const products = {
    async getAll() {
        try {
            const response = await fetch(`${BASE_URL}/products`);
            const productsList = await response.json();
            return productsList;
        } catch (error) {
            alert("Aconteceu um erro");
            console.log(error);
        }
    },
    async get(productId) {
        try {
            const response = await fetch(`${BASE_URL}/products/${productId}`);
            const product = await response.json();
            return product;
        } catch (error) {
            alert("Aconteceu um erro");
            console.log(error);
        }
    },
    async post({ name, price, category }) {
        try {
            const response = await fetch(`${BASE_URL}/products`, {
                method: "POST",
                body: JSON.stringify({
                    category,
                    name,
                    price,
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            });
            const product = await response.json();
            return product;
        } catch (error) {
            alert("Aconteceu um erro");
            console.log(error);
        }
    },
    async put(productId, { name, price, category }) {
        try {
            const response = await fetch(`${BASE_URL}/products/${productId}`, {
                method: "PUT",
                body: JSON.stringify({
                    category,
                    name,
                    price,
                }),
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                },
            });
            const product = await response.json();
            return product;
        } catch (error) {
            alert("Aconteceu um erro");
            console.log(error);
        }
    },
    async delete(productId) {
        try {
            const response = await fetch(`${BASE_URL}/products/${productId}`, {
                method: "DELETE",
            });
            const product = await response.json();
            return product;
        } catch (error) {
            alert("Aconteceu um erro");
            console.log(error);
        }
    },
};

let recentSearch = [];

const localSearchData = getLocalData();

function getLocalData() {
    const data = localStorage.getItem("crud-search-data");
    if (!data) {
        localStorage.setItem("crud-search-data", "[]");
        return [];
    }
    const dataList = JSON.parse(data);
    recentSearch = [...dataList];
    return dataList;
}

function setLocalData() {
    localStorage.setItem("crud-search-data", JSON.stringify(localSearchData));
}

function setSuggestionsList() {
    suggestionsList.innerHTML = "";
    localSearchData.forEach((item) => {
        suggestionsList.innerHTML += `<option value="${item}">${item}</option>`;
    });
}

async function openEditModal(productId) {
    productModalTitleElement.innerHTML = "Editar Produto";

    const modal = new bootstrap.Modal(productModalElement);

    const product = await products.get(productId);

    nameInput.value = product.name;
    categoryInput.value = product.category;
    priceInput.value = product.price;

    productFormElement.onsubmit = async function (event) {
        event.preventDefault();

        const product = {
            name: nameInput.value,
            category: categoryInput.value,
            price: Number(priceInput.value),
        };

        const productReturn = await products.put(productId, product);

        document.querySelector(`#item--${productId}`).outerHTML =
            createLiElement(productReturn);

        modal.hide();
    };

    modal.show();
}

function openAddModal() {
    productModalTitleElement.innerHTML = "Adicionar Produto";

    const modal = new bootstrap.Modal(productModalElement);

    nameInput.value = "";
    categoryInput.value = "";
    priceInput.value = "";

    productFormElement.onsubmit = async function (event) {
        event.preventDefault();
        const product = {
            name: nameInput.value.toUpperCase(),
            category: categoryInput.value,
            price: Number(priceInput.value),
        };

        const productReturn = await products.post(product);
        document.querySelector("ul").innerHTML +=
            createLiElement(productReturn);
        modal.hide();
    };

    modal.show();
}

function openConfirmExclusion(productId, productName) {
    const modal = new bootstrap.Modal(confirmModalElement);
    confirmModalNameItemElement.innerHTML = decodeURI(productName);

    confirmFormElement.onsubmit = async function (event) {
        event.preventDefault();
        await products.delete(productId);
        document
            .querySelector("ul")
            .removeChild(document.querySelector(`#item--${productId}`));
        modal.hide();
    };

    modal.show();
}

function createLiElement({ id, name, price, category }) {
    return `<li class="list-group-item d-flex justify-content-between align-items-center" id="item--${id}">
        <div>
            <span class="text-muted">${category}</span>
            <h2 class="h5 my-1">#${id} - ${name}</h2>
            <span>Valor: ${price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })}</span>
            
        </div>
        <div class="d-flex flex-column flex-nowrap ms-3">
            <button class="btn btn-warning btn-sm text-white d-flex mb-1 flex-nowrap" onclick="openEditModal(${id})"><i class="bi bi-pencil-fill me-2"></i> Editar</button>
            <button class="btn btn-danger btn-sm d-flex flex-nowrap" onclick="openConfirmExclusion(${id}, '${encodeURI(
        name
    )}')"><i class="bi bi-trash3-fill me-2"></i> Excluir</button>
        </div>
    </li>`;
}

window.onload = async function () {
    setSuggestionsList();
    const allProducts = await products.getAll();
    document.querySelector("ul").innerHTML = allProducts
        .map(createLiElement)
        .join("");
};

document.querySelector("#add-button").onclick = (event) => {
    event.preventDefault();
    openAddModal();
};

formSearch.onsubmit = function (event) {
    event.preventDefault();

    const textSearch = formSearch
        .querySelector("input")
        .value.toLocaleUpperCase();
    const itemsElements = document.querySelectorAll("li");

    itemsElements.forEach((item) => {
        item.classList.remove("d-none");
        const contentItem = item.querySelector("div:first-child").textContent;
        const containSearch = contentItem.includes(textSearch);

        if (!containSearch) {
            item.classList.add("d-none");
        }
    });

    const isTextEmpty = textSearch === "";
    const containsRecentSearch = recentSearch.includes(textSearch);
    const containsLocalSearch = localSearchData.includes(textSearch);

    if (!isTextEmpty && !containsRecentSearch) {
        recentSearch.push(textSearch);
    } else if (!isTextEmpty && containsRecentSearch && !containsLocalSearch) {
        localSearchData.push(textSearch);
        setLocalData();
        setSuggestionsList();
    }
};
