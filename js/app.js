/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const menu = document.getElementById('navbar__list');
const menuLink = ["Section 1", "Section 2", "Section 3" , "Section 4"];
const AddClassTolinks = ["link1", "link2", "link3 " , "link4"];
const Anchors = ["first", "second", "third", "four"];


// build the nav
menuLink.forEach(function(i) {
    var CreatList = document.createElement('li');
    var CreatHyperLink = document.createElement('a');
    CreatHyperLink.innerHTML = i;
    menu.appendChild(CreatList); // append li to unordered list 
    CreatList.appendChild(CreatHyperLink); // append anchor to list 
});


// adding class name attribute to the hyperlinks 
for (let i = 0; i < AddClassTolinks.length ; i++){
    document.getElementsByTagName("li")[i].setAttribute("class", AddClassTolinks[i]);
    document.getElementsByTagName("a")[i].setAttribute("data-link", Anchors[i]);
}


// add general styles to links in navbar
document.getElementById('navbar__list').style.color = '#3D3D3D';
document.getElementById('navbar__list').style.fontSize = '1.7rem';
document.getElementById('navbar__list').style.margin = '1.6rem';
document.getElementById('navbar__list').style.display = 'flex';
document.getElementById('navbar__list').style.justifyContent = 'space-around';


// Add class 'active' to section when near top of viewport
var sections = document.querySelectorAll("section div");
var links = document.querySelectorAll("nav a");

function ActiveLink() {
  sections.forEach((section) => 
    window.addEventListener("scroll", function () {
      if (
        section.getBoundingClientRect().top + 200 < window.innerHeight &&
        section.getBoundingClientRect().bottom + 200 > window.innerHeight
      ) {
        links.classList.add("active");
      } else {
        links.classList.remove("active");
      }
    })
  );
}

// call the function to activate links
ActiveLink();




// Scroll to section on link click
links.forEach((link)=> {
    link.addEventListener('click', function(){
        var SectionScroll = document.getElementById(link.getAttribute("data-link"));
        SectionScroll.scrollIntoView({
            behavior: "smooth" ,
            block: "center"
        });
    })
})