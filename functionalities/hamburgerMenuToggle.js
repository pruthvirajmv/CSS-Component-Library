function hamburgerMenuToggle(id) {

    const selectedComponent = document.getElementById(id)
    
    if(selectedComponent.style.display === "none"){
        selectedComponent.style.display = "flex";
        console.log(id)
    }

    else{
        selectedComponent.style.display = "none";
        console.log("none")
    }
    
}