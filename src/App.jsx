import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './typography.css'
import './App.css'

import Logo from './assets/Logo_MouthWings.svg'
import Smile from './assets/smile.png'
import Gums from './assets/gums.svg'
import Dentures from './assets/dentures.svg'
// import { getJokes } from './getJokes'

function App() {
  // const [count, setCount] = useState(0)

  // const getJokes = async() => {
  //   return fetch('https://v2.jokeapi.dev/joke/Any?amount=5&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode&format')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       console.log(query)
  //       // debugger
  //       return data
        
  //     },
  //     // {enabled: false} //? 

  //     )
  //     .catch(error => {
  //       console.error('Error fetching API data:', error);
  //     });
  // }
const moreJokes = () => {
  query.refetch()
}

// const [data, setData] = useState(null)

  const query = useQuery({
    queryKey: ['jokes'], //dependency arr
    queryFn: async() => {
      return fetch('https://v2.jokeapi.dev/joke/Any?amount=5&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode&format')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(query)
          // debugger
          // setData(data)
          return data        
        },
        {enabled: false} //? 
        )
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
        <div id="headerWrap">
          <nav>
            <ul>
              <li>Disclaimer</li>
              <li>JokeAPI</li>
              <li>Design source</li>
              <li>Images</li>
            </ul>
          </nav>
          <div id='headingBox'>
            <h1>Larking about API</h1>
            <h3>Get it?</h3>
            <p className='teaser'>Frontend assignment working with API:s in React with React Query </p>
          </div>
          <img src={Logo} id='logo' />
        </div>
      </header>
      <main>
        <button className='bigBtn' onClick={ moreJokes } >Get it!</button>

        {query.data.jokes.map((joke) => {
          if (joke.type === "single") {
            return (
              <>
                <h2>Joke nr</h2>
                <div key={joke.id} className="single-box">
                  
                  <p>{joke.joke}</p>
                  <img src={Smile} className='smileImg' />
                </div>
              </>
            );
          } else if (joke.type === "twopart") {
            return (
              <>
                <h2>Joke nr</h2>
                <div key={joke.id} className="twopart-box">
                  <img src={Gums} className='setupImg' />
                  <div className='setupContainer'>

                    <div className='setup'><h4>{joke.setup}</h4></div>
                  </div>
                  <div className='deliveryContainer'>
                    <img src={Dentures} className='deliveryImg' />
                    <div className='delivery'>{joke.delivery}</div>
                  </div>
                </div>
              </>
            );
          }
        })}

      </main >
    </div >

  )
}

export default App



    // () => {
    //   return fetch('https://v2.jokeapi.dev/joke/Any?amount=5?blacklistFlags=nsfw, religious, political, racist, sexist, explicit')
    //     .then((response) => response.json())
    //     .then((data) => {
    //       console.log(data);
    //       console.log(query)
    //       // debugger
    //       return data
    //     })
    //     .catch(error => {
    //       console.error('Error fetching API data:', error);
    //     });
    // }