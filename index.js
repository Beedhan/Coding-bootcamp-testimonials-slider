const next = document.getElementById("next")
const previous= document.getElementById("previous")
const personImage= document.getElementById("person-image")
const position = document.querySelector(".position");
const quote= document.querySelector("h1");
const name= document.querySelector("h2");


const images =["./images/image-tanya.jpg","./images/image-john.jpg"]
currentImage =0;



next.addEventListener("click",()=>{
    console.log(currentImage)

    if(currentImage>=images.length-1){
        currentImage=0;
        changeThings();
        return;
    }
    currentImage+=1;
    changeThings();
})
previous.addEventListener("click",()=>{
    console.log(currentImage,"Prev")
    if(currentImage<images.length-1){
        currentImage=images.length-1;
        changeThings();
        return;
    }
    currentImage-=1;
    changeThings();
})

const changeThings=()=>{
    personImage.src =images[currentImage]
    if(currentImage===0){
        quote.innerText=`"I've been interested in coding for a 
        while but never taken the jump,until now.I 
        couldn't recommend this course enough. I'm now in the job of my dreams and so 
        excited about the future."`
        name.innerText ="Tanya Sinclair"
        position.innerText="UX Engineer"

    }else if(currentImage===1){
        quote.innerText=`"If you want to lay the best foundation 
        possible I'd recommend taking this 
        course. The depth the instructors go into 
        is incredible. I now feel so confident about 
        starting up as a professional developer. "`
        name.innerText ="John Tarkpor"
        position.innerText="Junior Frond-end Developer"
    }
}