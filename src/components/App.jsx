import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { BookForm } from './BookForm/BookForm';
import { ContactList } from './ContactList/ContactList';
import Modal from './Modal/Modal';
import { NewContactBtn } from './NewContButton/NewContButton';
import { CloseModalBtn } from './CloseModalButton/CloseModalButton';

export const App = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <GlobalStyle />
      <h1>Phonebook</h1>
      <NewContactBtn showModal={toggleModal} />
      <ContactList />
      {showModal && (
        <Modal onClose={toggleModal}>
          <CloseModalBtn closeModal={toggleModal} />
          <BookForm closeModal={toggleModal} />
        </Modal>
      )}
    </Layout>
  );
};
