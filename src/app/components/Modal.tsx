// components/Modal.tsx

import React, { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}

const ModalWrapper = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5); /* Fundo escuro semi-transparente */
`;

const ModalContent = styled.div`
  width: 870px;
  height: 314px;
  padding: 40px;
  flex-shrink: 0;

  border-radius: 28px;
  border: 5px solid var(--black-150, rgba(18, 18, 18, 0.50));
  background: var(--white-1, #FFF);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, ...props }) => {
  return (
    <ModalWrapper isOpen={isOpen} onClick={onClose} {...props}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
