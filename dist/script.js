/* Nav Shadow */
window.addEventListener("scroll",()=>{
  if(window.scrollY>50){
    document.querySelector("nav").classList.add("scrolled");
  } else {
    document.querySelector("nav").classList.remove("scrolled");
  }
});

/* Section Animation */
const sections=document.querySelectorAll("section");
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("visible");
    }
  });
},{threshold:0.2});
sections.forEach(section=>observer.observe(section));

/* Timeline Animation */
const items=document.querySelectorAll(".timeline-item");
const observer2=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{threshold:0.3});
items.forEach(item=>observer2.observe(item));



const wowTexts = document.querySelectorAll('.wow-text');

const wowObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

wowTexts.forEach(text => wowObserver.observe(text));