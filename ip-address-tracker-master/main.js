//Task  hazirdir



const cord = document.querySelectorAll(".block-content__content")
const form = document.querySelector("form")
const inp = document.querySelector(".form__input")
const mapdiv = document.querySelector("#mapid")
// console.log(cord);



let map = L.map(mapdiv).setView([37.38605, -122.08385], 13);

L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a00fdb23686847768e198ad6c81a9ce1', {
}).addTo(map);

L.marker([37.38605, -122.08385]).addTo(map)
    .bindPopup('You are here')
    .openPopup();
    


    
   form.addEventListener("submit",(e)=>{
       e.preventDefault()
      let inpvalue = inp.value


      const infos = async ()=>{
        const resp = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_2c4t9BYOHQPyxaqqVNBGKeqPfzOZZ&ipAddress=${inpvalue}`)
        const data = await resp.json()
        // console.log(data);
        getInfo(data)

        
        
    }
    
    infos()

    function getInfo(a){

    cord[0].innerHTML=a.ip
    cord[1].innerHTML=a.location.city+ ", "+ a.location.country + ", " + a.location.region
    cord[2].innerHTML=a.location.timezone
    cord[3].innerHTML=a.isp
    // console.log(a.location.lat);
    // console.log(a.location.lng);

    map.setView([a.location.lat, a.location.lng], 13);
   

L.tileLayer('https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png?apikey=a00fdb23686847768e198ad6c81a9ce1', {
}).addTo(map);

L.marker([a.location.lat, a.location.lng]).addTo(map)
    .bindPopup('You are here')
    .openPopup();
    

    }

    
   })
    



















