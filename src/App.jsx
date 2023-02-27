import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import reactLogo from './assets/react.svg'
import './typography.css'
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
          // debugger
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
    
        <header>
          <div className='headingBox'>
            <h1>Get it?</h1>
            <h3>Larking about API</h3>
            <p className='teaser'>Frontend assignment working with API:s in React with React Query </p>
          </div>
        </header>
        <main>
          <button className='bigBtn'>Get it!</button>
         
            {query.data?.jokes.map((joke) => {
              if (joke.type === "single") {
                return (
                  <div key={joke.id} className="single-box">
                    <p>{joke.joke}</p>
                  </div>
                );
              } else if (joke.type === "twopart") {
                return (
                  <div key={joke.id} className="twopart-box">
                    <div className='setup'><h4>{joke.setup}</h4></div>
                    <div className='delivery'>{joke.delivery}</div>
                  </div>
                );
              }
            })}
     
          </main>
      </div>

      )
}

      export default App
