import './assests/scss/style.scss';
import './assests/fonts/boxicons.css'
import { MainLayout } from './Component/MainLayout';
import {Login} from './Component/Login';
import { Register } from './Component/Register';
import { ForgotPassword } from './Component/ForgotPassword';
import {Forms} from './Component/Forms';
import { List_Group } from './Component/List_Group';
import { Cards } from './Component/Card';
import { Spinner } from './Component/Spinner';
import { Breadcrumbs } from './Component/Breadcrumbs';

function App() {
  return (
    <>
      {/* <MainLayout/> */}
      <Login />
      <Register />
      <ForgotPassword />
      <Forms />
      <List_Group />
      <Cards />
      <Spinner />
      <Breadcrumbs />
    </>
  );
}

export default App;
