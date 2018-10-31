console.log("hello");

const menuToggle = getElementById('menu-toggle');
const menuNav = getElementById('menu-nav');

(toggleMenu)=>{
console.log("called toggleMenu");

}

menuToggle.addEventListner("click", toggleMenu);
