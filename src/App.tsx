import { useState } from 'react';

import { Annotation } from './design/components/atoms/annotation/annotation';
import { Button } from './design/components/atoms/button/button';
import { Checkbox } from './design/components/atoms/checkbox/checkbox';
import { Application } from './design/components/molecules/application/application';
import { HeroHeader } from './design/components/molecules/heroheader/heroheader';
import { Modal } from './design/components/molecules/modal/modal';
import { ModalCard } from './design/components/molecules/modalcard/modalcard';
import { ClickCounter } from './ClickCounter';
import Image from './react.svg';

import './design/styles/index.scss';

const App = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const hidModal = () => {
    setModalOpen(false);
  };
  return (
    <div>
      <h1>
        React Typescript Webpack {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={Image} alt="test" width="200px" height="200px" />

      <ClickCounter />
      <ModalCard />
      <Annotation />
      <Checkbox />
      <Application />
      <Button
        handleClick={() => {
          setModalOpen(true);
        }}
      >
        Click me
      </Button>
      <Modal isOpen={modalOpen} onCancel={hidModal}>
        <Button>Click me</Button>
      </Modal>
      <HeroHeader />
    </div>
  );
};

export default App;
