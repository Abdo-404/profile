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
