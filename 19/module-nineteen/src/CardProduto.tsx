import { useState } from 'react'
import type { MouseEvent } from 'react';
import styled from 'styled-components';

interface ProdutosTypes {
    id: string;
    titulo: string;
    descricao: string; 
    quantidadeDisponivel: string;
    preco: string; 
    emDestaque: boolean;
}

interface CardProps {
    item: ProdutosTypes;
}

interface MyButtonProps {
    $adicionado: boolean; 
}

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 24px;
  background-color: #ffffff;
  border-radius: 16px;
  border: 1px solid #e9ecef;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 1.25rem;
    color: #212529;
    margin: 0;
    font-weight: 700;
  }

  p {
    font-size: 0.95rem;
    color: #6c757d;
    line-height: 1.5;
    margin: 0;
  }
`;

const MyButton = styled.button<MyButtonProps>`
  border: none;
  border-radius: 12px;
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-weight: 600;
  color: white;
  transition: all 0.2s ease;
  
  /* Lógica de cor solicitada no Requisito 3 */
  background-color: ${props => props.$adicionado ? '#198754' : '#6c757d'};

  &:hover {
    filter: brightness(1.2);
    transform: scale(1.02);
  }
`;

const PrecoQuantidade = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  margin-top: auto;

  h2 {
    font-size: 1.5rem;
    color: #0d6efd;
    margin: 0;
  }

  span.estoque {
    font-size: 0.85rem;
    font-weight: 600;
    background: #e9ecef;
    padding: 4px 10px;
    border-radius: 20px;
    color: #495057;
  }
`;

const CardProduto: React.FC<CardProps> = ({ item }) => {

    const [change, setChange] = useState<boolean>(false);
    const handleButtonChange = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setChange(prevState => !prevState)
    }

    return (
        <CardContainer>
            <h1>{item.titulo}</h1>
            <p>{item.descricao}</p>
            <PrecoQuantidade>
                <h2>R$ {item.preco}</h2>
                <span className="estoque">Estoque: {item.quantidadeDisponivel}</span>
            </PrecoQuantidade>
            <MyButton $adicionado={change} onClick={handleButtonChange}>
                {change ? 'Adicionado' : 'Adicionar ao carrinho'}
            </MyButton>
        </CardContainer>
    );
}

export default CardProduto;