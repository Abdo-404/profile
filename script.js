// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade").forEach(el => observer.observe(el));

// Mobile menu
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}


function includeHTML() {
  const elements = document.querySelectorAll("[data-include]");

  elements.forEach(el => {
    const file = el.getAttribute("data-include");

    fetch(file)
      .then(res => res.text())
      .then(data => {
        el.innerHTML = data;
      });
  });
}

document.addEventListener("DOMContentLoaded", includeHTML);
