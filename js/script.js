let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('times1');
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  menu.classList.remove('times1');
  navbar.classList.remove('active');
}
