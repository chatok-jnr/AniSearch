var list=[];

var userData = new Map();
var fav = new Map();
var myList = [];
var email;

function fill(){
    var l=document.getElementById('list');
    for(let i=0;i<list.length;i++){

        var div=document.createElement('div');
        div.id=i;
        div.style.width="100%"
        div.style.height="70px";
        div.style.background="transparent";
        div.style.marginTop="20px";
        div.style.backdropFilter="blur(10px)";
        div.style.display="flex";
        div.style.alignItems="center";
        div.style.color="orange";
        div.style.fontSize="20px";
        div.style.cursor="pointer";
        div.style.backgroundColor=" rgba(0, 0, 0, 0.3)";
        
        
        var h1=document.createElement('h1');
        h1.innerHTML=(i+1) +") "+ list[i].title;
        div.appendChild(h1);
        l.appendChild(div);

        l.style.overflowY="auto";

        div.addEventListener("mouseover",function(){
            var z=document.getElementById(this.id);
            z.style.marginLeft="10px";
            z.style.boxShadow=boxShadow = " 0px 0px 20px rgba(255, 213, 94, 3)";
        });

        div.addEventListener("mouseout",function(){
            var z=document.getElementById(this.id);
            z.style.marginLeft="0";
            z.style.boxShadow=boxShadow = " 0px 0px 20px rgba(255, 213, 94, 0)";
        });

        div.addEventListener("click",function(){
            console.log(list[this.id].title);
        });
    }
}

function saveData(){

    localStorage.setItem("email",JSON.stringify(email));//saving email

    const uf=JSON.stringify(Object.fromEntries(fav));
    localStorage.setItem("fav",uf);

    const ud=JSON.stringify(Object.fromEntries(userData));//converting use data to object
    localStorage.setItem("userData",ud);//saving ud;

    window.location.href="mainPage.html";
}

function getData(){
    const x=localStorage.getItem("favList");
    list=JSON.parse(x);
    fill();


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