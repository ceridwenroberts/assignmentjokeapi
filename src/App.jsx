import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import './typography.css'
import './App.css'
// import JokeAPI from 'https://jokeapi.dev/'

import Logo from './assets/Logo_MouthWings.svg'
import Smile from './assets/smile.png'
import Gums from './assets/gums.svg'
import Dentures from './assets/dentures.svg'
import Mockup from  './assets/desktopMockup.png'
// import { getJokes } from './getJokes'

function App() {

  const moreJokes = () => {
    query.refetch();
    window.scrollTo(0, 0,);
  }

  const query = useQuery({
    queryKey: ['jokes'], //dependency arr
    queryFn: async () => {
      return fetch('https://v2.jokeapi.dev/joke/Any?amount=5&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&safe-mode&format')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          console.log(query)
          // debugger
          // setData(data)
          return data
        },
          { enabled: false } //? 
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
          <div className='navLine'>
            <a link href='https://v2.jokeapi.dev/'>
              <div className='block first'></div>
              <div className='elipse first'></div>
              <div>JokeAPI</div>  
            
            </a>
            </div>

            <div className='navLine'>
              <a link href='https://v2.jokeapi.dev/#blacklist-flags'>
              <div className='block'></div>
              <div className='elipse'></div>
              <div>Disclaimer</div>
              </a>
            </div>

            <div className='navLine'>
              <a link href='https://www.figma.com/community/file/1020431678732026332'>
              <div className='block'></div>
              <div className='elipse'></div>
              <div>Design Inspo</div>
              </a>
            </div>

            <div className='navLine'>
              <div className='block'></div>
              <div className='elipse'></div>
              <div>Mock Image</div>
            </div>
            <div className='navLine'>
              <a link href='https://github.com/ceridwenroberts/assignmentjokeapi'>
              <div className='block'></div>
              <div className='elipse'></div>
              <div>GitHub Repo</div>
              </a>
            </div>

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
        <button className='bigBtn' onClick={moreJokes} >Get more!</button>

        {query.data.jokes.map((joke) => {
          if (joke.type === "single") {
            return (
              <> <div className='divider'></div>
                <div key={joke.id} className="single-box">

                  <p>{joke.joke}</p>
                  <img src={Smile} className='smileImg' />
                </div>
              </>
            );
          } else if (joke.type === "twopart") {
            return (
              <>
                <div className='divider'></div>
                <div key={joke.id} className="twopart-box">
                  <img src={Gums} className='setupImg' />
                  <div className='setupContainer'>

                    <div className='setup'><p>{joke.setup}</p></div>
                  </div>
                  <div className='deliveryContainer'>
                    <img src={Dentures} className='deliveryImg' />
                    <div className='delivery'><p>{joke.delivery}</p></div>
                  </div>
                </div>

              </>
            );
          }
        })}
        <button className='bigBtn' onClick={moreJokes} ><h4>Get more!</h4></button>
      </main >
      <footer>Ceridwen Roberts 2023</footer>
    </div >

  )
}

export default App
