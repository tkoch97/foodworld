import '../src/styles/global.css'
import './App.css'
import tkochdevLogo from './assets/imgs/logo-tkoch-sem-fundo.png'
import { cardsData } from './utils/cardsData'
import { Card } from './components/card'

function App() {

  return (
    <>
      <div className="container">

        <h1 className="container__title">
          Mundo dos alimentos
        </h1>

        <div className="container__cards">
          {cardsData.map(card => (
            <Card key={card.id} cardData={card}/>
          ))}
        </div>
      </div>


      <footer className='container__footer'>
        <img className='footer-logo' src={tkochdevLogo} alt="" />
      </footer>

    </>
  )
}

export default App
