document.addEventListener("DOMContentLoaded",function()
{
    let c1=document.getElementsByClassName("c1")
    let sign=document.getElementById("SignIn")
    let categories=document.querySelectorAll(".c1 label")
    let cat=[]
    let Location=document.getElementById("Location")
    for(let i=0;i<categories.length;i++)
    {
        cat.push(categories[i].textContent)
    }
    for(let i=0;i<c1.length;i++)
    {
        c1[i].addEventListener("click",function()
        {
            localStorage.setItem("item",i)
            localStorage.setItem("cat",JSON.stringify(cat))
            window.open("index1.html","_self")
        })
    }
    sign.addEventListener("click",function()
    {
        window.open("index_.html","_self")
    })
    Location.addEventListener("click",function()
    {
        window.open("pr.html","_self")

    })
    let c=localStorage.getItem("c")
    let user=localStorage.getItem("u")
    sign.textContent=user
    Location.textContent=c

    



}
)