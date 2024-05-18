 const dropdown = document.querySelector('#dropdown');
 const menu = document.querySelector('#menu');


 dropdown.addEventListener('click', ()=>{
    if(menu.classList.contains('hidden')){

        menu.classList.remove('hidden')
        
    }else{
        menu.classList.add('hidden')
    }

 })