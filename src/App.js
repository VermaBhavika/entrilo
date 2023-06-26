import './assests/scss/style.scss';
import './assests/fonts/boxicons.css'
import bootstrap from 'bootstrap';
import { MainLayout } from './Component/MainLayout';
import { Login } from './Component/Login';
import { Register } from './Component/Register';
import { ForgotPassword } from './Component/ForgotPassword';
import { DesignComponent } from './Component/DesignComponent';

function App() {
  return (
    <>
      <MainLayout/>
      {/* <Login />
      <Register />
      <ForgotPassword />
     <DesignComponent/> */}
    </>
  );
}

export default App;
