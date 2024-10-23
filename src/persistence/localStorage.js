//-----LOCALSTORAGE-----
export const handleGetProductLocalStorage = ()=>{
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products
    }else{
        return [];
    }

}

export const setInLocalStorage = (product)=>{
    
        let productsLocal = handleGetProductLocalStorage();
       
        const existingIndex = productsLocal.findIndex((productsLocal)=> productsLocal.id === product.id);
       
        
        console.log(existingIndex)
        if(existingIndex !== -1){
            productsLocal[existingIndex] = product;
        }else{
            productsLocal.push(product);
        }
        localStorage.setItem("products",JSON.stringify(productsLocal))
    
}