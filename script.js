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


function loadPage() {
  const params = new URLSearchParams(window.location.search);
  const page = params.get("page") || "home";

  fetch(page)
    .then(res => res.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;
    });
}

window.addEventListener("DOMContentLoaded", loadPage);
