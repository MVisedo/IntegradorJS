import { setInLocalStorage } from "./src/persistence/localStorage";
import { renderCategories } from "./src/services/categories";
import { handleSearchProductByName } from "./src/services/searchBar";
import { openModal } from "./src/view/popUp";
import { handleGetProductsToStore } from "./src/view/store";
import './style.css'

//-----APLICACION-----
//setear la categoria activa
export let categoriaActiva = null;

export const setCategoriaActiva = (categoria)=>{
    categoriaActiva = categoria
}

//setear el producto activo
export let productoActivo = null;

export const setProductoActivo = (product)=>{
    productoActivo = product
}

handleGetProductsToStore()
renderCategories();

//------HEADER------

//BOTON: AGREGAR ELEMENTO
const buttonAdd = document.getElementById("button_add")
buttonAdd.addEventListener("click",()=>{
    openModal();
})

//BOTON: BUSCAR ELEMENTO
const buttonSearch = document.getElementById("button_search")
buttonSearch.addEventListener("click",()=>{
    handleSearchProductByName();
})






