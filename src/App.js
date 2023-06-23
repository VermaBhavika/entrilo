import './assests/scss/style.scss';
import './assests/fonts/boxicons.css'
import bootstrap from 'bootstrap';
import { MainLayout } from './Component/MainLayout';
import {Login} from './Component/Login';
import { Register } from './Component/Register';
import { ForgotPassword } from './Component/ForgotPassword';
import {Forms} from './Component/Forms';
import { List_Group } from './Component/List_Group';
import { Cards } from './Component/Card';
import { Spinner } from './Component/Spinner';
import { Breadcrumbs } from './Component/Breadcrumbs';
import { Pills } from './Component/Pills';
import { Toast } from './Component/Toast';
import { Dropdowns } from './Component/Dropdowns';
import { DropZone  } from './Component/DropZone';
import { ProgressBar } from './Component/ProgressBar';
import { Modal } from './Component/Modal';
import { BasicTable } from './Component/BasicTable';

function App() {
  return (
    <>
      <MainLayout/>
      <Login />
      <Register />
      <ForgotPassword />
      <Forms />
      <List_Group />
      <Cards />
      <Spinner />
      <Breadcrumbs />
      <Pills />
      <Toast/>
      <Dropdowns/>
      <DropZone />
      <ProgressBar/>
      <Modal/>
      <BasicTable/>
    </>
  );
}

export default App;
