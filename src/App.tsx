import Image from './react.svg';
import { ClickCounter } from './ClickCounter';
import './design/styles/index.scss';
import { Button } from './design/components/atoms/button/button';

const App = () => {
  return (
    <div>
      <h1>
        React Typescript Webpack {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={Image} alt="test" />
      <Button>Click me</Button>
      <ClickCounter />
    </div>
  );
};

export default App;
