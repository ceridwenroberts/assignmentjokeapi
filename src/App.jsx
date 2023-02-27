import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const query = useQuery({
    queryKey: ['page'], //dependency arr
    queryFn: () => {
      return fetch('https://v2.jokeapi.dev/joke/Any?amount=5?format=json')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(query)
          debugger
          return data
        })
        .catch(error => {
          console.error('Error fetching API data:', error);
        });
    }

  })
  if (query.isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className='App'>
      <h1>Joke API</h1>
      <div>
        {query.data?.jokes.map((joke) => {
          if (joke.type === "single") {
            return (
              <div key={joke.id} className="single">
                <p>{joke.joke}</p>
              </div>
            );
          } else if (joke.type === "twopart") {
            return (
              <div key={joke.id} className="twopart">
                <p>{joke.setup}</p>
                <p>{joke.delivery}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  )
}

export default App
