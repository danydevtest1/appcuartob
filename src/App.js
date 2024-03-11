
import { BrowserRouter } from 'react-router-dom';
import Rutas from './routes/Rutas';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    
    <BrowserRouter>
    <ToastContainer/>
      <Rutas />
    </BrowserRouter>
 
  );
}

export default App;
