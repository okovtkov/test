import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button/button';
import Input from '../input/input';
import { User } from '../../types';
import './profile.scss';

interface Props {
  data?: User[] | null;
}

export default function Profile(props: Props) {
  const [data, setData] = useState<User | null>(null);
  const params = useParams();

  useEffect(() => {
    const data = props.data?.find((item) => item.id === Number(params.id));
    if (!data) throw new Error('Ошибка загрузки');
    setData(data);
  }, [params.id, props.data]);

  return (
    <div className="profile">
      <header className="profile__header">
        <h1 className="profile__heading">Профиль пользоваетля</h1>
        <Button name="Редактировать" />
      </header>
      <form action="/" className="profile__form">
        <div className="profile__form-wrapper">
          <Input
            label="Name"
            value={data?.name}
            placeholder="Иван Иванов"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="User name"
            value={data?.username}
            placeholder="Ivan"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="E-mail"
            value={data?.email}
            placeholder="example@mail.com"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Street"
            value={data?.address.street}
            placeholder="ул. Пример"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="City"
            value={data?.address.city}
            placeholder="Москва"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Zip code"
            value={data?.address.zipcode}
            placeholder="1234234"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Phone"
            value={data?.phone}
            placeholder="89991112233"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Website"
            value={data?.website}
            placeholder="www.example.com"
            disabled={true}
            readOnly={true}
          />
          <Input type="textarea" label="Comment" disabled={true} />
        </div>
        <Button name="Отправить" type="submit" className="profile__submit" disabled={true} />
      </form>
    </div>
  )
}