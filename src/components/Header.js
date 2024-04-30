import React from 'react';
import './Header.css';

import {Link} from 'react-router-dom';
import {Close, MenuBookOutlined} from '@mui/icons-material';

const Header = () => {

    const [active,setActive]=React.useState(false);

    const showMenu =()=>{
        setActive(!active)
    }

    return (
        <div className="header">
            <div className="header__logo">
                <h1>Akula Sai Sankar</h1>
            </div>
            <div>
                <nav>
                    <ul>
                        <div className="closed">
                            <Close className="close" onClick={showMenu} />                         
                        </div>
                        <li>
                            <Link to='/'><b>Home</b></Link>
                        </li>
                        <li>
                            <Link to='/'><b>About</b></Link>
                        </li>
                        <li>
                            <Link to='/'><b>Portfolio</b></Link>
                        </li>
                        <li>
                            <Link to='/'><b>Blog</b></Link>
                        </li>
                        <li>
                            <Link to='/'><b>Contact</b></Link>
                        </li>

                    </ul>
                </nav>
                <div className="changer">
                    <MenuBookOutlined className="menu" onClick={showMenu} />
                </div>
            </div>

        </div>
    );
    }
export default Header;