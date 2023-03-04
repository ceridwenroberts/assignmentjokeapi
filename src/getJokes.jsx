export function getJokes() {
    return fetch('https://v2.jokeapi.dev/joke/Any?amount=5?blacklistFlags=nsfw, religious, political, racist, sexist, explicit')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(query)
        // debugger
        return data
      })
      .catch(error => {
        console.error('Error fetching API data:', error);
      });
  }