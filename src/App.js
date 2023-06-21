import './assests/scss/style.scss';
import './assests/fonts/boxicons.css'
import { MainLayout } from './Component/MainLayout';
import {Login} from './Component/Login';
import { Register } from './Component/Register';
import { ForgotPassword } from './Component/ForgotPassword';

function App() {
  return (
    <>
      {/* <MainLayout/> */}
      <Login />
      <Register />
      <ForgotPassword />
    </>
  );
}

export default App;
