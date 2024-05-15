var userData = new Map();
var fav = new Map();
var myList = [];
var email;

var myData;

function saveData(){

    window.location.href="mainPage.html";

}

function findData(){
    if(localStorage.length === 0)return;
    const y=localStorage.getItem("details");
    myData=JSON.parse(y);
    

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

    start();

}

findData();

function start(){
    console.log(myData);
    var pic=document.getElementById('poster');
    pic.src=myData.images.jpg.large_image_url;
    pic.style.width="500px";

    var rd=document.getElementById('rd');
    var title=document.createElement('h1');
    var genres=document.createElement('h2');
    var episode=document.createElement('h2');
    var dur=document.createElement('h2');
    var studio=document.createElement('h2');
    var rating=document.createElement('h2');
    var status=document.createElement('h2');


    title.innerHTML="Title: "+myData.title;
    genres.innerHTML="Genres: ";
    for(let i=0;i<myData['genres'].length;i++){
        genres.innerHTML+=myData['genres'][i].name;
        if(i!=myData['genres'].length-1){
            genres.innerHTML+=", ";
        }
    }

    episode.innerHTML="Total Episodes: "+myData.episodes;
    dur.innerHTML="Duration = "+myData.duration;

    studio.innerHTML="Studio: ";
    for(let i=0;i<myData['studios'].length;i++){
        studio.innerHTML+=myData['studios'][i].name;
        if(i!=myData['studios'].length-1){
            studio.innerHTML+=", ";
        }
    }

    rating.innerHTML="Rating: "+myData.rating;
    status.innerHTML="Status: "+myData.status;

    rd.appendChild(title);
    rd.appendChild(genres);
    rd.appendChild(episode);
    rd.appendChild(dur);
    rd.appendChild(studio);
    rd.appendChild(rating);
    rd.appendChild(status);
    rd.style.overflowX="auto";
    rd.style.textAlign="center";
    rd.style.alignContent="center";
    rd.style.color="white";
    rd.style.fontSize="25px";
    localStorage.removeItem("details");

}