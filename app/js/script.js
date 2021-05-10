console.log('hello');
const body = document.querySelector('body')
const header = document.querySelector('.header');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay')
const fadeElems = document.querySelectorAll('.has-fade');

btnHamburger.addEventListener('click', () =>{
   

    if(header.classList.contains('open')){ // close hamburger menu
        console.log('inside if');
        body.classList.remove('noscroll')
        header.classList.remove('open')
        fadeElems.forEach(element => {
            element.classList.remove('fade-in')
            element.classList.add('fade-out')
        });

        
    }
    else{ //// open hamburger menu
     
        body.classList.add('noscroll')
        header.classList.add('open')
        fadeElems.forEach(element => {
            element.classList.remove('fade-out')
            element.classList.add('fade-in')
        });
       

    }
    
})