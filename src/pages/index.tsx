import { useState } from 'react';
import App from './_app';
import Layout from '../../layouts/layout';
import { SortType, UserData } from '../types';
import UserList from '../components/user-list/user-list';
import { users } from '../api/users';

interface Props {
  usersData: UserData[];
  isLoading: boolean;
}

export default function Index(props: Props) {
  const [sortType, setSortType] = useState<SortType | ''>('');

  return (
    <Layout changeSortTypeHandler={setSortType}>
      <App Component={UserList} pageProps={{ sortType, ...props }} />
    </Layout>
  )
}

export async function getServerSideProps(context: any) {
  const usersData = await users.get();

  return {
    props: {
      usersData,
      isLoading: false,
    },
  };
}
