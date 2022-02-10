import { Typography } from '@mui/material';
import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { textTransform } from '../../helpers/textTransform';
import useTypesSelector from '../../hooks/useTypesSelector';
import { fetchUsers, setIsLoaded } from '../../store/actions/users';
import { ISetUsers } from '../../types/users';
import { Preloader, User } from '..';

const Users = () => {
  const dispatch = useDispatch();
  const [users, links, isUserRegistered, currentPage, pageSize, isLoaded] =
    useTypesSelector(({ users }) => [
      users.users,
      users.links,
      users.isUserRegistered,
      users.currentPage,
      users.pageSize,
      users.isLoaded,
    ]);

  const handleButtonClick = (): void => {
    if (links.next_url) {
      dispatch(setIsLoaded(false));
      dispatch(fetchUsers(currentPage + 1, pageSize));
    }
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    if (isUserRegistered) {
      dispatch(fetchUsers(1, 6, true));
    }
  }, [dispatch, isUserRegistered]);

  return (
    <section className='page__users users'>
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
            {users.map((obj: ISetUsers) => (
              <User key={obj.id} {...obj} />
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

export default Users;
