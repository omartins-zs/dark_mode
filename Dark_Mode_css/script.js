const btn = document.querySelector('.btn');
const container = docuemnt.querySelector('.container');

btn.onclick = function(){
    this.classList.toggle('active')
    container.classList.toggle('active')
}