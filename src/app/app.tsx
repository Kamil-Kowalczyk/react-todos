import './app.module.scss';
import MainHolder from './layouts/main-holder/main-holder';
import Header from './layouts/header/header';

export function App() {
  return (
    <div>
      <Header />
      <MainHolder />
    </div>
  );
}

export default App;
