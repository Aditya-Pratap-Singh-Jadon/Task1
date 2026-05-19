alert("Hi welcome to Aditya's intro page... ")
alert("Click on the images to toggle certain interations.")

const toggle= document.getElementById("toggle");
toggle.addEventListener("click", ()=>{
    toggle.classList.toggle("active");
    document.body.classList.toggle("dark-mode");
});

const aboutme= document.getElementById("box");
aboutme.addEventListener("click", ()=>{
    aboutme.classList.toggle("active");
});

function dateTime(){
    const date= new Date();
    const options={
        day:'numeric',
        month:'short',
        year: 'numeric',
        hour: 'numeric',
        minute:'2-digit',
        second:'2-digit'
    };
    document.getElementById("date").innerHTML=date.toLocaleString('en-IN',options);
}
dateTime();
setInterval(dateTime,1000);
