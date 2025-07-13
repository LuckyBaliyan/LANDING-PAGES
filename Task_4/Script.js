
const bg = document.querySelectorAll(".generated-color");
const para = document.querySelectorAll("label p");
const btn = document.querySelectorAll(".generated-color button");
const message = document.querySelector(".message");
const click = document.querySelector("#click");


function copyCode(){
    for(const cb of btn){
        cb.onclick= ()=>{
          cb.innerText = 'copied';

          setTimeout(()=> cb.innerText = 'copy',1000);

          const copiedCode = cb.nextElementSibling.innerText;
          navigator.clipboard.writeText(copiedCode);

          message.innerText = copiedCode;
          message.style.opacity = 1;
          message.style.color = copiedCode;
          message.style.transfrom = `translateY(-10px)`;

          setTimeout(() => {
            message.style.opacity = 0;
          }, 1000);

        }
    }
}

copyCode();


function generateColor(){
    for(const b of bg){
        var color = '#'+Math.random().toString(16).substr(6,6);
        var color2 = '#'+Math.random().toString(16).substr(2,6);
        b.style.backgroundColor = color;
        b.querySelector('p').innerText = color;
        document.querySelector(".wrapper").style.backgroundImage = `linear-gradient(to bottom left,${color},${color2})`;

        var color_picker = b.lastElementChild;
        color_picker.value = color;
        
        color_picker.oninput = function(){
            this.parentElement.style.backgroundColor = this.value;
            this.previousElementSibling.querySelector('p').innerText = this.value;
            document.querySelector(".wrapper").style.backgroundImage = `linear-gradient(to bottom left,${color},${this.value})`;
        }
    }
}

generateColor();

document.addEventListener("DOMContentLoaded",()=>{
    generateColor();
    click.onclick = ()=>{
        generateColor();
    }
}
)