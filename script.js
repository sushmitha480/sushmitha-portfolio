const menu = document.querySelector('.menu');
const menulist = document.querySelector('nav .menus');

menu.addEventListener('click',()=>{
  menulist.classList.toggle('showmenu');
});

const header = document.querySelector('nav');
window.onscroll = function() {
    var top = window.scrollY;
    if(top >=250) {
        header.classList.add('navbarDark');    }
    else {
        header.classList.remove('navbarDark');
    }
}

  const sections = document.querySelectorAll("section, div[id]");
  const navLinks = document.querySelectorAll("nav ul li a");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (pageYOffset >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });
