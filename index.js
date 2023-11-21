const tempField=document.querySelector(".weather1");
const cityField=document.querySelector(".weather2 p");
const dateField=document.querySelector(".weather2 span");
const emojiField=document.querySelector(".weather3 img");
const weatherField=document.querySelector(".weather3 span");
const searchField=document.querySelector(".searchField");
const form=document.querySelector("form");

let target="new delhi";
const fetchData=async()=>{
   try {
    const url=`https://api.weatherapi.com/v1/current.json?key=d50679a2dd924190a09114038232111&q=${target}`;
    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    updateDom(data.current.temp_c,data.location.name,data.current.condition.icon,data.current.condition.text,data.location.localtime);
   } catch (error) {
    alert("location not found");
   }

};

function updateDom(temp,city,src,condition,time){
    tempField.innerText=temp+'°C';
    cityField.innerText=city;
    emojiField.src=src;
    weatherField.innerText=condition;
    dateField.innerText=time;
}
fetchData();
form.addEventListener("submit",(e)=>{
e.preventDefault();
target=searchField.value;
fetchData();
})

