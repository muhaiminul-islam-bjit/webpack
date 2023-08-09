import './styles.css'
import Image from './react.svg'
import { ClickCounter } from './ClickCounter'

const App = () => {
  const num = 4;
  return (
    <div>
      <h1>
        React Typescript Webpack {process.env.NODE_ENV} - {process.env.name}
      </h1>
      <img src={Image} alt='test' />
      <ClickCounter />
    </div>
  )
}

export default App
