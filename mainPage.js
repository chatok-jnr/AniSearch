let srch = document.getElementById('srch1');
let btn1 = document.getElementById('btn1');
let srchVal = srch.value;
let title;
let picSource;
let idNo;
var allData = [];
var cardsIds = [];

var userData = new Map();
var fav = new Map();
var myList = [];
var email;

async function jikan() {
    allData = [];
    console.log(srch);
    var main1 = document.getElementById('main1');
    main1.innerHTML = "";
    let srcVal = srch.value.toLowerCase();
    try {
        console.log("I am here");
        const response = await fetch(`https://api.jikan.moe/v4/anime?q=${srcVal}&sfw`);
        const data = await response.json();

        console.log(data);

        for (let i = 0; i < data['data'].length; i++) {
            title = data['data'][i].title;
            picSource = data['data'][i].images.jpg.image_url;

            allData.push(data['data'][i]);
            idNo = i;

            cardCreator();
        }

        srch.value = "";
    } catch (error) {
        console.log(error);
    }
}


function cardCreator() {
    var main = document.getElementById('main1');
    main.style.displayY = "auto";
    main.style.display = "flex";
    main.style.flexWrap = "wrap";
    main.style.justifyContent = "center";


    var card = document.createElement('div');
    card.id = idNo;
    card.style.width = "300px";
    card.style.height = "500px";
    card.style.border = "1px solid black";
    card.style.margin = "10px";
    card.style.overflow = "hidden";
    card.style.display = "flex";
    card.style.justifyContent = "center";
    card.style.flexWrap = "wrap";
    card.style.overflowY = "auto";
    card.style.backgroundColor="rgba(108,34,166,0.3)";
    card.style.boxShadow = " 0px 0px 20px rgba(13, 146, 18, 10)";
    
    
    

    var up = document.createElement('div');
    up.style.width = "300%";
    up.style.height = "350px";
    up.style.display = "flex";
    up.style.justifyContent = "center";
    up.style.overflow = "hidden";
    up.overflow = "hidden";

    var pic = document.createElement('img');
    pic.src = picSource;
    pic.style.width = "100%";


    var down = document.createElement('div');
    down.style.width = "300%";
    down.style.height = "200px";

    down.style.overflowY = "auto";

    var btnBox = document.createElement('div');
    btnBox.style.display = "flex";

    var btn1 = document.createElement('button');
    btn1.id = idNo;
    btn1.innerHTML = "Details";
    btn1.style.width = "150px";
    btn1.style.height = "50px";
    btn1.style.fontSize = "25px";
    btn1.style.background = "transparent";
    btn1.style.borderRadius = "0 0 20px 20px";
    btn1.style.color="white";

    btn1.addEventListener("mouseover", function () {
        btn1.style.background = "#987AF6";
        btn1.style.boxShadow = " 0px 0px 20px rgba(13, 146, 18, 10)";
    });

    btn1.addEventListener("mouseout", function () {
        btn1.style.background = "transparent";
    });

    btn1.addEventListener("click", function () {

        const y = JSON.stringify(allData[this.id]);
        localStorage.setItem("details", y);

        fav.set(email, myList);

        const uf = JSON.stringify(Object.fromEntries(fav));
        localStorage.setItem("fav", uf);

        const ud = JSON.stringify(Object.fromEntries(userData));
        localStorage.setItem("userData", ud);

        window.location.href = "details.html";
    });


    var btn2 = document.createElement('button');
    btn2.id = idNo;
    btn2.innerHTML = "Favourite";
    btn2.style.width = "200px";
    btn2.style.height = "50px";
    btn2.style.fontSize = "25px";
    btn2.style.background = "transparent";
    btn2.style.borderRadius = "0 0 20px 20px";
    btn2.style.color="white";

    btn2.addEventListener("mouseover", function () {
        btn2.style.background = "#FFD55E";
        btn2.style.boxShadow = " 0px 0px 20px rgba(13, 146, 18, 10)";
    });

    btn2.addEventListener("mouseout", function () {
        btn2.style.background = "transparent";
    });

    btn2.addEventListener("click", function () {
        myList.push(allData[this.id]);
    });


    var heading = document.createElement('h1');
    heading.innerText = title;
    heading.style.color = "white";

    btnBox.appendChild(btn1);
    btnBox.appendChild(btn2);
    down.appendChild(btnBox);
    down.appendChild(heading);
    up.appendChild(pic);
    card.appendChild(up);
    card.appendChild(down);
    main.appendChild(card);
}

function showList() {
    
    const favList=JSON.stringify(myList);
    localStorage.setItem("favList",favList);
    saveData();
    window.location.href="favList.html";
}

function logout(){
    
    saveData();
    window.location.href = "index.html";
}

function saveData() {
    fav.set(email, myList);

    const uf = JSON.stringify(Object.fromEntries(fav));
    localStorage.setItem("fav", uf);

    const ud = JSON.stringify(Object.fromEntries(userData));
    localStorage.setItem("userData", ud);

    
}

function getData() {

    const emailx = localStorage.getItem("email");
    email = JSON.parse(emailx);

    const gud = localStorage.getItem("userData");
    const temp1 = new Map(Object.entries(JSON.parse(gud)));
    for (const [key, value] of temp1) {
        userData.set(key, value);
    }

    const guf = localStorage.getItem("fav");
    const temp2 = new Map(Object.entries(JSON.parse(guf)));
    for (const [key, value] of temp2) {
        fav.set(key, value);
    }


    if (fav.get(email)) {

        const x = fav.get(email);
        for (let i = 0; i < x.length; i++) {
            myList.push(x[i]);
        }
    }
    

}
getData();