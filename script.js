const baseURL = 'https://api.covid19api.com/summary'


const card = document.querySelector(['card bg-dark text-white']);
const cardImgOverlay = document.querySelector('.card-img-overlay');
// const deathRate = document.querySelector('.displayDeathRate');
const dailyTotal = document.querySelector('#livesLost');
const date = document.querySelector('#todaysDate');
const country = document.querySelector('.countries');

fetch(baseURL) //this is fetching the data then it looks for something that is chained to it which is the .then. the response from the api is captured in the .then.
    .then(result => result.json())
    //the next .then is captureing what is being captured from the previous .then
    .then(json => displayData(json));
        
    
    
    function displayData(json){
        console.log(json);
        //here I am getting our elements
        // let covid = document.getElementById('totalDeath');
        //here I am assigning the data
        let covid = json.Global.TotalDeaths;
        console.log(covid);

        let apiDate = json.Date;

        let countries = json.Countries;        
        //here I am putting the data into the html card pulled from bootstrap
        dailyTotal.textContent = covid;
        date.textContent = apiDate;
        country.textContent = countries;
    };