import { NewContButton } from './NewContButton.style';

export const NewContactBtn = ({ showModal }) => {
  return (
    <NewContButton type="button" onClick={showModal}>
      New contact
    </NewContButton>
  );
};
