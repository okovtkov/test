import Profile from '../../components/profile/profile';
import Layout from '../../../layouts/layout';
import { Context, useEffect, useState } from 'react';
import { UserData } from '../../types';
import { SortType } from '../../types';
import { users } from '../../api/users';
import { AppContext } from 'next/app';

interface Props {
  userData: UserData;
  isLoading: boolean;
}

function User(props: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [code, setCode] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [comment, setComment] = useState('');
  const [sortType, setSortType] = useState<SortType | ''>('');

  useEffect(() => {
    if (props.isLoading) return;
    console.log(props);
    setIsLoading(false);
    setName(props.userData.name);
    setUserName(props.userData.username);
    setEmail(props.userData.email);
    setStreet(props.userData.address.street);
    setCity(props.userData.address.city);
    setCode(props.userData.address.zipcode);
    setPhone(props.userData.phone);
    setWebsite(props.userData.website);
  }, [props]);

  return (
    <Layout changeSortTypeHandler={setSortType}>
      <Profile
        isLoading={isLoading}
        name={name}
        userName={userName}
        email={email}
        street={street}
        city={city}
        code={code}
        phone={phone}
        website={website}
        comment={comment}
        onChangeName={setName}
        onChangeUserName={setUserName}
        onChangeEmail={setEmail}
        onChangeStreet={setStreet}
        onChangeCity={setCity}
        onChangeCode={setCode}
        onChangePhone={setPhone}
        onChangeWebsite={setWebsite}
        onChangeComment={setComment}
      />
    </Layout>
  );
}

export default User;

export async function getServerSideProps(context: any) {
  const userData = await users.getById(context.query.id);

  return {
    props: {
      userData,
      isLoading: false,
    },
  };
};
