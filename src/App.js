import './assests/fonts/boxicons.css'
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assests/scss/style.scss'
import {
  MainLayout,Login
} from './Component/pages/index';


function App() {
  return (
    <>
      {/* <MainLayout/> */}
      <Login />
    </>
  );
}

export default App; 
