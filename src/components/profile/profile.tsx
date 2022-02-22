import { useCallback, useState } from 'react';
import Button from '../button/button';
import Input from '../input/input';
import styles from './profile.module.scss';
import Loading from '../loading/loading';

interface Props {
  isLoading: boolean;
  name: string;
  userName: string;
  email: string;
  street: string;
  city: string;
  code: string;
  phone: string;
  website: string;
  comment: string;
  onChangeName: (value: string) => void;
  onChangeUserName: (value: string) => void;
  onChangeEmail: (value: string) => void;
  onChangeStreet: (value: string) => void;
  onChangeCity: (value: string) => void;
  onChangeCode: (value: string) => void;
  onChangePhone: (value: string) => void;
  onChangeWebsite: (value: string) => void;
  onChangeComment: (value: string) => void;
}

export default function Profile(props: Props) {
  const [disabled, setDisabled] = useState(true);

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    console.log('name: ', props.name);
    console.log('username: ', props.userName);
    console.log('email: ', props.email);
    console.log('street: ', props.street);
    console.log('city: ', props.city);
    console.log('code: ', props.code);
    console.log('phone: ', props.phone);
    console.log('website: ', props.website);
    console.log('comment: ', props.comment);
  }, [props]);

  // useEffect(() => {
  //   users.getById(params.query.id).then((resp) => {
  //     console.log(params)
  //     setData(resp);
  //     setName(resp.name);
  //     setUserName(resp.username);
  //     setEmail(resp.email);
  //     setStreet(resp.address.street);
  //     setCity(resp.address.city);
  //     setCode(resp.zipcode);
  //     setPhone(resp.phone);
  //     setWebsite(resp.website);
  //   });
  // }, [params]);

  return (
    <div className={styles.profile}>
      <header className={styles.profile__header}>
        <h1 className={styles.profile__heading}>Профиль пользоваетля</h1>
        <Button onClick={() => setDisabled(!disabled)}>
          {disabled ? 'Редактировать' : 'Просмотр'}
        </Button>
      </header>
      {!props.isLoading ? (
        <form action="/" className={styles.profile__form} onSubmit={submitHandler} id="form">
          <div className={styles.profile__formWrapper}>
            <Input
              type="text"
              label="Name"
              value={props.name}
              placeholder="Иван Иванов"
              readOnly={disabled}
              onChange={props.onChangeName}
            />
            <Input
              type="text"
              label="User name"
              value={props.userName}
              placeholder="Ivan"
              readOnly={disabled}
              onChange={props.onChangeUserName}
            />
            <Input
              type="email"
              label="E-mail"
              value={props.email}
              placeholder="example@mail.com"
              readOnly={disabled}
              onChange={props.onChangeEmail}
            />
            <Input
              type="text"
              label="Street"
              value={props.street}
              placeholder="ул. Пример"
              readOnly={disabled}
              onChange={props.onChangeStreet}
            />
            <Input
              type="text"
              label="City"
              value={props.city}
              placeholder="Москва"
              readOnly={disabled}
              onChange={props.onChangeCity}
            />
            <Input
              type="text"
              label="Zip code"
              value={props.code}
              placeholder="1234234"
              readOnly={disabled}
              onChange={props.onChangeCode}
            />
            <Input
              type="text"
              label="Phone"
              value={props.phone}
              placeholder="89991112233"
              readOnly={disabled}
              onChange={props.onChangePhone}
            />
            <Input
              type="text"
              label="Website"
              value={props.website}
              placeholder="www.example.com"
              readOnly={disabled}
              onChange={props.onChangeWebsite}
            />
            <Input
              type="textarea"
              label="Comment"
              value={props.comment}
              disabled={disabled}
              onChange={props.onChangeComment}
            />
          </div>
          <Button type="submit" className={styles.profile__submit} disabled={disabled}>Отправить</Button>
        </form>
        ) : (
          <Loading />
        )}
    </div>
  )
}
