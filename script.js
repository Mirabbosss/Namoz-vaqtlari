// "use strict";

let selectedRegion = localStorage.getItem('region') || "Toshkent";
let parentProvencies = $('#provencies');
let apkLocation = $('#apk-location');

// render options (Regions)

render(provencie, ['option', 'md:border-2 md:border-white text-white md:text-black bg-[#00462B] md:bg-white', innerHTML], parentProvencies);

(function(){
    if(selectedRegion){
        $('#location').innerHTML = selectedRegion;
    } else {
        $('#location').innerHTML = "Toshkent";
    }

    setInterval(()=>{
        let now = new Date();
        let date = now.getDate();
        let month = now.getMonth();
        let day = now.getDay();
        let hour = String(now.getHours()).padStart(2, "0");
        let minut = String(now.getMinutes()).padStart(2, "0");
        let second = String(now.getSeconds()).padStart(2, "0");

        console.log(days[day]);

        $('#date').innerHTML = `${days[day]}, ${date}-${months[month]}`
        $('#time').innerHTML = `${hour}:${minut}:${second}`


    }, 1000)
})()

function defaultValue(){
    if(selectedRegion){
        parentProvencies.value = selectedRegion;
    } else {
        parentProvencies.value = "Toshkent";
    }
}
defaultValue()

getDaily(baseURL, selectedRegion)
    .then((res) => {

        createCard(res, images).forEach((el) => {

            const newElement = createElement('div', 'w-[100px] sm:w-[200px] md:w-[240px] lg:w-[270px] xl:w-[200px] 2xl:w-[240px] bg-[#008653] md:hover:shadow-none md:bg-[#ffffff33] px-0 md:px-5 py-[5px] md:py-5 w-[168px] rounded-[10px] card-shadow', `
                        <h3 class="text-[18px] sm:text-[24px] md:text-[32px]">${el.title}</h3>
                        <img src="${el.img}" alt="icon" class="scale-75 sm:scale-100">
                        <time class="text-white text-[24px] sm:text-[32px] md:text-[48px]">${el.time}</time>
            `)

            $('#card-wrapper').appendChild(newElement)
        });
    })

parentProvencies.addEventListener('change', (e)=> {
    e.preventDefault();

    $('#card-wrapper').innerHTML = "";
    $('#location').innerHTML = e.target.value;

    localStorage.setItem('region', e.target.value);

    getDaily(baseURL, e.target.value)
    .then((res) => {

        createCard(res, images).forEach((el) => {

            const newElement = createElement('div', 'w-[100px] sm:w-[200px] md:w-[240px] lg:w-[270px] xl:w-[200px] 2xl:w-[240px] bg-[#008653] md:hover:shadow-none md:bg-[#ffffff33] px-0 md:px-5 py-[5px] md:py-5 w-[168px] rounded-[10px] card-shadow', `
                <h3 class="text-[18px] sm:text-[24px] md:text-[32px]">${el.title}</h3>
                <img src="${el.img}" alt="icon" class="scale-75 sm:scale-100">
                <time class="text-white text-[24px] sm:text-[32px] md:text-[48px]">${el.time}</time>
    `)

            $('#card-wrapper').appendChild(newElement)
        });
    })
})