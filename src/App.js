import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Route/Route';
import {Toaster} from 'react-hot-toast'
import Loading from './Shared/Loading/Loading';

function App() {
  return (
    <div className='max-w-[1280px] mx-auto'>
      <RouterProvider router={router} fallbackElement={<Loading></Loading>}></RouterProvider>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
