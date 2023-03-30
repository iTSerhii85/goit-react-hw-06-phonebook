import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';

import { BookForm } from './BookForm/BookForm';
import Modal from './Modal/Modal';
import { NewContactBtn } from './NewContButton/NewContButton';
import { CloseModalBtn } from './CloseModalButton/CloseModalButton';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

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
      <h2>Contacts</h2>
      <Filter />
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
