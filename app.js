//setting up variables
let r=document.querySelector(".rock");
let p=document.querySelector(".paper");
let s=document.querySelector(".scissors");
let msg=document.querySelector(".msg-container");
let youWin=0;
let compWin=0;
let user;

//adding event listener
r.addEventListener("click",()=>{
    user=0;
    console.log(user);
    generateRandom(user);
})

p.addEventListener("click",()=>{
    user=1;
    console.log(user);
    generateRandom(user);
})

s.addEventListener("click",()=>{
    user=2;
    console.log(user);
    generateRandom(user);
})

//generate random number
function generateRandom(user)
{
    let comp=Math.floor(Math.random()*3);
    if(comp==user)
    {
        console.log('draw');
        msg.innerText='draw!';
        msg.style.color="#B19470"
        msg.classList.remove("hidden");

    }
    if(comp==1 && user==0)
    {
        console.log("mai har gaya");
        updateComp();
    }
    if(comp==1 && user==2)
    {
        console.log("jeet gaya");
        updateUser();
    }
    if(comp==0 && user==2)
    {
        console.log("mai har gaya");
        updateComp();
    }
    if(comp==0 && user==1)
    {
        console.log("jeet gaya");
        updateUser();
    }
    if(comp==2 && user==1)
    {
        console.log("mai har gaya");
        updateComp();
    }
    if(comp==2 && user==0)
    {
        console.log("jeet gaya");
        updateUser();
    }
}


//update functions
function updateUser()
{
    youWin++;
    console.log("you="+youWin);
    document.querySelector(".you>h3").innerHTML="<h3>"+youWin+"</h3>";
    msg.style.color="green";
    msg.innerText="you win!";
    msg.classList.remove("hidden");
}

function updateComp()
{
    compWin++;
    console.log("comp="+compWin);
    document.querySelector(".comp>h3").innerHTML="<h3>"+compWin+"</h3>";
    msg.style.color="red";
    msg.innerText="you lost!";
    msg.classList.remove("hidden");
}