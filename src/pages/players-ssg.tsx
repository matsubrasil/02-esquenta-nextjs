import { GetStaticPathsContext, GetStaticProps } from 'next';
import { Player } from '../utils/models';
import axios from 'axios';

type PlayersListProps = {
  players: Player[];
};

const PlayersListStaticGeneratorPage = ({ players }: PlayersListProps) => {
  return (
    <div>
      <h1>Lista de Jogadores</h1>
      <ul>
        {players?.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PlayersListStaticGeneratorPage;

export const getStaticProps: GetStaticProps = async (ctx: GetStaticPathsContext) => {
  console.log('executou getStaticProps');
  const { data: players } = await axios.get('http://localhost:8000/players');
  return {
    props: {
      players,
    },
  };
};
