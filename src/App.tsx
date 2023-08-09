import Image from './react.svg'
import { ClickCounter } from './ClickCounter'
import './styles.css'

const App = () => {
  let num = 0;
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
