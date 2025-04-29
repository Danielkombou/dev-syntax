// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve('done!'); 
//     }, 2000);
// }).finally(() => alert('Promise is done!'))
// .then(result => alert(result))


// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('whoops');
//     }, 2000);
// })

// promise.catch(alert)

// task 1
// new Promise(function(resolve, reject) {
//     resolve(1);
//     setTimeout(() => {
//        resolve(2) 
//     }, 1000);
// }).then(result => alert(result))

// using fetch
// let inputField = document.getElementById('input');
// inputField.addEventListener('keydown', (e) => {
//     // url = `https://api.github.com/users/${e.target.value}`;
//     // console.log(url);
//     let url = `https://api.github.com/users/${e.target.value}`;
//     fetch(url)
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(user => fetch(`https://api.github.com/users/${e.target.value}`))
//     .then(response => {
//         console.log(response);
//         return response.json()
//     })
//     .then(getUserAvatar => {
//         let img = document.createElement('img');
//         img.src = getUserAvatar.avatar_url;
//         img.alt = getUserAvatar.login;
//         img.className =  'avatar';
//         document.body.append(img);

//         setTimeout(() => {
//             img.remove();
//         }, 5000);
//     })
// })

// let urls = [
//     'https://api.github.com/users/iliakan',
//     'https://api.github.com/users/remy',
//     'https://api.github.com/users/jeresig'
//   ];

//   // map every url to the promise of the fetch
//   let requests = urls.map(url => fetch(url));

//   // Promise.all waits until all jobs are resolved
//   Promise.all(requests)
//     .then(responses => responses.forEach(
//       response => alert(`${response.url}: ${response.status}`)
const API_KEY = '3eb499fac0fffe73a6ba62b2fc3aaa1c'
// const API_KEY = '5a5060fc-1ba4-11f0-bda0-0242ac130003-5a5061ba-1ba4-11f0-bda0-0242ac130003'
const searchBtn = document.getElementById('search');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');
const errorDiv = document.getElementById('error');
const loader = document.getElementById('loader');

async function fetchWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
    )}&appid=${API_KEY}&units=metric`;

    try {
        loader.classList.remove('hidden');
        errorDiv.textContent = '';
        weatherResult.textContent = ""

        const res = await fetch(url)
        console.log(res);

        if(!res.ok) {
            throw new Error('City not found or invalid request');
        }

        const data = await res.json();
        const { name, main, weather} = data;

        weatherResult.innerHTML = `
        <strong>${name}</strong><br>
        Temperature: ${main.temp}°C<br>
        Weather Condition: ${weather[0].description}
        `;

    } catch (error) {
        errorDiv.textContent = 'Error: ' + error.message;
        console.error('Error fetching weather data:', error);
    } finally {
        loader.classList.add('hidden');
    }
}
cityInput.addEventListener('input', (e) => {
    let debounceTimer;
    clearTimeout(debounceTimer);

    const city = e.target.value.trim();
    if (city) {
            debounceTimer = setTimeout(() => {
            fetchWeather(city);
        }, 5000);
        } else {
            errorDiv.textContent = 'Please enter a city name.';
        }
})

searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        fetchWeather(city);
    } else {
        errorDiv.textContent = 'Please enter a city name.';
    }
})
