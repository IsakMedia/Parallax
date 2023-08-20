import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './style.scss'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef } from ''


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Parallax Page Excercise</h1>
      <div className='wrapper'>
        <Parallax pages={2}>
          <ParallaxLayer
            speed={1.2}
            factor={1}
            style={{
              backgroundImage: (`url("boat_japan_background.jpg")`),
              backgroundSize: 'cover',
              height: 'auto',
              width: '100%'
            }}>

            <p>layer 1</p>
          </ParallaxLayer>

          <ParallaxLayer speed={1.5}
            style={{
              backgroundImage: (`url("boat_japan_foreground.jpg")`),
              backgroundSize: 'cover',
              height: 'auto',
              width: '100%'
            }}>
            <p>layer 2</p>
          </ParallaxLayer>

          <ParallaxLayer speed={2}>
            <p>layer 3</p>
          </ParallaxLayer>

        </Parallax >
      </div>
    </>
  )
}

export default App
