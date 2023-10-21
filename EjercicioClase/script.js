const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const busqueda = () =>{
    let bebida = document.getElementById("bebida").value
    const response = await fetch(´${url}${bebida});
    

}

let boton = document.querySelector("#Busqueda");

boton.addEventListener("click",busqueda);
