


//Doc Menu Sidebar
let docMenu = document.querySelector("#hamburgerBttn-doc");
let sideBar = document.querySelector(".components-nav");
let toggleSideBar = document.querySelector(".components-nav-sidebar");

if (docMenu && sideBar) {
  docMenu.addEventListener("click", () => {
    sideBar.classList.toggle("components-nav-sidebar");
  });
}

// hide nav
function hideSideNavBar(){
  sideBar.classList.toggle("components-nav-sidebar");
}


//Suit Menu Sidebar
let suitMenu = document.querySelector("#hamburgerBttn-suit");
let suitSideBar = document.querySelector(".nav-list");

if (suitMenu && suitSideBar) {
  suitMenu.addEventListener("click", () => {
    suitSideBar.classList.toggle("nav-list-sidebar");
  });
}


