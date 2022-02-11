/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cn from 'classnames';
import { MouseEvent, useCallback, useRef } from 'react';
import { useDispatch } from 'react-redux';

import useTypesSelector from '../../hooks/useTypesSelector';
import { setShowModal } from '../../store/actions/users';

const Modal = () => {
  const dispatch = useDispatch();
  const modalBackground = useRef<HTMLDivElement>(null);
  const showModal = useTypesSelector(({ users }) => users.showModal);

  const handleModalVisibility = useCallback(
    () => dispatch(setShowModal(false)),
    [dispatch]
  );

  const stopContentPropagation = useCallback(
    (e: MouseEvent<HTMLDivElement>): void => e.stopPropagation(),
    []
  );

  return (
    <div className={cn('modal', showModal && 'open')}>
      <div
        onClick={handleModalVisibility}
        ref={modalBackground}
        className='modal__body'
      >
        <div onClick={stopContentPropagation} className='modal__content'>
          <div className='modal__top'>
            <h6 className='modal__title'>Congratulations</h6>
            <p className='modal__text'>
              You have successfully passed the registration
            </p>
          </div>
          <div className='modal__bottom'>
            <button
              onClick={handleModalVisibility}
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
