import { Typography } from '@mui/material';
import cn from 'classnames';
import { useEffect } from 'react';

import { Preloader, User } from '../../components';
import { textTransform } from '../../helpers/textTransform';
import { useAppDispatch, useAppSelector } from '../../hooks/useStore';
import { fetchUsers } from '../../store/slices/usersSlice';
import { ISetUsers } from '../../types/users';

export const Users = () => {
  const dispatch = useAppDispatch();
  const [users, links, isUserRegistered, currentPage, pageSize, isLoaded] =
    useAppSelector(({ users }) => [
      users.users,
      users.links,
      users.isUserRegistered,
      users.currentPage,
      users.pageSize,
      users.isLoaded,
    ]);

  const handleButtonClick = () => {
    if (links.next_url) {
      dispatch(fetchUsers({ page: currentPage + 1, count: pageSize }));
    }
  };

  useEffect(() => {
    dispatch(fetchUsers({ page: 1, count: 6 }));
  }, [dispatch]);

  useEffect(() => {
    if (isUserRegistered) {
      dispatch(fetchUsers({ page: 1, count: 6, update: true }));
    }
  }, [dispatch, isUserRegistered]);

  return (
    <section className='page__users users' id='users'>
      <div className='users__container container'>
        <div className='users__top top-users'>
          <Typography
            variant='h1'
            component='h2'
            className='top-users__title h1'
          >
            {textTransform('Our cheerful users', 18)}
          </Typography>
          <h3 className='top-users__subtitle h2'>
            {textTransform('The best specialists are shown below', 36)}
          </h3>
        </div>
        {isLoaded ? (
          <div className='users__list'>
            {users.map((obj: ISetUsers, i) => (
              <User key={`${obj.id}: ${i}`} {...obj} />
            ))}
          </div>
        ) : (
          <Preloader addClass='users__preloader' />
        )}
        <div className='users__bottom bottom-users'>
          <button
            onClick={handleButtonClick}
            disabled={!isLoaded}
            className={cn(
              'bottom-users__btn btn btn--yellow',
              !links.next_url && 'disabled'
            )}
            type='button'
          >
            <span>Show more</span>
          </button>
        </div>
      </div>
    </section>
  );
};
