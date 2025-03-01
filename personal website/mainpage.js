const insta=document.getElementById('insta');
const linkedin=document.getElementById('linkedin');
const github=document.getElementById('github');
const menu = document.getElementById('menu');
const side_bar = document.getElementById('side_bar');
const about = document.getElementById('about');
const projects = document.getElementById('projects');
const contact = document.getElementById('contact');
const skills = document.getElementById('skills');
const resume = document.getElementById('resume');



insta.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/ritika_attada/');
});
linkedin.addEventListener('click', ()=>{
    window.open("https://www.linkedin.com/in/ritika-attada-5078162a5/");
});
github.addEventListener('click', ()=>{
    window.open("https://www.github.com/ritikaattada");
});
menu.addEventListener('click', ()=>{
    side_bar.classList.toggle('sidebar-active');
    menu.classList.toggle('menu_btn-active');
});
about.addEventListener('click', function(){
    window.scrollTo({top: 650, behavior: 'smooth'});
});
skills.addEventListener('click', function(){
    window.scrollTo({top: 1200, behavior: 'smooth'});
});
projects.addEventListener('click', function(){
    window.scrollTo({top: 1800, behavior: 'smooth'});
});
resume.addEventListener('click', ()=>{
    window.open("/resume/RITIKA ATTADA RESUME.pdf");
});
contact.addEventListener('click', function(){
    window.scrollTo({top:2600, behavior: 'smooth'});
});
document.getElementById('ht').addEventListener('click', ()=>{
    window.open("https://www.wikipedia.org/wiki/HTML");
});
document.getElementById('css').addEventListener('click', ()=>{
    window.open("https://www.wikipedia.org/wiki/CSS");
});
document.getElementById('js').addEventListener('click', ()=>{
    window.open("https://www.wikipedia.org/wiki/JavaScript");
});
document.getElementById('project-one').addEventListener('click', ()=>{
    window.open("/projects/weather_app/weather.html");
});
document.getElementById('project-two').addEventListener('click', ()=>{
    window.open("/projects/youtube/youtube.html");
});
document.getElementById('project-three').addEventListener('click', ()=>{
    window.scrollTo({top:0, behavior: 'smooth'});
});
    window.open("https://www.linkedin.com/in/ritika-attada-5078162a5/");
});
document.getElementById('email').addEventListener('click', ()=>{
    window.open(`mailto:attadaritika@gmail.com?subject=%20&body=%20`);
});
