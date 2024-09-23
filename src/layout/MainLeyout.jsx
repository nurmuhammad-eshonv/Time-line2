import Navbar from '../components/Navbar';
import Menyu from '../components/Menyu';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    
    <div >
      <Navbar />
      <div className='div-100'>
        <Menyu />
        <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;
