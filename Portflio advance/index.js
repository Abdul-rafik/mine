const section = document.querySelectorAll(".section");
const sectbtns = document.querySelectorAll(".controls");
const secbtn = document.querySelectorAll(".control");
const allsections = document.querySelector(".main");


function pageTransition(){

    for (let i = 0; i< secbtn.length; i++ ) { 
        secbtn[i].addEventListener("click",function(){
            let currentbtn = document.querySelectorAll(".active-btn");
            currentbtn[0].className = currentbtn[0].className.replace("active-btn","");
            this.className += " active-btn";
        })
    }

        allsections.addEventListener("click", function (e) {
            
        const id = e.target.dataset.id;
        if(id){
            //remove selectors
            sectbtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');

            //hide other sections
            section.forEach((section)=>{
                section.classList.remove('active');
            })


            const element = document.getElementById(id)
            element.classList.add("active");
        }
    })

    // toogle theme
    const themeBtn = document.querySelector(".theme-btn");
    themeBtn.addEventListener("click",()=>{
    let element = document.body;
    element.classList.toggle("light-mode")
    })
}

pageTransition();