const key = '22b91e11939841f50ffd7e3e22431ceb' ;
// const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=22b91e11939841f50ffd7e3e22431ceb';

// fetch(baseURL)
//     .then((answer) => { console.log("response", answer.json()) })
//     .catch((error) => {
//         console.log(error);
//     })

const requestCity = async (city) => {
    const baseURL ='https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${city}&appid=${key}`;

    const response = await fetch(baseURL + query);

    const answer = await response.json();
    return answer;
}

