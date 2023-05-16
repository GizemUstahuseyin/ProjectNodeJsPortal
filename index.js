import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BsGlobeAmericas } from "react-icons/bs";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>                
    

      <div className='col-12'>
          <header className="p-3 text-bg-dark">
            <li style={{  borderBottom: "none",listStyle:"none",fontSize: "20px",color:"white",textAlign:"center"}}><BsGlobeAmericas style={{margin:"0"}}/>KADİR HAS ÜNİVERSİTESİ ERASMUS PROGRAMI</li>
              
          </header> 

    <div className="row flex-nowrap">
          <div className="container-fluid "id="back">
            <div className=" text-light">
               <App />
         </div>
            </div>
      </div>
      </div>

        
  </React.StrictMode>
);

reportWebVitals();