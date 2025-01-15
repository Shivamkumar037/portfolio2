let buttonhover=document.querySelectorAll(".box02");
let boxpersent=document.querySelectorAll(".persent");
buttonhover.forEach(function(elm,i){
    elm.addEventListener("mouseenter",function(){
        boxpersent.forEach( function(val,index){
            if(i==index){
                let t=0;
                let timer5=setInterval(function(){
                    t++;
                    console.log(t);
                    val.style.width=`${t}%`;
                    if(t==100){
                       
                        clearInterval(timer5);
                    }
                },5);
            
             elm.style.boxShadow= "2px 10px 50px 10px rgb(20, 19, 20)";
            }
 })
         });
        elm.addEventListener("mouseleave",function(){
            boxpersent.forEach( function(val,index){
                   val.style.width=`100%`; 
                    elm.style.boxShadow= "";
            })
             });
   })
   let cover=document.querySelector("#cover");
   let button=document.querySelector("#socialcover");
   let count=63,click=0;
   button.addEventListener("click",function(){
    console.log("click");
    if(click==0){
        click=1;
        let timer=  setInterval(function(){
            count--;
            cover.style.left=`${count}vw`;
            if(count==0){
                clearInterval(timer);
            }
                    },20);
                    }else{
    let timer2  =setInterval(function(){
            count++;
            cover.style.left=`${count}vw`;
if(count==63){
        clearInterval(timer2);
           }
  },20);
  click=0;
    }
   });

