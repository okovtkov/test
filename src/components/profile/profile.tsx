import { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../button/button';
import Input from '../input/input';
import { User } from '../../types';
import './profile.scss';
import { users } from '../../api/users';

export default function Profile() {
  const [data, setData] = useState<User | null>(null);
  const [disabled, setDisabled] = useState(true);
  const params = useParams();

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    const array = Array.from(event.target.children[0].children);
    const data = array.reduce((current: any, item: any) => {
      const input = item.querySelector('.input__element');
      const key = input.name;
      const value = input.value;
      current[key] = value;
      return current;
    }, {});
    console.log(JSON.stringify(data));
  }, []);

  useEffect(() => {
    users.find(params.id).then((resp) => setData(resp));
  }, [params.id]);

  return (
    <div className="profile">
      <header className="profile__header">
        <h1 className="profile__heading">Профиль пользоваетля</h1>
        <Button
          name={disabled ? 'Редактировать' : 'Просмотр'}
          onClick={() => setDisabled(!disabled)}
        />
      </header>
      <form action="/" className="profile__form" onSubmit={submitHandler} id="form">
        <div className="profile__form-wrapper">
          <Input
            type="text"
            label="Name"
            value={data?.name}
            placeholder="Иван Иванов"
            readOnly={disabled}
          />
          <Input
            type="text"
            label="User name"
            value={data?.username}
            placeholder="Ivan"
            readOnly={disabled}
          />
          <Input
            type="email"
            label="E-mail"
            value={data?.email}
            placeholder="example@mail.com"
            readOnly={disabled}
          />
          <Input
            type="text"
            label="Street"
            value={data?.address.street}
            placeholder="ул. Пример"
            readOnly={disabled}
          />
          <Input
            type="text"
            label="City"
            value={data?.address.city}
            placeholder="Москва"
            readOnly={disabled}
          />
          <Input
            type="text"
            label="Zip code"
            value={data?.address.zipcode}
            placeholder="1234234"
            readOnly={disabled}
          />
          <Input
            type="text"
            label="Phone"
            value={data?.phone}
            placeholder="89991112233"
            readOnly={disabled}
          />
          <Input
            type="text"
            label="Website"
            value={data?.website}
            placeholder="www.example.com"
            readOnly={disabled}
          />
          <Input type="textarea" label="Comment" disabled={disabled} />
        </div>
        <Button
          name="Отправить"
          type="submit"
          className="profile__submit"
          disabled={disabled}
        />
      </form>
    </div>
  )
}