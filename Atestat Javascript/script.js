const changeModeButton = document.querySelector('#change-mode');
const body = document.body;
const containerCategorii = document.querySelector('.container-categorii');
const containerParallax = document.querySelector('.parallax-container');
const navBar = document.querySelector('#navbar');
const links = document.querySelectorAll('.nav-a');
const linksParent = document.querySelector('.nav-links');
const parallax1 = document.querySelector('.parallax1');
const parallax2 = document.querySelector('.parallax2');
const parallax3 = document.querySelector('.parallax3');
const dropDownButton = document.querySelectorAll('.drop-down__button');
let mode = 0;

changeModeButton.addEventListener("click", () => {
    if(mode===0){
      changeModeButton.textContent = 'Dark Mode';
      changeModeButton.style.color = 'black';
      body.style.backgroundColor = 'white';
      containerCategorii.classList.remove('cc-dark-mode');
      containerCategorii.classList.add('cc-light-mode');
      containerParallax.classList.remove('p-dark-mode');
      containerParallax.classList.add('p-light-mode');
      body.style.color = 'black';
      navBar.style.backgroundColor = '#E0EAFC';
      linksParent.style.backgroundColor = '#E0EAFC';
      for(const link of links){
        link.classList.remove('na-dark-mode');
        link.classList.add('na-light-mode');
      }
      for(const button of dropDownButton){
        button.style.backgroundColor = '#E0EAFC';
        button.style.color = 'black';
        const dropDown__content = button.nextElementSibling;
        dropDown__content.style.backgroundColor = '#CFDEF3';
      }
      parallax1.style.background= "url('imagini/neverseaday.jpg') no-repeat center";
      parallax1.style.backgroundSize = "cover";
      parallax1.style.backgroundAttachment = "fixed";
      parallax1.style.height = "800px";

      parallax2.style.background= "url('imagini/untoldday.jpg') no-repeat center";
      parallax2.style.backgroundSize = "cover";
      parallax2.style.backgroundAttachment = "fixed";
      parallax2.style.height = "800px";
      
      parallax3.style.background= "url('imagini/electriccastleday.jpg') no-repeat center";
      parallax3.style.backgroundSize = "cover";
      parallax3.style.backgroundAttachment = "fixed";
      parallax3.style.height = "800px";
      mode = 1;
    }
    else if(mode===1){
      changeModeButton.textContent = 'Light Mode';
      changeModeButton.style.color = 'black';
      body.style.backgroundColor = '#1f2020';
      containerCategorii.classList.remove('cc-light-mode');
      containerCategorii.classList.add('cc-dark-mode');
      containerParallax.classList.remove('p-light-mode');
      containerParallax.classList.add('p-dark-mode');
      body.style.color = 'white';
      navBar.style.backgroundColor = '#000000';
      linksParent.style.backgroundColor = '#000000';
      for(const link of links){
        link.classList.remove('na-light-mode');
        link.classList.add('na-dark-mode');
      }
      for(const button of dropDownButton){
        button.style.backgroundColor = '#555555';
        button.style.color = 'white';
        const dropDown__content = button.nextElementSibling;
        dropDown__content.style.backgroundColor = '#555555';
      }
      parallax1.style.background= "url('imagini/neverseanight.jpg') no-repeat center";
      parallax1.style.backgroundSize = "cover";
      parallax1.style.backgroundAttachment = "fixed";
      parallax1.style.height = "800px";

      parallax2.style.background= "url('imagini/untoldnight.jpg') no-repeat center";
      parallax2.style.backgroundSize = "cover";
      parallax2.style.backgroundAttachment = "fixed";
      parallax2.style.height = "800px";
      
      parallax3.style.background= "url('imagini/electriccastlenight.jpg') no-repeat center";
      parallax3.style.backgroundSize = "cover";
      parallax3.style.backgroundAttachment = "fixed";
      parallax3.style.height = "800px";
      mode = 0;
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px 0px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting){
      return;
    } else{
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});



const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index)=> {
            if(link.style.animation){
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
            }
        });
 
        burger.classList.toggle('toggle');
    });

}

navSlide();


document.querySelectorAll('.drop-down__button').forEach(button => {
  button.addEventListener('click', () => {
    const dropDownContent = button.nextElementSibling;
    button.classList.toggle('drop-down__button--active');
    console.log(dropDownContent.scrollHeight);

    if(button.classList.contains('drop-down__button--active')){
      dropDownContent.style.maxHeight = dropDownContent.scrollHeight + 'px';
    } else {
      dropDownContent.style.maxHeight = 0;
    }
  })
})
