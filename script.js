function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function closeMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = "0";
}


