import { RouterProvider } from 'react-router-dom';
import './App.css';
import { Toaster } from 'react-hot-toast'
import { router } from './Routes/Routes/Routes';

function App() {
  return (
    <div className='max-w-[1300px] mx-auto'>
      <RouterProvider router={router} />
      <Toaster/>
    </div>
  )
}

export default App;
