import './assests/scss/style.scss';
import './assests/fonts/boxicons.css'
import { MainLayout } from './Component/MainLayout';
import {Login} from './Component/Login';

function App() {
  return (
    <>
      <MainLayout/>
      <Login />
    </>
  );
}

export default App;
