document.addEventListener("DOMContentLoaded",function()
{
    let c1=document.getElementsByClassName("c1")
    let sign=document.getElementById("SignIn")
    let search=document.getElementById("Search_Amazon")

    let categories=document.querySelectorAll(".c1 label")
    let cat=[]
    let Location=document.getElementById("Location")
    for(let i=0;i<categories.length;i++)
    {
        cat.push(categories[i].textContent)
    }
    let search_bar=document.getElementsByClassName("search_bar")
    let s=document.getElementsByClassName("s")
    
let r=0
    search.addEventListener("click",function()
{
    if(r%2==0)
    {
        for(let i=0;i<search_bar.length;i++)
        {
            search_bar[i].style.display="block"
        }
        for(let i=0;i<cat.length;i++)
        {
            s[i].textContent=cat[i]
            s[i].style.margin="10px"
            s[i].style.border="black solid"
            s[i].style.borderWidth="1px"

        }
    }
    else
    {
        for(let i=0;i<search_bar.length;i++)
            {
                search_bar[i].style.display="none"
            }
    }
    r+=1
})
    for(let i=0;i<c1.length;i++)
    {
        c1[i].addEventListener("click",function()
        {
            localStorage.setItem("item",i)
            localStorage.setItem("cat",JSON.stringify(cat))
            window.open("index1.html","_self")
        })
    }
    for(let i=0;i<s.length;i++)
        {
            s[i].addEventListener("click",function()
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
