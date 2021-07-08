let songs=[
    {
        "name": "3 Iditios",
        "image": "./Thumnail/1.jpg",
        "url": "./Vedio/All is well.webm"
    },
    {
        "name": "Disco vedio",
        "image": "./Thumnail/2.jpg",
        "url": "./Vedio/Anar kali.webm"
    },
    {
        "name": "Balam Ptichakari",
        "image": "./Thumnail/3.jpg",
        "url": "./Vedio/Balam.webm"
    },
    {
        "name": "Bappu hanikarak",
        "image": "./Thumnail/4.jpg",
        "url": "./Vedio/Bapu.webm"
    },
    {
        "name": "Bataizm dil",
        "image": "./Thumnail/5.jpg",
        "url": "./Vedio/Bataizm.webm"
    },
    {
        "name": "Dhaakad",
        "image": "./Thumnail/6.jpg",
        "url": "./Vedio/Dhaakad – .webm"
    },
    {
        "name": "gully boy.webm",
        "image": "./Thumnail/7.jpg",
        "url": "./Vedio/gully boy.webm"
    },
    {
        "name": "Munni bhadnam",
        "image": "./Thumnail/8.jpg",
        "url": "./Vedio/Munni.webm"
    },
    {
        "name": "Shuba hone na",
        "image": "./Thumnail/9.jpg",
        "url": "./Vedio/Shuba hone na.webm"
    },
    {
        "name": "Sone na de ",
        "image": "./Thumnail/10.jpg",
        "url": "./Vedio/Shuba hone na.webm"
    },
    {
        "name": "Sone de ",
        "image": "./Thumnail/1.jpg",
        "url": "./Vedio/Sone de.webm"
    }
];

window.onload=function () {
    getTodayData();
  onShowMusic();
};

function onShowMusic() {
    let songsHtml='';
    songs.forEach(function (value,key) {
        songsHtml=songsHtml+`<div class="songs" id="${key}">

<img src="${value.image}" class="img"/>
<div  onclick="playAudio('${value.url}',${key})" class="text"> ${value.name}</div>
</div>
`;
    });
    document.getElementById('songs').innerHTML=songsHtml;
}


function playAudio(url,index) {

    let audio=document.getElementById('audio');
    audio.src=url;
    audio.play();
    onSelectedMusic(index)
}

function onSelectedMusic(key) {
    songs.forEach(function (value,index) {
       if(index===key){
           document.getElementById(index.toString()).style.border='2px solid #000000';
       } else{
           document.getElementById(index.toString()).style.border='unset';
       }
    })
}

function getTodayData() {

    setInterval(function () {
        let date =new Date();
        let display_data=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+
            " "+date.getHours()+':'+date.getMinutes()+":"+date.getSeconds();
        document.getElementById('date').innerHTML=display_data;
    },1000)


}
