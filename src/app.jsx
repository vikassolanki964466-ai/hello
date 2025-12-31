import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import FlipPortfolio from './components/FlipPortfolio'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FlipPortfolio/>
     
    </>
  )
}
