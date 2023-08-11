import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useScrollLock } from '../../../../hooks/useScrollLock';
import { mapModifiers } from '../../../utils/component';

interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onCancel: () => void;
}

export const Modal = ({ children, isOpen, onCancel }: ModalProps) => {
  const [open, setOpen] = useState<boolean>(!!isOpen);
  const modalOutsideRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const { lockScroll, unlockScroll } = useScrollLock();

  const handleClose = () => {
    onCancel();
    setOpen(false);
    unlockScroll();
  };

  const handleClickOutside = useCallback(() => {
    handleClose();
  }, [isOpen]);

  useEffect(() => {
    if (modalOutsideRef.current) {
      modalOutsideRef.current.addEventListener(
        'click',
        handleClickOutside,
        true
      );
    }
    return () => {
      if (modalOutsideRef.current) {
        modalOutsideRef.current.removeEventListener(
          'click',
          handleClickOutside,
          true
        );
      }
    };
  }, [handleClickOutside, modalOutsideRef]);

  useEffect(() => {
    setOpen(!!isOpen);
    if (isOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
  }, [isOpen]);

  return (
    <div className={mapModifiers('m-modal', !open && 'closed')}>
      <div className="m-modal__background" ref={modalOutsideRef} />
      <div ref={ref} className="m-modal__content">
        {children}
      </div>
    </div>
  );
};
