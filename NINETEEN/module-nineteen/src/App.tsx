import './App.css'
import styled from 'styled-components';
import CardProduto from './CardProduto';
import Produtos from './produtos.json'

function App() {

  const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 60px 20px;
  background-color: #f8f9fa; /* Light grey background */
  min-height: 100vh;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  color: #212529;
  text-align: center;
  margin-bottom: 10px;
  font-weight: 800;
  letter-spacing: -0.5px;
  
  /* Optional: adds a small blue underline to make it pop */
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background-color: #0d6efd;
    margin: 15px auto 0;
    border-radius: 2px;
  }
`;

  const GridDiv = styled.div`
  display: grid;
  /* This creates as many 320px columns as fit, then grows them */
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  width: 100%;
  max-width: 1200px; /* Keeps the grid from getting too wide on ultrawides */
`;


  return (
    <OuterDiv>
      <PageTitle>Aqui está uma lista dos nossos produtos disponíveis:</PageTitle>
      <GridDiv>
        {Produtos.map((item) => (
          <CardProduto key={item.id} item={item} />
        ))}
      </GridDiv>
    </OuterDiv>
  )
}

export default App
