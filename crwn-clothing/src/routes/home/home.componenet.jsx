import Directory from '../../Components/Directory/Directory.componenet'
import { Outlet } from 'react-router-dom';

const Home = () => {



  return (
    <div>
        <Outlet/>
        <Directory/>
    </div>
  );
}

export default Home;
