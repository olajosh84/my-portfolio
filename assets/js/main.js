const switchBtn = document.querySelector('.switch-btn');
const footer = document.querySelector('footer');
let currentYear = new Date().getFullYear();
footer.innerHTML = `<small>&copy; Copyright ${currentYear} Olajeks. All Rights Reserved.</small>`;
const navLinks = document.querySelectorAll(".link");
navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        ///first remove all links with the active class
        navLinks.forEach(item => {
            item.classList.remove("active");
        })
        //add the active class to the active link
        e.target.classList.add("active");
    })
})

//check color mode document onLoad 
window.addEventListener("DOMContentLoaded", () => {
    let colorMode = localStorage.getItem('darkMode');
    if(colorMode){
        switchBtn.classList.add('slide');
        document.body.classList.add('dark-mode');
    } else {
        switchBtn.classList.remove('slide');
        document.body.classList.remove('dark-mode');
    }
})

//toplink
const topLink = document.getElementById("top-link");
window.addEventListener("scroll", function(){
    let windowHeight = this.scrollY;
    if(windowHeight >= 400){
        topLink.style.display = "block"; 
    }else{
        topLink.style.display = "none"; 
    }
})
//toggle color mode
switchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.currentTarget.classList.toggle('slide');
    document.body.classList.toggle('dark-mode');
    e.currentTarget.classList.contains('slide') ? localStorage.setItem('darkMode', true) : localStorage.removeItem('darkMode');
})

//changing the logo color
/*const logo = document.querySelector('.logo');
logo.innerHTML = "<a href='#''><span class='one-half-logo'>Olajeks</span> <!--<span class='other-half-logo'>Coding</span>--></a>";*/

//toggle links
const menuIcon = document.querySelector(".menu-icon");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
menuIcon.addEventListener("click", function(){
    //get the current height of ul and make it the links-container height
    linksContainer.classList.toggle('show-links');
    linksHeight = links.getBoundingClientRect().height;
    if(linksContainer.classList.contains("show-links")){
        linksContainer.style.height = `${linksHeight}px`;
        //hide bars icon and show times
        this.firstElementChild.style.display = "none";
        this.lastElementChild.style.display = "block";
    }else{
        linksContainer.style.height = `0px`;
        //hide times icon and show bars
        this.firstElementChild.style.display = "block";
        this.lastElementChild.style.display = "none";
    }
                
})

//change navlink active class on window scroll
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let activeLink = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        //console.log(sectionHeight, sectionTop, scrollY);
        if(scrollY >= sectionTop - sectionHeight / 3){
            //get the section id
            activeLink = section.getAttribute("id");
            //console.log(activeLink)
        }
    });
    navLinks.forEach(link => {
        // linkHref = link.getAttribute('href').slice(1);
        link.classList.remove('active')
        if(link.classList.contains(activeLink)){
            //link.classList.remove('active');
            link.classList.add('active');
        }
    })
})
