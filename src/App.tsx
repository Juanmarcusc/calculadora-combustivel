import { useState, FormEvent } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

/*
  calculo: alcool / gasolina
  se o resultado for menor do que 0.7 compensa usar Alcool
*/


function App() {

  const [gasolinaInput, setAlcoolInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)

  function calcular(event: FormEvent){
    event.preventDefault();
    let calculo =(alcoolInput / gasolinaInput)
    if(calculo <= 0.7){
      alert("compensa usar Alcool")
    }else{
      alert("Compensar usar gasolina")
    }
  }

  return (
      <div>
        <main className='container'>
          <img 
              src={logoImg} 
              alt="logo da calculadora de gasolina ou alcool" 
          />
          <h1 className='title'>Qual melhor opção?</h1>

          <form className='form' onSubmit={calcular}>
            <label>
              Álcool (preço por litro):
            </label>
            <input 
              className='input'
              type='number' 
              placeholder='R$'
              step='0.01'
              required
              value={alcoolInput}
              onChange={(e) => setAlcoolInput(Number(e.target.value))}
            />
          </form>

          <form className='form'>
            <label>
              Gasolina(preço por litro):
            </label>
            <input 
              className='input'
              type='number' 
              placeholder='R$'
              step='0.01'
              required
            />

            <input className="btn" type="submit" value="calcular" />
          </form>


        </main>
      </div>
  )
}

export default App
