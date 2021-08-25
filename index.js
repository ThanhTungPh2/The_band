const buyBtns = document.querySelectorAll(".js__buy--ticket")
const modal = document.querySelector(".modal")
const close = document.querySelector(".modal__close")
const modalContainer = document.querySelector(".js__modalContainer")

function showBuyTickets() {
    modal.classList.add("open");
}
function hideBuyTickets() {
    modal.classList.remove("open");
}
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}
close.addEventListener('click', hideBuyTickets)
modal.addEventListener('click', hideBuyTickets)
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation()
})

var header = document.getElementById('js__header')
var mobileMenu = document.getElementById('mobile__menu')
var headerHight = header.clientHeight;
mobileMenu.onclick = function() {
    var isClose = header.clientHeight === headerHight;
    if(isClose) {
        header.style.height = 'auto';
    }
    else {
        header.style.height = null;
    }
}

var menuItems = document.querySelectorAll('.menu__item a[href*="#"')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && menuItem.nextElementSibling.classList.contains('menu__item--submenu')
        if(isParentMenu) {
            event.preventDefault();
        }
        else {
            header.style.height = null;
        }
    }
}