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
  const page = params.get("page") || "pro.html"; // default page

  fetch(page)
    .then(res => {
      if (!res.ok) {
        throw new Error("Page not found");
      }
      return res.text();
    })
    .then(data => {
      document.getElementById("content").innerHTML = data;
    })
    .catch(err => {
      document.getElementById("content").innerHTML =
        "<h2>Page not found</h2>";
      console.error(err);
    });
}

window.addEventListener("DOMContentLoaded", loadPage);
