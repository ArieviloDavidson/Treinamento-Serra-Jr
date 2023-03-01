import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [itens, setItens] = useState([]);

  function adicionar() {
    const nome = document.querySelector('input[name=nome]').value;
    const tempo = document.querySelector('input[name=tempo]').value;
    const categoria = document.querySelector('input[name=categoria]').value;
    setItens([...itens, { nome, tempo, categoria }]);
    document.querySelector('input[name=nome]').value = '';
    document.querySelector('input[name=tempo]').value = '';
    document.querySelector('input[name=categoria]').value = '';
  }

  function remover(index) {
    setItens(itens.filter((item, i) => i !== index));
  }

  return (
    <div className='corpo'>
      <h3>Receitas</h3>
      <div className='formulario'>
        <input type="text" placeholder='Nome' name='nome'/>
        <input type="text" placeholder='Tempo de Preparo' name='tempo'/>
        <input type="text" placeholder='Categoria' name='categoria'/>
        <button className='botao' onClick={adicionar}>Adicionar</button>
      </div>
      <ul className='itens'>
        {itens.map((item, index) => (
            <li className='item' key={index}>
            <div className='card1'>
            <img src="/trash-icon.png" alt="icone" onClick={() => remover(index)} />
              <strong>{item.nome}</strong>
            </div>
            <div className='card2'>
              <strong>{item.tempo}</strong>
              <strong>{item.categoria}</strong>
            </div> 
            </li>
        ))}
      </ul>
    </div>
  );
}
