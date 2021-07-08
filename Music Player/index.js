let songs=[
    {
        "name": "My Music One",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQOasPaOK2AF74nvKEWMYJokO7I9jYc3Bzg&usqp=CAU",
        "url": "https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/scam1992ringtone1144418968-54033.mp3"
    },
    {
        "name": "Love Song",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8i2SK448vgUCgWAZ46dvtlkPLtwtNfD6RPQ&usqp=CAU",
        "url": "https://2u039f-a.akamaihd.net/downloads/ringtones/files/dl/mp3/tujhe-bhula-diya-hello-gaurav-synchronicity-mirchifun-mobi-cut-8349.mp3"
    },
    {
        "name": "Sad Song",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UXxoymgDW1y-eHgzXUx4n5TJ-DbUzOIZmg&usqp=CAU",
        "url": "https://pl3dxz-a.akamaihd.net/downloads/ringtones/files/dl/mp3/perez-prado-piano-solo-13-6-47-7-16153.mp3"
    },
    {
        "name": "Happy Song",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFErHwDuW9VPbZ577E72wuXds210Rki-GHg&usqp=CAU",
        "url": "https://2u039f-a.akamaihd.net/downloads/ringtones/files/dl/mp3/kal-ho-na-ho-freetone-at-ua-6429.mp3"
    },
    {
        "name": "My Music One",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMQOasPaOK2AF74nvKEWMYJokO7I9jYc3Bzg&usqp=CAU",
        "url": "https://d6cp9b00-a.akamaihd.net/downloads/ringtones/files/mp3/scam1992ringtone1144418968-54033.mp3"
    },
    {
        "name": "Love Song",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8i2SK448vgUCgWAZ46dvtlkPLtwtNfD6RPQ&usqp=CAU",
        "url": "https://2u039f-a.akamaihd.net/downloads/ringtones/files/dl/mp3/tujhe-bhula-diya-hello-gaurav-synchronicity-mirchifun-mobi-cut-8349.mp3"
    },
    {
        "name": "Sad Song",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0UXxoymgDW1y-eHgzXUx4n5TJ-DbUzOIZmg&usqp=CAU",
        "url": "https://pl3dxz-a.akamaihd.net/downloads/ringtones/files/dl/mp3/perez-prado-piano-solo-13-6-47-7-16153.mp3"
    },
    {
        "name": "Happy Song",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFErHwDuW9VPbZ577E72wuXds210Rki-GHg&usqp=CAU",
        "url": "https://2u039f-a.akamaihd.net/downloads/ringtones/files/dl/mp3/kal-ho-na-ho-freetone-at-ua-6429.mp3"
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

    //yyyy-mm-dd,hh:ss
    setInterval(function () {
        let date =new Date();
        let display_data=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+
            " "+date.getHours()+':'+date.getMinutes()+":"+date.getSeconds();
        document.getElementById('date').innerHTML=display_data;
    },1000)


}
