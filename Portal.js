import React from 'react';
import './style.css';
import Sidebar from "./component/Sidebar.js";
import Anasayfa from './component/Anasayfa';

function Portal() {
   
            
            return (
        <>
        <div className="row">
            <div className="">
                <Sidebar/>
                <Anasayfa/>
            </div>
            </div>
        
    </> 

    );
}

export default Portal;