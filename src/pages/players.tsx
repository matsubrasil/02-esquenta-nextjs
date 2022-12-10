import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import axios from 'axios';
import { Player } from '../utils/models';

type PlayersListProps = {
  players: Player[];
};

const PlayersListPage = ({ players }: PlayersListProps) => {
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

export default PlayersListPage;

export const getServerSideProps: GetServerSideProps = async (ctx: GetServerSidePropsContext) => {
  console.log('executou getServeSideProps');
  const { data: players } = await axios.get('http://localhost:8000/players');
  return {
    props: {
      players,
    },
  };
};
