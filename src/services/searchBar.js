import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

export const handleSearchProductByName = () =>{
    const inputHeader = document.getElementById("input_header");

    const product = handleGetProductLocalStorage()

    const result = product.filter((el)=>
        el.nombre.toLowerCase().includes(inputHeader.value));
    handleRenderList(result)
}