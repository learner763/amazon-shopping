document.addEventListener("DOMContentLoaded",function()
{
    let acc=document.getElementsByClassName("acc")
    let or=document.getElementById("or")
    let pass_length=document.getElementById("pass_length")
    let pass_length_=document.getElementById("pass_length_")
    let Back=document.getElementById("Back")
    let enter=document.getElementsByClassName("Enter")
    let create=document.getElementsByClassName("create")
    for(let i=0;i<acc.length;i++)
    {
    acc[i].addEventListener("click",function()
    { 
        for(let j=0;j<acc.length;j++)
            {
                acc[j].style.display="none"
                create[j].style.display="block"
            }  
        or.style.display="none"
        enter[i].style.display="block"
        Back.style.display="block"
    })}
    Back.addEventListener("click",function()
    {
        pass_length.style.display="none"
        pass_length_.style.display="none"
        for(let i=0;i<acc.length;i++)
            {
                acc[i].style.display="block"
                create[i].style.display="none"
                enter[i].style.display="none"
            }  
        or.style.display="block"
        Back.style.display="none"
    })  
    for(let r=0;r<enter.length;r++)
        {
            enter[r].addEventListener("click",function()
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
        }  
})