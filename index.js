// template id template_l7rzi34
//service id service_ranob3h
//user id s8cc6olL5HhWxDL6k
let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;


function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX *scaleFactor;
    const y = event.clientY * scaleFactor;

    for(let i=0; i<shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x*boolInt}px, ${y*boolInt}px)`
    }
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}




function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal-overlay-loading');
    const success = document.querySelector('.modal-overlay-success')
    loading.classList += " modal-overlay-visible"

     emailjs
         .sendForm(
             'service_ranob3h',
             'template_l7rzi34',
             event.target,
             's8cc6olL5HhWxDL6k'
         ).then(()=> {
            loading.classList.remove("modal-overlay-visible")
            success.classList += " modal-overlay-visible"
         }).catch(()=>{
            loading.classList.remove("modal-overlay-visible")
            alert(
                "The Email service is temporarily unavailable. Please contact me directly on marko.babusku@gmail.com"
            )
         })
}

function toggleModal(){
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal-open")
    }
    isModalOpen = true;
    //toggle modal
    document.body.classList += " modal-open"
}