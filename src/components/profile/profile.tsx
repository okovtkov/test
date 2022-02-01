import Button from '../button/button';
import Input from '../input/input';
import './profile.scss';

export default function Profile() {
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
            value="Иван Иванов"
            placeholder="Иван Иванов"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="User name"
            value="Ivan"
            placeholder="Ivan"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="E-mail"
            value="example@mail.com"
            placeholder="example@mail.com"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Street"
            value="ул. Пример"
            placeholder="ул. Пример"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="City"
            value="Москва"
            placeholder="Москва"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Zip code"
            value="1234234"
            placeholder="1234234"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Phone"
            value="89991112233"
            placeholder="89991112233"
            disabled={true}
            readOnly={true}
          />
          <Input
            label="Website"
            value="www.example.com"
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