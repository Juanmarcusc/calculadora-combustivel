import logoImg from './assets/logo.png'
import './App.css'


function App() {

  return (
      <div>
        <main className='container'>
          <img 
              src={logoImg} 
              alt="logo da calculadora de gasolina ou alcool" 
          />
          <h1 className='title'>Qual melhor opção?</h1>

          <form className='form'>
            <label>
              Álcool (preço por litro):
            </label>
            <input 
              className='input'
              type='number' 
              placeholder='R$'
              step='0.01'
              required
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
