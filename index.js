let stars = document.querySelectorAll("#star")

stars.forEach(star => {
    star.addEventListener("click",()=>{
        star.classList.toggle("yellow")
        })
});



let removeCont = document.querySelectorAll(".xcont img")
let projects = document.querySelector(".project-cont")

let project = document.querySelector(".projects")




    removeCont.forEach(remove=>{
       
        remove.addEventListener("click",()=>{
            
            remove.parentNode.parentNode.remove()
            if (projects.childNodes.length === 7){
              
              let r = document.createElement("div")
              r.classList.add("projects")
               projects.appendChild(r)
               
               let newcont = document.querySelector("div .projects ")  
             
c = document.createElement("button")
c.textContent ="+"

newcont.appendChild(c)

                }
        })
       
    })
  




let menuToggle = document.querySelector(".menu")
let dash = document.querySelector(".dash-cont")


menuToggle.addEventListener("click",()=>{
dash.classList.toggle("show")

})


