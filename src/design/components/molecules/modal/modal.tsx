import React, { useEffect } from 'react';

import { useScrollLock } from '../../../../hooks/useScrollLock';
import { mapModifiers } from '../../../utils/component';

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
}

export const Modal = ({ children, isOpen }: ModalProps) => {
  const { lockScroll } = useScrollLock();

  useEffect(() => {
    if (isOpen) {
      lockScroll();
    }
  }, [isOpen]);
  return (
    <div className={mapModifiers('m-modal', 'hidden', 'close')}>
      <div className="m-modal__background" />
      <div className="m-modal__content">{children}</div>
    </div>
  );
};
