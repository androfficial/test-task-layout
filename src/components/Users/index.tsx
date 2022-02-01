import { Typography } from '@mui/material';
import cn from 'classnames';
import { User } from 'components';
import useTypesSelector from 'hooks/useTypesSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { textTransform } from 'services/textTransform';
import { fetchUsers, setIsLoaded } from 'store/actions/users';
import { ISetUsers } from 'types/users';

const Users = () => {
  const dispatch = useDispatch();
  const [users, links, isLoaded] = useTypesSelector(({ users }) => [
    users.users,
    users.links,
    users.isLoaded,
  ]);

  const handleButtonClick = (): void => {
    if (links.next_url) {
      dispatch(setIsLoaded(false));
      dispatch(fetchUsers(links.next_url));
    }
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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
        <div className='users__list'>
          {users &&
            users.map((obj: ISetUsers) => <User key={obj.id} {...obj} />)}
        </div>
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
