import { categoriaActiva } from "../../main";
import { handleGetProductLocalStorage } from "../persistence/localStorage";
import { handleRenderList } from "../view/store";

//-----CATEGORIA-----
const handleFilterProductsByCategory = (categoria) =>{
    const products = handleGetProductLocalStorage()

    switch(categoria){
        case categoriaActiva:
            handleRenderList(products)
            break;
        case "Todo": 
            handleRenderList(products)
            break;
        case "Hamburguesas":
        case "Papas":
        case "Gaseosas":
            const result = products.filter((el)=> el.categoria === categoria)
            handleRenderList(result)
            break;
        case "MayorPrecio" :
            const resultMayor = products.sort((a,b) => b.precio - a.precio)
            handleRenderList(resultMayor)
            break;
        case "MenorPrecio" :
            const resultMenor = products.sort((a,b) => a.precio - b.precio)
            handleRenderList(resultMenor)
            break;
        default:
            break;
    }
}





//render de las categorias

export const renderCategories = () =>{
    const ulList = document.getElementById("listFilter")

    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="MayorPrecio">Mayor precio</li>
    <li id="MenorPrecio">Menor precio</li>
    `;

    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener('click',()=>{
            handleClick(liElement)
        })
    });

    const handleClick = (element)=>{
        handleFilterProductsByCategory(element.id);
        liElements.forEach((el)=>{
            if(el.classList.contains('li_active')){
                el.classList.remove('li_active')
            }
            if(element === el){
                    el.classList.add('li_active')
            }
            
        })
    }
}