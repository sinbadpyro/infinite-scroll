
const row = document.querySelector('#row');
const URL = 'https://picsum.photos/350/300';

function getRandNum(){
       return Math.floor(Math.random() * 100);
}

function loadImages(numImages = 20){
    let i = 0;
    while(i<numImages){
        const div = document.createElement('div')
        div.classList.add('col-sm-3', 'mt-2');
        const a = document.createElement('a');
        a.setAttribute('data-lightbox','gallery');
        a.setAttribute('href',`${URL}?random=${getRandNum()}`);
        
        const img = document.createElement('img');
        img.src = `${URL}?random=${getRandNum()}`
      
        div.appendChild(a)

       a.appendChild(img);

        row.appendChild(div);
        i++;
    }
}
loadImages();



   window.addEventListener('scroll',()=>{
    console.log(window.scrollY); //scrolled from top
    console.log(window.innerHeight); //visible part of screen
    if(window.scrollY + window.innerHeight >= 
    document.documentElement.scrollHeight){
    loadImages();
    }
})