document.addEventListener("DOMContentLoaded",function()
{
    let lables=document.getElementsByClassName("l")
    let payment=document.getElementsByClassName("p")

    let labler=document.getElementById("label")
    let images=document.getElementsByClassName("im")
    let rate=document.getElementsByClassName("r")
    let price=document.getElementsByClassName("d")
    let products=document.querySelectorAll(".c1 label")
    let c1i=document.querySelectorAll(".c1 i")
    let image__=document.querySelectorAll(".c1 img")
    let c1=document.getElementsByClassName("c1")
    let cart=document.getElementById("Cart")
    let pay=document.getElementById("pay")

    let i1=document.getElementById("i1")
    let i2=document.getElementById("i2")
    let i3=document.getElementById("i3")
    let i4=document.getElementById("i4")
    let i5=document.getElementById("i5")
    let i6=document.getElementById("i6")
    let icons=[i1,i2,i3,i4,i5,i6]
    let categories=JSON.parse(localStorage.getItem("cat"))
    let thing=localStorage.getItem("item")
    thing=parseInt(thing)
    let r=thing
    document.title=categories[thing]
    labler.textContent=categories[thing]

    // Define global variables for ratings
    let rating1_ = "3.8"; // from home_kitchen
    let rating2_ = "4.2"; // from home_kitchen
    let rating3_ = "4.2"; // from home_kitchen
    let rating4_ = "4.2"; // from home_kitchen
    let rating5_ = "4.1"; // from home_kitchen
    let rating6_ = "4.1"; // from home_kitchen
let rating1 = "4.8"; // from home_kitchen
let rating2 = "4.9"; // from home_kitchen
let rating3 = "4.7"; // from home_kitchen
let rating4 = "4.7"; // from home_kitchen
let rating5 = "3.8"; // from home_kitchen
let rating6 = "4.3"; // from home_kitchen

let rating7 = "4.8"; // from body_beauty
let rating8 = "4.6"; // from body_beauty
let rating9 = "4.8"; // from body_beauty
let rating10 = "4.7"; // from body_beauty
let rating11 = "4.7"; // from body_beauty
let rating12 = "4.6"; // from body_beauty

let rating13 = "4.4"; // from dresses
let rating14 = "4.4"; // from dresses
let rating15 = "4.7"; // from dresses
let rating16 = "4.4"; // from dresses
let rating17 = "4.5"; // from dresses
let rating18 = "4.6"; // from dresses

let rating19 = "4.6"; // from paint
let rating20 = "4.1"; // from paint
let rating21 = "4.6"; // from paint
let rating22 = "4.4"; // from paint
let rating23 = "4.2"; // from paint
let rating24 = "4.6"; // from paint

let rating25 = "4.0"; // from ceiling
let rating26 = "4.2"; // from ceiling
let rating27 = "4.6"; // from ceiling
let rating28 = "4.8"; // from ceiling
let rating29 = "5.0"; // from ceiling
let rating30 = "4.6"; // from ceiling

let rating31 = "4.4"; // from digital
let rating32 = "4.6"; // from digital
let rating33 = "4.3"; // from digital
let rating34 = "4.5"; // from digital
let rating35 = "4.5"; // from digital
let rating36 = "4.3"; // from digital

let rating37 = "3.5"; // from vr
let rating38 = "5.0"; // from vr
let rating39 = "4.8"; // from vr
let rating40 = "4.3"; // from vr
let rating41 = "3.6"; // from vr
let rating42 = "4.7"; // from vr

let rating43 = "4.7"; // from phone
let rating44 = "4.6"; // from phone
let rating45 = "4.5"; // from phone
let rating46 = "4.5"; // from phone
let rating47 = "4.5"; // from phone
let rating48 = "4.6"; // from phone

let rating49 = "4.2"; // from pc
let rating50 = "4.1"; // from pc
let rating51 = "4.2"; // from pc
let rating52 = "5.0"; // from pc
let rating53 = "4.4"; // from pc
let rating54 = "4.6"; // from pc

let rating55 = "4.3"; // from health
let rating56 = "4.0"; // from health
let rating57 = "4.0"; // from health
let rating58 = "4.5"; // from health
let rating59 = "4.6"; // from health
let rating60 = "3.8"; // from health

let rating61 = "4.4"; // from ps
let rating62 = "4.4"; // from ps
let rating63 = "4.4"; // from ps
let rating64 = "4.8"; // from ps
let rating65 = "4.0"; // from ps
let rating66 = "4.4"; // from ps
let ratingsArray = [rating1_,rating2_,rating3_,rating4_,rating5_,rating6_,
    rating1, rating2, rating3, rating4, rating5, rating6, // home_kitchen
    rating7, rating8, rating9, rating10, rating11, rating12, // body_beauty
    rating13, rating14, rating15, rating16, rating17, rating18, // dresses
    rating19, rating20, rating21, rating22, rating23, rating24, // paint
    rating25, rating26, rating27, rating28, rating29, rating30, // ceiling
    rating31, rating32, rating33, rating34, rating35, rating36, // digital
    rating37, rating38, rating39, rating40, rating41, rating42, // vr
    rating43, rating44, rating45, rating46, rating47, rating48, // phone
    rating49, rating50, rating51, rating52, rating53, rating54, // pc
    rating55, rating56, rating57, rating58, rating59, rating60, // health
    rating61, rating62, rating63, rating64, rating65, rating66  // ps
];
let fitness=[["Health Fitness Tracker 2024 with 24/7 Heart Rate, Blood Oxygen, Blood Pressure, Sleep Tracker, IP68 Waterproof Activity Trackers with Step Tracker",
    "fitness.png",rating1_,"$48","white"
],["Smart Watch for Women (Answer /Make Calls), Alexa Built-in, Fitness Tracker, Heart Rate/Sleep Tracker/ Waterproof, Smartwatch Compatible Android iPhone",
    "fitness1.png",rating2_,"$53","white"
],["Amazfit Active Smart Watch 42mm,with AI Fitness ,Sleep Coach, GPS, Alexa-Enabled,Bluetooth Calling and Music, 14 Day Battery, Fitness Tracker with more than 120 Sports Modes, for Android and iPhone"
    ,"fitness2.png",rating3_,"$100","white"
],["Amazfit Bip 5 Unity Smart Watch 46mm, 11-Day Battery,Fitness Activity Tracker with 120+ Sports Modes, Heart Rate, Sleep Monitor,Customizable Watch Faces, for Android and iPhone",
    "fitness3.png",rating4_,"$70","white"

],["ENOMIR Smart watch for Women Men with Bluetooth Call,Smartwatch with Alexa Built-in,Heart Rate SpO2 Sleep Monitor,5ATM Waterproof,Step Calorie Activity Trackers and Smartwatches for iOS&Android Phones",
    "fitness4.png",rating5_,"$46","white"

],["ENOMIR Smart Watch for Men Women(Answer/Make Call), Alexa Built-in,Fitness with Heart Rate SpO2 Sleep Monitor 100 Sports 5ATM Waterproof Activity Trackers and Smartwatches iOS&Android Phones",
    "fitness5.png",rating6_,"$60","white"
]]

    let home_kitchen=[["KitchenAid Universal Nesting Plastic Mixing Bowls, Set Of 3, 2.5 quart, 3.5 quart, 4.5 quart, Non Slip Base with Easy Pour Spout to Reduce Mess, Dishwasher Safe, Aqua Sky, White, Gray",
        "kitchen1.png",rating10,"$25","yellow"
    ],["5 QT Stainless Steel Mixer Bowl Compatible With Kitchenaid Tilt-Head Stand Mixers 4.5&5-Quart,Dishwasher Safe,5 Quart Mixing Bowl with Handle(𝗦𝘁𝗮𝗶𝗻𝗹𝗲𝘀𝘀 𝗦𝘁𝗲𝗲𝗹 𝗣𝗼𝗹𝗶𝘀𝗵𝗲𝗱)"
        ,"kitchen2.png","4.9","$28","yellow"
    ],["Measuring Cups and Spoons Set, 7 Stainless Steel Nesting Measuring Cups & 7 Spoons, 5 Mini Measuring Spoons & 2 Detachable Rings, Kitchen Gadgets for Cooking & Baking, Set of 21",
        "kitchen3.png","4.7","$25","yellow"
    ],["Amazon Basics Electric Kettle, Stainless Steel, Portable Fast-Boiling, Kettle for Boiling Water, Tea and Coffee, Auto Shut-Off and Boil Dry Protection, 1 Liter, Black and Silver0",
        "kitchen4.png","4.7","$20","yellow"
    ],["Lilola Home Lucca 84 W Dark Gray Linen Reversible Sleeper Sectional Sofa with Storage Chaise",
        "kitchen5.png","3.8","$500","white"
    ],["Mattress Topper Twin Mattress Pad Protector  - Extra Thick Mattress Cover(Twin Size)",
        "kitchen6.png","4.3","$57","white"
    ]]

    let body_beauty=[["Old Spice Body Wash for Men, 24/7 Shower Fresh with Lasting Scent,   24 fl oz (Pack of 2)",
        "beauty1.png","4.8","$13","yellow"
    ],["Dial Men 3in1 Body, Hair and Face Wash, Recharge, 69 fl oz (3-23 fl oz Bottles)"
        ,"beauty2.png","4.6","$17","yellow"
    ],["Dove Body Wash Deep Moisture 4 Count For Dry Skin Moisturizing Skin Cleanser Nourishes The Driest Skin 20 oz (pack of 4)",
        "beauty3.png","4.8","$20","yellow"
    ],["Colgate Baking Soda & Peroxide Toothpaste - Whitens Teeth, Fights Cavities & Removes Stains, Brisk Mint, 6 Ounce (Pack of 2)",
        "beauty4.png","4.7","$4","yellow"
    ],["Softsoap Body Wash, Honeysuckle & Orange Burst Body Wash, 20 Ounce 4 Pack",
        "beauty5.png","4.7","$20","yellow"
    ],["PEARS Body Wash, Natural Oils – Pure & Gentle 100% Soap-Free Glowing Skin, 16.9 Fl Oz (Pack of 2)",
        "beauty6.png","4.6","$20","yellow"
    ]]

    
    let dresses=[["Boy's Suit Formal Slim Fit 5 Pieces Suit Set Blazer Vest Pants with Adjustable Waist Shirt with Tie",
        "dress1.png","4.4","$55","white"
    ],["Amazon Essentials Women Long-Sleeve Lightweight Crewneck Sweater (Available in Plus Size)",
        "dress2.png","4.4","$25","white"
    ],["Under Armour Men Fast Left Chest Short Sleeve T Shirt"
        ,"dress3.png","4.7","$19","yellow"
    ],["DELCARINO Men's Long Sleeve Button Up Shirts Solid Slim Fit Casual Business Formal Dress Shirt",
        "dress4.png","4.4","$23","white"

    ],["GRACE KARIN Women's Classic Long Sleeve Knit Cardigan Sweaters Casual Open Front Button Down ",
        "dress5.png","4.5","$30","yellow"

    ],["QBK 4T to Youth Neon Shirt Kids UPF 50+ Dry Fit Athletic Short Sleeve T Shirts for Boys and Girls",
        "dress6.png","4.6","$11","yellow"
    ]]
    
    let paint=[["Pro Grade Paint Brushes - 5-Piece Flat and Angle Paint Brush Set for All Latex and Oil Paints & Stains - Home Improvement - Interior & Exterior Use",
        "paint1.png","4.6","$8","yellow"
    ],["Stead Max Paint Brush Set (6 Pieces), Set of 6 Multi-Sized Brushes, Professional Quality Painting Tool Kit, Two Sets of 1, 1.5, and 2 Inch Brushes (Pack of 6)",
        "paint3.png","4.1","$7","white"
    ],["Stain Brushes for Chalk Paint Wood, Walls, Flat and Round Tapered Painting , Pack of 3 Green",
        "paint4.png","4.6","$10","white"
    ],["Pro Grade - Chip Paint Brushes - 36 Ea 2.5 Inch Chip Paint Brush Light Brown",
        "paint5.png","4.4","$20","white"

    ],["Stain Brush Set 1-inch to 4-inch Assortment, Bristle Paint Brush, Natural Bristle Blended , Chip Paint",
        "paint6.png","4.2","$10","white"

    ],["Deck Stain Brush,  Soft Tip Paint Brushes for Walls, Trim Paint Brushes, Paint Brushes for Painting Walls",
        "paint2.png","4.6","$7","yellow"
    ]]

    let ceiling=[["52 Inch Ceiling Fans with Lights and Remote,Outdoor Ceiling Fans with Dimmable 3 Colors 6 Speeds,  Noiseless DC Motor,Modern LED Ceiling Fans ",
        "ceiling1.png","4.0","$100","white"
    ],["Black Ceiling Fans with Lights - Outdoor Ceiling Fan with Remote, 52 Inch Modern Ceiling Fan for Patio, Bedroom Living Room",
        "ceiling2.png","4.2","$90","white"
    ],["Dimmable T6 LED Bulbs, 4W E12 Edison Light Bulbs Soft White 3000K,500lm, 40W Candelabra Incandescent Bulbs Equivalent Vintage LED Filament Edison Candle Bulb with Decorative, 6Pack",
        "ceiling3.png","4.6","$23","yellow"
    ],["E12 Candelabra LED Light Bulbs 60W Equivalent, 6000K Daylight White, Dimmable LED Chandelier Bulb, 6W 600Lumens Ceiling Fan Bulb, T6 Tube Edison Candle Light Bulbs, Pack of 6",
        "ceiling4.png","4.8","$16","yellow"

    ],["Wood Ceiling Fans with Lights: 52 Inch Outdoor Ceiling Fan with and Lights Remote Noiseless DC Motor 3 Downrods 6 Speeds Timing Reversible Modern Ceiling Fan ",
        "ceiling5.png","5.0","$130","yellow"

    ],["Bedside Table Lamp for Bedroom - 3 Way Dimmable Touch Lamp USB C Charging Ports and AC Outlet, Small Lamp Wood Base Round Flaxen Fabric Shade for Living Room, Desk, LED Bulb Included",
        "ceiling6.png","4.6","$19","yellow"
    ]]

    let digital=[["Digital Dual Alarm Clock for Bedroom, Large Display Bedside with Battery Backup, USB Phone Charger, Dimmer, Easy to Set Loud LED Heavy Sleepers ",
        "digital1.png","4.4","$15","white"
    ],["Digital Alarm Clocks for Bedrooms: Large Bold Number 5 Brightness Dimmer - Easy to Read Across The Room - 5 Alarm Sound 8 Night Light - Silver",
        "digital2.png","4.6","$20","yellow"
    ],["JALL Digital Alarm Clock, with Wooden Electronic LED Time Display, Dual Alarm, 2.5-inch Cubic Small Mini Wood Made Electric Clocks for Bedroom, Bedside, Desk, Black",
        "digital3.png","4.3","$15","white"
    ],["Digital Alarm Clock, with Wooden Electronic LED Time Display, 3 Alarm Settings, Humidity & Temperature Detect, Wood Made Electric Clocks for Bedroom, Bedside (Black)",
        "digital4.png","4.5","$20","yellow"

    ],["Wooden Digital Alarm Clock, 0-100% Dimmer, 2 Alarm Settings, Weekday/Everyday Mode, 9 Mins Snooze, 12/24H, Temperature and Date Display for Office, Travel, Bedroom Alarm Clock (Brown)",
        "digital5.png","4.5","$25","yellow"

    ],["Extra Loud Alarm Clock for Heavy Sleepers Adults,Teens,Kids,Rainbow Clock for Bedrooms,Small Smart Bedside Digital Clock with Large Display,7 Color Night Light",
        "digital6.png","4.3","$12","white"
    ]]

    let vr=[["3D VR Headset for iPhone & Android Phones 1.0 - with Links to 3D VR Videos | Virtual Reality Goggles Set for Beginners | Wearable VR Set for Kids & Adults – Blue",
        "vr1.png","3.5","$50","white"
    ],["DESTEK V5 VR Headset for Phone with Controller, Anti-Blue Eyes Protected HD Lenses, 110° FOV Virtual Reality Headsets VR Goggles for iPhone 15/14/13/12/11, Samsung, Android - Black",
        "vr2.png","5.0","$45","yellow"
    ],["JALL Digital Alarm Clock, with Wooden Electronic LED Time Display, Dual Alarm, 2.5-inch Cubic Small Mini Wood Made Electric Clocks for Bedroom, Black",
        "vr3.png","4.8","$27","yellow"
    ],["AMVR VR Headset and Touch Controllers Display Stand, Helmet & Handle Holder Mount Station for HP Reverb G2 Virtual Reality Headset",
        "vr4.png","4.3","$37","yellow"

    ],["VR Headset Compatible with iPhone & Android - Universal Virtual Reality Goggles for Kids & Adults - Virtual Reality Headset for Kids - Your Best Mobile Games 360 Movies w/New 3D VR for iPhone (Red)",
        "vr5.png","3.6","$20","white"

    ],["Head Strap Compatible with Oculus Quest 2,Meta Quest 2 Accessories Adjustable Elite Strap Replacement for Enhanced Comfort Support and Gaming Immersion in VR (Comfort Head Strap only)",
        "vr6.png","4.7","$20","yellow"
    ]]

    let phone=[["Case for Motorola Razr 2023 (Not Fit Razr+) PU Vegan Leather Back & Hard PC Bumper Phone Case for Moto Razr 2023 - Brown",
        "phone1.png","4.7","$13","yellow"
    ],["Case for Motorola Razr 2023 (Not Fit Razr+) Genuine Leather + Hard Polycarbonate Bumper Phone Case for Moto Razr 2023 - Green",
        "phone2.png","4.6","$15","yellow"
    ],["FNTCASE for Motorola Moto G-Stylus-5G-2023 Case: Dual Layer Shockproof Protective Phone Cover | HD Lens Protector | Anti Slip Textured Back | Military Protection Bumper | Lightweight Rugged",
        "phone3.png","4.5","$8","yellow"
    ],["Supershieldz (3 Pack) Designed for Motorola Moto G Stylus 5G (2023) [5G Model Only] [Not Fit for 2022/2021/2020 Version] Tempered Glass Screen Protector, Anti Scratch, Bubble Free",
        "phone4.png","4.5","$7","yellow"

    ],["LISEN Cell Phone Stand Adjustable Phone Holer for Desk, Office Desk Accessories for iPhone 15 Stand Fits All Mobile Phones, iPhone,  iPads, Tablet 4-10in",
        "phone5.png","4.5","$9","yellow"

    ],["Amazon Basics Adjustable Aluminum Cell Phone Desk Stand for iPhone and Android, 3.15 x 2.87 x 3.74 Inch, Silver",
        "phone6.png","4.6","$9","yellow"
    ]]

    let pc=[["HP 2023 15'' HD IPS Laptop, Windows 11, Intel Pentium 4-Core Processor Up to 2.70GHz, 8GB RAM, 128GB SSD, HDMI, Super-Fast 6th Gen WiFi, Dale Red (Renewed)",
        "pc1.png","4.2","$230","white"
    ],["HP 14 Ultral Light Laptop for Students and Business, Intel Quad-Core N4120, 16GB RAM, 192GB Storage(128GB Ghost Manta SD), 1 Year Office 365, Webcam, HDMI, WiFi, Win 11 S",
        "pc2.png","4.1","$340","white"
    ],["HP 14 Laptop Ultral Light for Students and Business, Quad-Core Intel Celeron Processor, 8GB RAM, 192GB Storage (128GB eMMC + 64GB Ghost Manta SD Card), HDMI, WiFi, USB-A&C, Win 11",
        "pc3.png","4.2","$290","white"
    ],["HP 14inch Laptops Windows 11-16GB RAM - 192GB Storage - Quad-core Intel Celeron N4120 - USB C - SD Card Reader - Long Battery Life Fast Charge - Wireless-AC - HDMI - Camera - Kids Laptop",
        "pc4.png","5.0","$260","yellow"

    ],["Amazon Fire Max 11 tablet (newest gen) vivid 11” display, all-in-one for streaming and gaming, 14-hour battery life, optional stylus and keyboard, 64 GB",
        "pc5.png","4.4","$203","white"

    ],["Amazon Fire HD 10 Tablet Cover (Only compatible with 11th generation tablet, 2021 release) – Charcoal Black",
        "pc6.png","4.6","$14","yellow"
    ]]

    let health=[["Ursa Major Golden Hour Face Moisturizer | Vegan Recovery Cream for Daily Facial Moisturizing | Repair & Hydrate | Natural Formula for All Skin Types | Cruelty Free & Non-Toxic 1.57 oz",
        "health3.png","4.3","$54","white"
    ],["Tru Alchemy Quench Crème Daily Facial Moisturizer | Hyaluronic Acid, Vitamin C, & Bakuchiol (better than Retinol) | Daily Firming Skin Moisturizer Face Cream for Women | 1.7 fl oz/48 g",
        "health4.png","4.0","$39","white"

    ],["Tru Alchemy Vitamin C Glow Serum | Facial Serum with Bakuchiol, Glycolic & Lactic Acid | Skin Illuminating Serum | Hydrating Face Wrinkle Serum | 1 fl oz/30 mly",
        "health5.png","4.0","$39","white"

    ],["Collagen Face Moisturizer with Airless Pump - Collagen Botanical Stem Cells Cream for Skin with Retinol, Niacinamide, Hyaluronic Acid - Anti-Aging Day & Night Cream - Made in USA (1.7 Oz)",
        "health6.png","4.5","$15","yellow"
    ],["No-Touch Thermometer for Adults and Kids, Digital Accurate Baby Thermometer with Fever Alarm, 1 Second Fast Result, FSA HSA Eligible, Easy to use, 2 in 1 Mode Health Care Thermometer",
        "health1.png","4.6","$20","yellow"
    ],["Talli Care - Smart Elderly Care Device - Track Medications, Meals & More with 1-Touch, Connects to The Talli App for Monitoring & Sharing Data with Loved Ones, Caregivers & Healthcare Professionals",
        "health2.png","3.8","$130","white"
    ]]

    let ps=[["NexiGo PS5 Slient Cooling Stand with RGB LED Light, Dual Charging Station Compatible with DualSense Edge Controller, 10 Game Slots",
        "ps1.png","4.4","$40","white"
    ],["BUFFALO External SSD 2TB - Compatible with PS4 / PS5 / Windows/Mac - USB-C - USB-A - USB 3.2 - External Solid State Drive - SSD-PG2.0U3B",
        "ps2.png","4.4","$130","white"

    ],["NexiGo PS5 Accessories Cooling Stand with LED Lighting Fans and Dual Controller Charger Station , Upgraded Multifunctional Stand , 10 Game Slots",
        "ps3.png","4.4","$35","white"

    ],["NexiGo PS5 Headphone Holder, [Minimalist Design] Mini Headphone Hanger with Supporting Bar, for Sony Playstation 5 Gaming Headset, White",
        "ps4.png","4.8","$10","yellow"
    ],["NexiGo PS5 4 Ports USB Hub, [Minimalist Design], High-Speed Data Transfer, Fast Charging Ports for DualSense Controller, Splitter Expander for Playstation 5 Disc & Digital Edition",
        "ps5.png","4.0","$10","white"
    ],["2.4GHz Wireless Gaming Headset for PC, PS5, PS4 - Lossless Audio USB & Type-C Gaming Headphones with Flip Microphone, 30-Hr Battery Gamer Headset for Switch, Laptop, Mobile, Mac",
        "ps6.png","4.4","$32","white"
    ]]


    let items=[fitness,home_kitchen,body_beauty,dresses,paint,ceiling,digital,vr,phone,pc,health,ps]
    let w=0
    for(let i=0;i<items.length;i++)
    {
        for(let j=0;j<items[i].length;j++)
        {
            items[i][j][2]=ratingsArray[w]
            w+=1
        }
    }
    for(let i=0;i<items.length;i++)
    {
        if(i==thing)
            {
                assign (items[i])
            }
        
    }

    function assign(x)
    {

        for(let i=0;i<6;i++)
        {
            lables[i].childNodes[0].textContent=""
            images[i].src=""
            price[i].textContent=""
            rate[i].textContent=""
            icons[i].style.color=""
        }
    

        for(let i=0;i<x.length;i++)
        {
            lables[i].childNodes[0].textContent=x[i][0]
            images[i].src=x[i][1]
            price[i].textContent=x[i][3]
            rate[i].textContent=x[i][2]
            icons[i].style.color=x[i][4]
        }
    }
    
    let buys=[]
    for(let i=0;i<c1.length;i++)
    {
        c1[i].addEventListener("click",function()
    {
    if(products[i].childNodes[13].textContent.includes("  (---Product Added to Cart---)")==false)
        {products[i].childNodes[13].textContent+="  (---Product Added to Cart---)"
        buys.push(items[thing][i][1])
}

            })

    let change=document.getElementById("change")
    let change_=document.getElementById("change_")

    cart.addEventListener("click",function()
    {
        change.style.display="none"
        change_.style.display="block"

        for(let i=0;i<images.length;i++)
            {
                c1[i].style.display="none"
                lables[i].childNodes[0].textContent=""
                images[i].src=""
                price[i].textContent=""
                rate[i].textContent=""
                icons[i].style.display="none"
                for(let j=0;j<c1i.length;j++)
                {
                    c1i[j].style.display="none"
                }
            }
        
            for(let i=0;i<buys.length;i++)
                {
                    images[i].src=buys[i]
                    c1[i].style.display="block"
                }
            document.title="Cart"
            labler.textContent="Your Shopping Cart"
            for(let i=0;i<payment.length;i++)
            {
                if(buys.length!=0)
                {payment[0].style.display="block"}
            }
            
    })

}
  pay.addEventListener("click",function()
  {
    window.location.href="bill.html"

})
change.addEventListener("click",function()
  {
    window.location.href="index.html"

})
change_.addEventListener("click",function()
  {
    location.reload()

})
})
