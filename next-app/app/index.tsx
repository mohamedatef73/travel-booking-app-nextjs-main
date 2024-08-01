// pages/index.tsx

import { GetServerSideProps } from 'next';
import prisma from '../../backend/lib/prisma';

export const getServerSideProps: GetServerSideProps = async () => {
  const users = await prisma.user.findMany();
  return {
    props: { users },
  };
};

type User = {
  id: number;
  email: string;
  name: string | null;
  createdAt: string;
};

type Props = {
  users: User[];
};

const Home: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.email} - {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
