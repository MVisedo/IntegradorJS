//-----POPUP----

import { productoActivo, setProductoActivo } from "../../main";



//OPEN POPUP
export const openModal = ()=>{
    const modal = document.getElementById("modal_popup")
    modal.style.display = "flex";

    const buttonDelete = document.getElementById("button_delete")
    if(productoActivo){
        buttonDelete.style.display = "block";
    }else{
        buttonDelete.style.display = "none";
    }

    if(productoActivo){
        const nombre = document.getElementById("nombre");
        const imagen = document.getElementById("imagen");
        const categoria = document.getElementById("categoria");
        const precio = document.getElementById("precio");

        nombre.value=productoActivo.nombre;
        precio.value=productoActivo.precio;
        imagen.value=productoActivo.imagen;
        categoria.value=productoActivo.categoria;
    }
}
//CLOSE POPUP

export const closeModal = ()=>{
    const modal = document.getElementById("modal_popup")
    modal.style.display = "none";
    setProductoActivo(null);
    resetModal();
}

const resetModal = ()=>{
    const nombre = document.getElementById("nombre");
    const imagen = document.getElementById("imagen");
    const categoria = document.getElementById("categoria");
    const precio = document.getElementById("precio");
    nombre.value="";
    precio.value=0;
    imagen.value="";
    categoria.value="Seleccione una categoria";
}