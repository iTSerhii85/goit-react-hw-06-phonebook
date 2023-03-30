import { CloseModalButton } from './CloseModalButton.style';

export const CloseModalBtn = ({ closeModal }) => {
  return (
    <CloseModalButton type="button" onClick={closeModal}>
      X
    </CloseModalButton>
  );
};
