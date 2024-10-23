import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localStorage";
import { closeModal } from "../view/popUp";
import Swal from "sweetalert2";
import { handleGetProductsToStore, handleRenderList } from "../view/store";





//BOTON: ACEPTAR
const buttonAccept = document.getElementById("button_accept");

buttonAccept.addEventListener("click",()=>{
   
    handleAcceptButton();
});

const handleAcceptButton = ()=>{
    
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").value;
    const categoria = document.getElementById("categoria").value;
    const precio = document.getElementById("precio").value;

    let object = null;
    
    if(productoActivo){
        
        object = {
            ...productoActivo,
            nombre,
            imagen,
            categoria,
            precio,
        };
   
    }else{
        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            categoria,
            precio
        }
    }
    Swal.fire({
        title: "Correcto",
        text: "Producto guardado correctamente",
        icon: "success"
      });

    setInLocalStorage(object);
    handleGetProductsToStore();
    closeModal();
}

//BOTON: CANCELAR
const buttonCancel = document.getElementById("button_cancel")
buttonCancel.addEventListener("click",()=>{
    closeModal();
})

//BOTON: ELIMINAR

const buttonDelete = document.getElementById("button_delete");

buttonDelete.addEventListener("click",()=>{
   
    handleDeleteProduct();
    
});

const handleDeleteProduct = () =>{
      Swal.fire({
        title: "¿Desea eliminar el producto?",
        text: "Los datos del producto no se podran recuperar",
        icon: "warning",
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage()

            const result = products.filter((el)=>el.id !== productoActivo.id);
            localStorage.setItem("products",JSON.stringify(result))
            const newProducts = handleGetProductLocalStorage();
            handleRenderList(newProducts);
            closeModal();
          Swal.fire({
            title: "Producto eliminado",
            text: "El producto fue eliminado con exito",
            icon: "success"
          });
        }else{
            closeModal();
        }
      });

    
}
