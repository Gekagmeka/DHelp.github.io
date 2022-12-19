let filterItems = document.querySelectorAll('.tabs-item');
let menuLinks = document.querySelectorAll('.menu-link');
let burgerBtn = document.getElementById('burgerBtn');
let headerMenu = document.getElementById('header-menu');
let body = document.querySelector('body');

// filters
for (let filterBtn of filterItems) {
    filterBtn.addEventListener('click', function(){
        deletedActiveClass();
        filterBtn.classList.add('active');
    });
}
function deletedActiveClass() {
    for (let btn of filterItems) {
        btn.classList.remove('active'); 
    }
}

// menu-links
for (let menuLink of menuLinks) {
    menuLink.addEventListener('click', function(e){
        e.preventDefault();
        deletedLinkActiveClass();
        menuLink.classList.add('active');
    });
}
function deletedLinkActiveClass() {
    for (let menuLink of menuLinks) {
        menuLink.classList.remove('active');
    }
}

//burger button menu
burgerBtn.addEventListener('click', function(){
    headerMenu.classList.toggle('active');
    body.classList.toggle('closed');
});