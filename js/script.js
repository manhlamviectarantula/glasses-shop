let searchForm = document.querySelector('.header .search-form');
let navbar = document.querySelector('.header .navbar');

//search form
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
}

//menu btn
document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
}

//cuộn trang sẽ xóa search form hoặc menu
window.onscroll = () =>{
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}

// slide
let slides = document.querySelectorAll('.home .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}