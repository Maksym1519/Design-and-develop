
const scrollBar = () => {
let step = 1;
let line = document.querySelectorAll('.skills-line1');
let line2 = document.querySelectorAll('.skills-line2');
let line3 = document.querySelectorAll('.skills-line3');
let skillsNumber = document.querySelectorAll('.skills-num');
let skillsNumber2 = document.querySelectorAll('.skills-num2');
let skillsNumber3 = document.querySelectorAll('.skills-num3');
let movePic = document.querySelectorAll('.skills-right');
let skillsRight = document.querySelector('.skills-right')

let interval = setInterval(progressBar1, 20);
let interval2 = setInterval(progressBar2, 20);
let interval3 = setInterval(progressBar3, 20);

function progressBar1() {
    if(step >= 75) {
        clearInterval(interval);
    } else {
        step++;
        line.forEach(elem=> {
            elem.style.width = step + "%";
            });
        skillsNumber.forEach(num=> {
        num.innerHTML = step + "%";
        }
            )    
    }
}
progressBar1();
function progressBar2() {
    if(step >= 90) {
        clearInterval(interval2);
    } else {
        step++;
        line2.forEach(elem=> {
            elem.style.width = step + "%";
            });
        skillsNumber2.forEach(num=> {
        num.innerHTML = step + "%";
        }
            )    
    }
}
progressBar2();
function progressBar3() {
    if(step >= 65) {
        clearInterval(interval3);
    } else {
        step++;
        line3.forEach(elem=> {
            elem.style.width = step + "%";
            });
        skillsNumber3.forEach(num=> {
        num.innerHTML = step + "%";
        }
            )    
    }
}
progressBar3();
setTimeout(() => {
line.forEach(function(elem)  {
elem.classList.add('skills-line-ready')
})
//movePic.forEach(function(elem) {
//elem.classList.add('movePics')
//}),3000
})
setTimeout(() => {
    line2.forEach(function(elem)  {
    elem.classList.add('skills-line-ready')
    })
    //movePic.forEach(function(elem) {
    //elem.classList.add('movePics')
    //}),3000
    })
    setTimeout(() => {
        line3.forEach(function(elem)  {
        elem.classList.add('skills-line-ready')
        })
        //movePic.forEach(function(elem) {
        //elem.classList.add('movePics')
        //}),3000
        })
window.onscroll = function() {
    let scroll = window.scrollY;
    if (scroll > 300) {
        skillsRight.classList.add('movePics')
    }
    }
}

    
scrollBar()
