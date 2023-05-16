import React from "react";
import call from "../images/call.jpg";
import Sidebar from './Sidebar.js';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';


function Iletisim(props) {
    if(sessionStorage.getItem("oturum") != 1){
        document.location.href="/";
        }
    const image=[call];
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mesaj, setMesaj] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = sessionStorage.getItem("id");
        
        console.log(id);
        try {
          const response = await axios.post('http://localhost:3001/submit-form', {
            id,
            name,
            email,
            mesaj,
          });
    
          if (response.status === 200) {
            console.log(response);
            if (response.data.message === '1') {
              setSuccess('Mesaj gönderildi...');
            } else {
              setError('Mesaj Gonderilemedi!');
            }
          }
        } catch (err) {
          setError('mesaj kontrolunde hata olustu', err);
        }
      };

  return(
    <div className="row">
            <div className="col-2">
                <Sidebar 
                    iletisim_active="light" 
                    iletisim_disable="disabled" />
            </div>
            
            <center>
    <div className="container col-9" style={{marginLeft:"18%"}}>
<div class=" wrapper row">
<div class="typing-demo col-lg-8 col-xl-6  m-5 text-center mx-auto">
    <h6 class="text-light">Bize Ulaşın</h6>
    <h2 class="mb-4">Yardım etmek için burdayız!</h2>
</div>
</div>

<div class="row g-2 g-md-5 mt-lg-1">
<div class="col-lg-4 mt-lg-0">
    <div class="card card-body bg-dark shadow py-5 text-center h-100">
        <h5 class="text-white mb-3">ADRES</h5>
        <ul class="list-inline mb-0" name="khasMap" id="khasMap">
            <li class="list-item mb-3">
                <a href="https://goo.gl/maps/iRjbGysDSKMWFzoX6" class="text-white">
                    <i class="fas fa-fw fa-map-marker-alt me-2 mt-1"></i>
                    Cibali Mah. Kadir Has Cad. 34083 Fatih / İSTANBUL
                </a>
            </li>
        </ul>
    </div>
</div>


<div class="col-lg-4 mt-lg-0">
    <div class="card card-body shadow py-5 text-center h-100" style={{color:"black"}}>
        <h5 class="mb-3">İLETİŞİM</h5>
        <ul class="list-inline mb-0" name="telefon" id="telefon">
            <li class="list-item mb-3">
                <a href="+902125336532" class="text-dark">
                    <i class="fas fa-fw fa-phone-alt me-2"></i>Telefon: +90 212 533 65 32
                </a>
            </li>
            <li class="list-item mb-3">
                <a href="+902126319150" class="text-dark">
                    <i class="fas fa-fw fa-phone-alt me-2"></i>Faks: +90 212 631 91 50
                </a>
            </li>

        </ul>
    </div>
</div>

<div class="col-lg-4 mt-lg-0">
    <div class="card card-body bg-dark shadow py-5 text-center h-100" name="emailIletisim" id="emailIletisim">
        <h5 class="text-white mb-3">E-MAİL</h5>
        <ul class="list-inline mb-0">
            <li class="list-item mb-0">
                <a href="mailto:danisma@khas.edu.tr" class="text-white">
                    <i class="far fa-fw fa-envelope me-2"></i>danisma@khas.edu.tr
                </a>
            </li>
            <li class="list-item mb-0">
                <a href="mailto:khas@hs01.kep.tr" class="text-white">
                    <i class="far fa-fw fa-envelope me-2"></i>khas@hs01.kep.trexample@email.com
                </a>
            </li>
        </ul>
    </div>
</div></div>

<section class="p-5">
<div class="container">
<div class="row">
    <div class="col-12" name="mapIletisim" id="mapIletisim">
        <iframe class="w-100 h-400 grayscale rounded" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.013934759269!2d28.956785215251944!3d41.02495107929912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9f12ab56e17%3A0x9485bbf687d7cbfd!2sKadir%20Has%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1675268674181!5m2!1str!2str" style={{border:"0" ,width:"600", height:"450"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>
</div>
</section>
<div class="container">
<div class="row g-4 g-lg-0 align-items-center">

<div class="col-md-6 align-items-center text-center">
    <img src={image} alt="Call Us" name="callUs" id="callUs" style={{width:"80%",width:"80%"}}/>

</div>


<div class="col-md-6" >
    <h2 class="mt-4 mt-md-0">HADİ KONUŞALIM!</h2>
    <p>Doğrudan bizimle iletişime geçin veya formu doldurun, size hemen geri dönelim.</p>

    <form onSubmit={handleSubmit} novalidate>
        <div class="mb-4 bg-light-input" >
            <label class="form-label">Adın *</label>
            <input type="text" className="form-control" required
                                    value={name} 
                                    onChange= {(e) => setName(e.target.value)}/>
        </div>
        <div class="mb-4 bg-light-input">
            <label class="form-label">E-Mail Adresin *</label>
            <input type="email" className="form-control" required
                                    value={email} 
                                    onChange= {(e) => setEmail(e.target.value)}/>
        </div>
        <div class="mb-4 bg-light-input">
            <label class="form-label">Mesajın *</label>
            <input type="text" className="form-control" required
                                    value={mesaj} 
                                    onChange= {(e) => setMesaj(e.target.value)}/>

            <button class="btn btn-dark" type="submit" style={{textAlign:"center", marginTop:"10px"}}>Gönder</button>
        </div>
    </form>
    {error && <p style={{color: 'red'}}> {error} </p>}
    {success && <p style={{color: 'green'}}> {success} </p>}  
    </div>
</div>
</div>
</div>
</center>
</div>
  );
}

export default Iletisim;