const jokeApi = 'https://sv443.net/jokeapi/v2/joke/Any';

const getJoke = () => {
  fetch(jokeApi)
    .then((response) => response.json())
    .then((data) => {
      if (data.type == 'single') document.getElementById('joke').innerHTML = `${data.joke}`;
      else document.getElementById('joke').innerHTML = `${data.setup} "${data.delivery}"`;
    });
};

const button = document.getElementById('btn');
button.addEventListener('click', getJoke);
