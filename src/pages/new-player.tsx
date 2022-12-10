import axios from 'axios';
import React from 'react';

const NewPlayer = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('saida: ', e.currentTarget.player.value);
    const name = e.currentTarget.player.value;
    const response = await axios.post('http://localhost:3000/api/new_player_api', { name });
  };

  return (
    <div>
      <h1>Cadastrar novo jogador</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='player' placeholder='Novo jogador...' />
        <button>cadastrar</button>
      </form>
    </div>
  );
};

export default NewPlayer;
