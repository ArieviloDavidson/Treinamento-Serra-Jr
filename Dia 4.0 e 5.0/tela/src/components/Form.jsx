import React, { useState } from 'react';
import './Form.css';

export default function Form() {
  const [tarefas, settarefas] = useState([]);

  function handleAddTask() {
    const newTask = document.querySelector('input').value;
    settarefas([...tarefas, newTask]);
    document.querySelector('input').value = '';
  }

  return (
    <div className='corpo'>
      <h2>Lista</h2>
      <div className='formulario'>
        <input type="text" placeholder='Nome'/>
        <button className='botao' onClick={handleAddTask}>Adicionar</button>
      </div>
      <ul className='tarefas'>
        {tarefas.map((tarefa, index) => (
          <li className='tarefa' key={index}><strong>Tarefa:</strong> {tarefa}</li>
        ))}
      </ul>
    </div>
  );
}
