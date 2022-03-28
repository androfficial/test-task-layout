import { Img } from 'react-image';

import Plug from '../../assets/images/users/plug.svg';
import { formatPhone } from '../../helpers/formatPhone';
import { ISetUsers } from '../../types/users';
import { MainTooltip } from '../MainTooltip';

export const User = ({
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
        {/* Показать заглушку в случае если не подгрузилась аватарка пользователя */}
        <Img src={[photo, Plug]} alt={name} />
      </a>
      <div className='item-user__body'>
        <h5 className='item-user__name'>
          <MainTooltip title={name}>{name}</MainTooltip>
        </h5>
        <span className='item-user__details item-user__details--position'>
          <MainTooltip title={position}>{position}</MainTooltip>
        </span>
        <a
          href={`mailto:${email}`}
          className='item-user__details item-user__details--mail'
        >
          <MainTooltip title={email}>{email}</MainTooltip>
        </a>
        <a
          href={`tel:${phone}`}
          className='item-user__details item-user__details--phone'
        >
          {formatPhone(phone)}
        </a>
      </div>
    </article>
  );
};
