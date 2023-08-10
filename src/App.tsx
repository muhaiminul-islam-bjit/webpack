import { Annotation } from './design/components/atoms/annotation/annotation';
import { Button } from './design/components/atoms/button/button';
import { Checkbox } from './design/components/atoms/checkbox/checkbox';
import { Application } from './design/components/molecules/application/application';
import { Modal } from './design/components/molecules/modal/modal';
import { ModalCard } from './design/components/molecules/modalcard/modalcard';
import { ClickCounter } from './ClickCounter';
import Image from './react.svg';

import './design/styles/index.scss';

const App = () => {
  return (
    <div>
      <h1>
        React Typescript Webpack {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={Image} alt="test" />
      <Button>Click me</Button>
      <ClickCounter />
      <ModalCard />
      <Modal />
      <Annotation />
      <Checkbox />
      <Application />
    </div>
  );
};

export default App;
