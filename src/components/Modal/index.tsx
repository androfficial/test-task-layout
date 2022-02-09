import cn from 'classnames';
import useTypesSelector from 'hooks/useTypesSelector';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setShowModal } from 'store/actions/users';

const Modal = () => {
  const dispatch = useDispatch();
  const modalBackground = useRef<HTMLDivElement>(null);
  const showModal = useTypesSelector(({ users }) => users.showModal);

  const onClickOutside = useCallback(
    (event: MouseEvent): void => {
      if (modalBackground?.current?.contains(event.target as Node)) {
        dispatch(setShowModal(false));
      }
    },
    [dispatch]
  );

  const onClickButton = () => dispatch(setShowModal(false));

  useEffect(() => {
    if (showModal) {
      document.body.classList.add('lock');
      document.addEventListener('click', onClickOutside);
    }
    return () => {
      document.body.classList.remove('lock');
      document.removeEventListener('click', onClickOutside);
    };
  }, [showModal, onClickOutside]);

  return (
    <div className={cn('modal', showModal && 'open')}>
      <div ref={modalBackground} className='modal__body'>
        <div className='modal__content'>
          <div className='modal__top'>
            <h6 className='modal__title'>Congratulations</h6>
            <p className='modal__text'>
              You have successfully passed the registration
            </p>
          </div>
          <div className='modal__bottom'>
            <button
              onClick={onClickButton}
              className='modal__btn btn btn--yellow'
              type='button'
            >
              <span>Great</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
