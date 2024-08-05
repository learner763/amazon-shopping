document.addEventListener("DOMContentLoaded",function()
{
    let pass_length=document.getElementById("pass_length")
    let enter=document.getElementsByClassName("Enter")
    let create=document.getElementsByClassName("create")
    create[0].style.display="block"
    enter[0].style.display="block"
    const countries = [
        "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua-Barbuda",
        "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
        "Bosnia-Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina-Faso",
        "Burundi", "Cabo-Verde", "Cambodia", "Cameroon", "Canada", "Central-African-Republic",
        "Chad", "Chile", "China", "Colombia", "Comoros", "Congo", "Costa-Rica",
        "Croatia", "Cuba", "Cyprus", "Czechia", "Denmark", "Djibouti", "Dominica",
        "Dominican-Republic", "Ecuador", "Egypt", "El-Salvador", "Equatorial-Guinea", "Eritrea",
        "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
        "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea",
        "Guinea-Bissau", "Guyana", "Haiti", "Holy See", "Honduras", "Hungary", "Iceland", "India",
        "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
        "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
        "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar",
        "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall-Islands", "Mauritania",
        "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro",
        "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
        "Netherlands", "NewZealand", "Nicaragua", "Niger", "Nigeria", "North-Korea", "North-Macedonia",
        "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua-New-Guinea",
        "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
        "Rwanda", "Saint-Kitts-Nevis", "Saint-Lucia", "Saint-Vincent-Grenadines",
        "Samoa", "San-Marino", "Sao-Tome-Principe", "Saudi-Arabia", "Senegal", "Serbia",
        "Seychelles", "Sierra-Leone", "Singapore", "Slovakia", "Slovenia", "Solomon-Islands",
        "Somalia", "South-Africa", "South-Korea", "South-Sudan", "Spain", "SriLanka", "Sudan",
        "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand",
        "Timor-Leste", "Togo", "Tonga", "Trinidad-Tobago", "Tunisia", "Turkey", "Turkmenistan",
        "Tuvalu", "Uganda", "Ukraine", "United-Arab-Emirates", "United-Kingdom", "United-States-America",
        "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
    ];
    
    
    enter[0].addEventListener("click",function()
        {
            const c=create[0].value
            if(countries.includes(c)==false){pass_length.style.display="block"}
            else{
                pass_length.style.display="none"
                localStorage.setItem("c",c)
                window.open("index.html","_self")
                
            }
        
        })
})