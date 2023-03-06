
isNavMenuOpen = false;

function toggleMenu() {
    nav_ham_menu_items = document.getElementById("nav_ham_menu_items");
    nav_ham_menu_icon = document.getElementById("nav_ham_menu_icon");

    if (isNavMenuOpen) {
        nav_ham_menu_icon.src = "images/list.svg";
        nav_ham_menu_items.style.display = "none";
        isNavMenuOpen = false;
    } else {
        nav_ham_menu_icon.src = "images/x-lg.svg";
        nav_ham_menu_items.style.display = "block";
        isNavMenuOpen = true;
    }
}

function closeMenu() {
    if (isNavMenuOpen)
        toggleMenu();
}

window.addEventListener("resize", () => {
    if (window.innerWidth >= 750) {
        if (isNavMenuOpen)
            toggleMenu();
    }
});