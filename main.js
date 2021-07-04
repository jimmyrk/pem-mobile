//* Dark mode
function darkMode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

//* Footer
document.getElementById("year").innerHTML = new Date().getFullYear();

//* AOS
AOS.init({
  once: true,
});

//* GSAP 3
gsap.from(".hero p, .btn", {
  duration: 1.5,
  delay: 0.5,
  x: -200,
  opacity: 0,
  ease: "bounce",
});

gsap.from(".hero_img", {
  duration: 1.5,
  delay: 1,
  x: 200,
  opacity: 0,
  ease: "bounce",
});

//*Get the button:
mybutton = document.getElementById("scrollTop");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
