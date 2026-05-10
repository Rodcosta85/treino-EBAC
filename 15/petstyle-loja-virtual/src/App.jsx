import Header from './Header';
import Hero from './Hero'
import Produtos from './Produtos/index'
import Depoimentos from './Depoimentos'
import Contato from './Contato'

function App() {
  

  return (
    <div className="w-full h-full">
      <Header />
      <Hero />
      <Produtos />
      <Depoimentos />
      <Contato />
    </div>
  )
}

export default App
