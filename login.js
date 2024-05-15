var lbox=document.getElementById('lbox');//login box
var sbox=document.getElementById('sbox');//sing up box

function signShow(){
    lbox.style.display="none";//show sing and hide login
    sbox.style.display="block";
}

function logShow(){//shwo login and hide sign up
    lbox.style.display="block";
    sbox.style.display="none";
}

var userData=new Map();//for security
var fav=new Map();//for fav list

var email;
var pass;

function signUp(){// if user click sing up button
    console.log("sign up");
    email=document.getElementById('e1').value;
    pass=document.getElementById('p1').value; 
    userData.set(email,pass);
    fav.set(email,undefined);
    saveData();
}

function login(){//if user click login button
    
   console.log(userData.length);
    console.log("login button");
    email=document.getElementById('e2').value;
    pass=document.getElementById('p2').value; 

    if(userData.get(email)!=pass){
        alert("Wrong Password");
        return;
    }
    saveData();
}  

function saveData(){
    localStorage.setItem("email",JSON.stringify(email));//saving email

    const uf=JSON.stringify(Object.fromEntries(fav));
    localStorage.setItem("fav",uf);

    const ud=JSON.stringify(Object.fromEntries(userData));//converting use data to object
    localStorage.setItem("userData",ud);//saving ud;

    window.location.href="mainPage.html";

}

function findData(){
    if(localStorage.length === 0)return;
    
    
    const gud=localStorage.getItem("userData");
    const temp1=new Map(Object.entries(JSON.parse(gud)));
    for(const [key,value] of temp1){
        userData.set(key,value);
    }

    const guf=localStorage.getItem("fav");
    const temp2=new Map(Object.entries(JSON.parse(guf)));
    for(const [key,value] of temp2){
        fav.set(key,value);
    }

   
    for(let i=0;i<x.length;i++){
        console.log(x[i].title);
    }

    localStorage.clear();
}

findData();