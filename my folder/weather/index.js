import { API_KEY, API_URL, API_VERSION, ICON_URL} from './constant.js';


const formElement = document.getElementById('form');
const searchInput = document.getElementById('searchInput');

const clear = () =>{
    document.getElementById('errorMessage').innerText = ('');
    document.getElementById('searchInput') .value = ('');
}

const renderDataForView = (weatherData) =>{
document.getElementById('city').innerText = weatherData.city;
document.getElementById('country').innerText = weatherData.country;
document.getElementById('temp').innerText = weatherData.temp;
document.getElementById('weatherIcon').src = `${ICON_URL}/w/${weatherData.icon}.png`
console.log(weatherData.icon)
}

formElement.addEventListener('submit',(e) => {
    e.preventDefault(); 
    const value = searchInput.value.trim();//probelnrey hanuma
    if (value){
         fetch(`${API_URL}/${API_VERSION}/weather?q=${value}&appid=${API_KEY}&units=metric`)
        .then ((resp) =>{
        return resp.json();
         })
         .then ((data) =>{
            clear();//maqrvuma searchic heto
            const dataForView = {
            city: data.name,
            temp: data.main.temp,
            icon: data.weather[0].icon,
            country: data.sys.country
            }
            renderDataForView(dataForView);

        console.log(dataForView)
         })

         .catch((error)=>{
        console.log(error);
         })
    }else{
        document.getElementById('errorMessage').innerText = 'Please enter the city name'
    }
})

