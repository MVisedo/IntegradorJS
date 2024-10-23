//-----STORE-----
import { openModal } from "../view/popUp"
import { handleGetProductLocalStorage } from "../persistence/localStorage"
import { setProductoActivo } from "../../main"

export const handleGetProductsToStore = ()=>{
    const products =  handleGetProductLocalStorage()
    handleRenderList(products)

}

export const handleRenderList=(products)=>{
    const burgers = products.filter((el)=>el.categoria === "Hamburguesas");
    const papas = products.filter((el)=>el.categoria === "Papas");
    const gaseosas = products.filter((el)=>el.categoria === "Gaseosas");
    
    const renderProductGroup = (productos,title)=>{

        if(productos.length >0){
            const productsHTML = productos.map((product,index)=>{
                return `
                <div class='container_target_product' id='producto-${product.categoria}-${index}'>
                    <div>
                        <img src='${product.imagen}'/>
                    </div>
                    <div>
                        <h2>${product.nombre}</h2>
                    </div>
                    <div class='target_props'>
                        <p><b>Precio:</b> $ ${product.precio}</p>
                    </div>
                </div>`;
            });
            return `
            <section class='section_store'>
            <h3>${title}</h3>
            <div class='container_product_store'>
            ${productsHTML.join("")}
            </div>
            </section>
            `
        }else{
            return""
        }

    }

    const appContainer = document.getElementById("store_container")
    appContainer.innerHTML = `
    ${renderProductGroup(papas,"Papas")}
    ${renderProductGroup(gaseosas,"Gaseosas")}
    ${renderProductGroup(burgers,"Hamburguesas")}
    `
    const addEvents = (products) =>{
        if(products){
            products.forEach((element,index) => {
                const productContainer = document.getElementById(
                    `producto-${element.categoria}-${index}`
                );
                productContainer.addEventListener("click",()=>{
                    setProductoActivo(element);
                    openModal();
                })
            });
        }
    }
    addEvents(burgers);
    addEvents(gaseosas);
    addEvents(papas);
}
