const tempLoad =()=> {
let temp=document.getElementById('sign');
temp.innerHTML="&#xf251";

setTimeout(()=>{
     temp.innerHTML="&#xf252";
     temp.style.color="#f8b627";
},1000);
setTimeout(()=>{
    temp.innerHTML="&#xf253";
},2000);
}
tempLoad();
setInterval(tempLoad,3000);
const para=document.querySelector('#countpara');
const btn=document.querySelector('#btn');
const stopinterval=document.querySelector('#btnstop');
var x;
var hr=prompt(`Hours to Start Countdown :-`);
let countDownDate=new Date().getTime()+hr*60*60*1000;
const startcount=()=>{
    para.innerHTML="Count down starts now.......";
     x=setInterval(()=>{
    let now=new Date().getTime();
    let timeLeft=countDownDate-now;
    const days=Math.floor(timeLeft/(1000*60*60*hr));
    const hours=Math.floor((timeLeft/(1000*60*60))%hr);
    const minutes=Math.floor((timeLeft/(1000*60))%60);
    const seconds=Math.floor((timeLeft/1000)%60);
    para.innerHTML=days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    if (timeLeft < 0) {
        clearInterval(x);
        console.log('CountDown Finished');
    }
    }, 1000);
}
    btn.addEventListener('click',startcount);
    stopinterval.addEventListener('click',()=>{
    clearInterval(x)
});
const mdiv=document.getElementById('countdiv');
mdiv.addEventListener('mouseenter',()=>{
    mdiv.style.backgroundColor="lightgreen";
});
mdiv.addEventListener('mouseleave',()=>{
    mdiv.style.backgroundColor="bisque";
});
const mstart=document.getElementById('btn');
mstart.addEventListener('mouseenter',()=>{
    mstart.style.backgroundColor="lightblue";
});
mstart.addEventListener('mouseleave',()=>{
    mstart.style.backgroundColor="white";
});
const mstop=document.getElementById('btnstop');
mstop.addEventListener('mouseenter',()=>{
    mstop.style.backgroundColor="red";
});
mstop.addEventListener('mouseleave',()=>{
    mstop.style.backgroundColor="white";
});