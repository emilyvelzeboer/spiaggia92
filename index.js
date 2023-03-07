//menu hamburger
const toggle = document.getElementById("box");
const menu = document.querySelector(".menu-logo")


toggle.addEventListener("click",()=>{
  box.classList.toggle('active');
  menu.classList.toggle('active');
})

const menuLinks = document.querySelectorAll('.menu-logo ul li a');

menuLinks.forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    const menu = document.querySelector('.menu-logo');
    menu.classList.remove('active');
    toggle.classList.remove('active')
  });
});


//transition
document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('.menu-logo ul li a, .link-freccia');
  
  links.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Impedisce il comportamento predefinito del link
      event.preventDefault();

      // Recupera l'ID dell'elemento di destinazione dal link
      var target = link.hash;

      // Calcola la posizione dell'elemento di destinazione
      var $target = document.querySelector(target);
      var targetPosition = $target.offsetTop;

      // Crea un'animazione per far scorrere gradualmente la pagina verso l'elemento di destinazione
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    });
  });
});



//weather widget
const api_key = 'bebd68b784bd455ca4e121857231802'; // Replace with your own API key
const city = 'Riccione'; // Replace with the city you want to get the weather for
const url = `https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${city}&lang=it`;

const weatherDiv = document.getElementById('weather');

fetch(url)
  .then(response => response.json())
  .then(data => {
    const temperature = data.current.temp_c;
    const description = data.current.condition.text;
    const icon = data.current.condition.icon;
    weatherDiv.innerHTML = `<div class="weather-container"><p class="city">Adesso a ${city}</p><div class="second-container"><img class="weather-icon" src="${icon}"><div class="weather-details"><p class="temperature">${temperature}°C</p><p class="description">${description}</p></div></div></div>`;
  })
  .catch(error => console.error(error));
  

//slideshow della spiaggia
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";

  setTimeout(showSlides, 5000); // Change image every 5 seconds
}


//slideshow del centro benessere

const frame = document.querySelector('.frame')
frame.addEventListener('click',function(e){
   if(!e.target.parentElement.classList.contains('pic')) return
    const pic = e.target.parentElement
    pic.classList.toggle('active')
})


//photogallery nei servizi
const images = document.querySelectorAll(".gallery .card img")

images.forEach((img, key) =>(
  img.src =`https://source.unsplash.com/random?sig=${key}`
))


