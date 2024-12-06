const navBar = document.querySelector(".navbar");

/**Quando o botão for pressionado chamará a função menu() que deve mostrar o sidebar e quando clicado novamente deve ocultá-lo */


function menu() {
    if(!navBar.classList.contains("show")) {
        navBar.style.display = "flex";
        navBar.classList.add("show");
    }
    else {
        navBar.style.display = "none";
        navBar.classList.remove("show");
    }
    
}