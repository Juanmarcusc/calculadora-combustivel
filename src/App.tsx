import { useState, FormEvent } from 'react'
import logoImg from './assets/logo.png'
import './App.css'

/*
  calculo: alcool / gasolina
  se o resultado for menor do que 0.7 compensa usar Alcool
*/

interface InfoProps{
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

function App() {

  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [info, setInfo] = useState<InfoProps>()

  function calcular(event: FormEvent){
    event.preventDefault();
    const calculo =(alcoolInput / gasolinaInput)
    if(calculo <= 0.7){
      setInfo({
        title: "Compensa usar Álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }else{
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput)
      })
    }
  }

  function formatarMoeda(valor: number){
    const valorFormatado = valor.toLocaleString("pt-br",
    {
      style: "currency",
      currency: "BRL"
    })
    return valorFormatado;
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
              value={alcoolInput}
              onChange={(e) => setAlcoolInput(Number(e.target.value))}
              required
            />
          </form>

          <form className='form' onSubmit={calcular}>
            <label>
              Gasolina (preço por litro):
            </label>
            <input 
              className='input'
              type='number' 
              placeholder='R$'
              step='0.01'
              value={gasolinaInput}
              onChange={(e) => setGasolinaInput(Number(e.target.value))}
              required
            />

            <input className="btn" type="submit" value="calcular" />
          </form>

          {info && Object.keys(info).length > 0 && (
            <section className='result'>
            <h2 className='result-title'>
              {info.title}
            </h2>
          
            <span>Álcool {info.alcool}</span>
            <span>Gasolina {info.gasolina}</span>
            </section>
          
          )}

        </main>
      </div>
  )
}

export default App
