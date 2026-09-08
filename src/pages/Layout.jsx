import Header from '../components/Header.jsx';
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
        <>

        <Header />
        <div className='page-area'>
            <Outlet />
        </div>
        
        </>
    )
}




export default Layout;