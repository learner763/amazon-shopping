document.addEventListener("DOMContentLoaded",function()
{
    let acc=document.getElementsByClassName("acc")
    let or=document.getElementById("or")
    let pass_length=document.getElementById("pass_length")
    let pass_length_=document.getElementById("pass_length_")
    let Back=document.getElementById("Back")
    let enter=document.getElementsByClassName("Enter")
    let create=document.getElementsByClassName("create")
    acc[0].addEventListener("click",function()
    { 
        acc[0].style.display="none"
        for(let j=0;j<2;j++)
            {
                create[j].style.display="block"
            }  
        enter[0].style.display="block"
    })
    
    enter[0].addEventListener("click",function()
        {
            const username=create[0].value
            if(username[0]!=="@" || username.length<2){pass_length_.style.display="block"}
            else{pass_length_.style.display="none"}
            if(create[1].value.length<8){pass_length.style.display="block"}
            else{
                pass_length.style.display="none"
                if(username[0]=="@" && username.length>=2)
                {
                    localStorage.setItem("u",username)
                    window.open("index.html","_self")
                }
            }
        })
         
})
