import { FC } from 'react'
import { Link } from 'react-router-dom';
import '../../styleHelpers/navBar.css';
export const Navbar: FC = () => {
    return(
        <>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                    <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt='Fubar' className='logo'/>
                </div>
                <div className='navbar-routes'>
                    <li>
                        <ul><Link to='posts'>Posts</Link></ul>
                        <ul><Link to='/'>Home</Link></ul>
                    </li>
                </div>
            </div>
        </>
    )

};