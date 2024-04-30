import React from 'react';
import './Main.css'
import { Twitter,Facebook, Instagram, LinkedIn } from '@mui/icons-material';


const Main =()=>{
    return (      
           <div className='main'>
            <div className="main__container">
                <div className="main__content">
                    <div className="text">
                        <p>Hello Everyone !</p>
                        <h1>I am A Sai Sankar</h1>
                        <p>Front-end Developer & Designer</p>
                        <div classname="icons">
                            <Twitter className="icon"/>
                            <Instagram className="icon"/>
                            <Facebook className="icon"/>
                            <LinkedIn className="icon"/>
                        </div>
                        <div className="buttons">
                            <button>See Me</button>
                            <button>Hire Me</button>
                        </div>
                    </div>
                </div>
                <div className="main__img">
                    <img src="https://raw.githubusercontent.com/ASAISANKAR/images/main/WhatsApp%20Image%202024-03-26%20at%2015.00.07_fe56eb2f.jpg" alt="" width="200px" />
                </div>
            </div>
           </div>
        )
}
export default Main