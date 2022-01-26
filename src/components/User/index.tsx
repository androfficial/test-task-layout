import { ISetUsers } from 'types/global/users';

const User = ({
  id,
  name,
  email,
  phone,
  position,
  position_id,
  registration_timestamp,
  photo,
}: ISetUsers) => {
  return (
    <article className='users__item item-user'>
      <a href={`/${id}`} className='item-user__avatar'>
        <img src={photo} alt={name} />
      </a>
      <div className='item-user__body'>
        <h5 className='item-user__name h2'>{name}</h5>
        <span className='item-user__details item-user__details--position'>
          {position}
        </span>
        <a
          href={`mailto:${email}`}
          className='item-user__details item-user__details--mail'
        >
          {email}
        </a>
        <a
          href={`tel:${phone}`}
          className='item-user__details item-user__details--phone'
        >
          {phone}
        </a>
      </div>
    </article>
  );
};

export default User;
