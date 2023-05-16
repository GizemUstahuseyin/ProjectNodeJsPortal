import Sidebar from './Sidebar.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


function BasvuruGoruntule(){
    
    if(sessionStorage.getItem("oturum") != 1){
        document.location.href="/";
        }
    
        const [bilgi, setBilgi] = useState('');
        const [error, setError] = useState('');

        useEffect( () => {
    
            const bilgiGetir = async () => {
                
                    const id = sessionStorage.getItem("id");
    
                    console.log(id);
    
                try{
    
                    const response = await axios.post("http://localhost:3001/formGoster",
                    {id}
                );

                if(response.status===200){
                    setBilgi(response.data);
                    console.log(response.data)
                }
    
                }catch(err){
                    setError("Kullanıcı bilgileri gösterilemedi.");
                }
            }
    
            
                bilgiGetir();
    
        }, []);
    return(
        <>
        <div className="">
                <Sidebar 
                    form_active="light" 
                    form_disable="disabled"/>
            </div>
        <div className="container mt-3 mb-5" style={{paddingLeft:"10%",paddingRight:"10%"}}>
        <div className="row bg-light rounded-4 shadow" style={{marginLeft:"20%",padding:"5%"}}>
            <div className="col-12 border-light my-5">
                <h1 className="text-center" style={{color:"black"}}>Başvuru Bilgilerim</h1>
                    <div className="col-12 justify-content-center">
                        <form><ul style={{listStyle:"none",textAlign:"center",color:"black",fontWeight:500}}><br></br>
                        <h2 className="text-center">Kişisel Bilgilerim</h2><hr></hr>
                        
                                        <li>İsim: <span style={{color:"black",fontSize:"18px"}}>{bilgi.isim}</span></li>
                                        <li>Soyisim: <span style={{color:"black",fontSize:"18px"}}>{bilgi.soyisim}</span></li>
                                        <li>Cinsiyet: <span style={{color:"black",fontSize:"18px"}}>{bilgi.cinsiyet}</span></li>
                                        <li>Doğum Tarihi: <span style={{color:"black",fontSize:"18px"}}>{bilgi.tarih}</span></li>
                                        <li>Milliyet: <span style={{color:"black",fontSize:"18px"}}>{bilgi.milliyet}</span></li>
                                        <li>İkinci Milliyet: <span style={{color:"black",fontSize:"18px"}}>{bilgi.ikinciMilliyet}</span></li>
                                        <li>Vatandaşlık Numarası: <span style={{color:"black",fontSize:"18px"}}>{bilgi.tcNo}</span></li>
                                        <li>Kronik Rahatsızlık: <span style={{color:"black",fontSize:"18px"}}>{bilgi.disability}</span></li>
                                        <li>Kronik Rahatsızlık (Varsa Açıklaması): <span style={{color:"black",fontSize:"18px"}}>{bilgi.why}</span></li>
                                        
                                        <br></br><h2 className="text-center">Adres Bilgilerim</h2><hr></hr>
                                        <li>Yaşadığınız Ülke: <span style={{color:"black",fontSize:"18px"}}>{bilgi.ulke}</span></li>
                                        <li>Yaşadığınız Şehir: <span style={{color:"black",fontSize:"18px"}}>{bilgi.il}</span></li>
                                        <li>Yaşadığınız İlçe: <span style={{color:"black",fontSize:"18px"}} >{bilgi.ilce}</span></li>
                                        <li>Yaşadığınız Mahalle: <span style={{color:"black",fontSize:"18px"}}>{bilgi.mahalle}</span></li>
                                        <li>Yaşadığınız Sokak: <span style={{color:"black",fontSize:"18px"}}>{bilgi.Street}</span></li>
                                        <li>Apartman No: <span style={{color:"black",fontSize:"18px"}}>{bilgi.apartNo}</span></li>
                                        <li> Posta Kodu: <span style={{color:"black",fontSize:"18px"}}>{bilgi.zip}</span></li>

                                        <br></br><h2 className="text-center">Eğitim Bilgilerim</h2><hr></hr>
                                        <li>Üniversite Adı: <span style={{color:"black",fontSize:"18px"}} >{bilgi.universite}</span></li>
                                        <li>Fakulte Adı: <span style={{color:"black",fontSize:"18px"}} type>{bilgi.fakulte}</span></li>
                                        <li>Bölüm Adı: <span style={{color:"black",fontSize:"18px"}} >{bilgi.bolum}</span></li>
                                        <li>Mezuniyet Durumu: <span style={{color:"black",fontSize:"18px"}}>{bilgi.mezuniyet}</span></li>
                                        <li>Mezuniyet Tarihi: <span style={{color:"black",fontSize:"18px"}}>{bilgi.mezuniyetTarih}</span></li>
                                        <li>Not Ortalaması: <span style={{color:"black",fontSize:"18px"}}>{bilgi.not}</span></li>

                                        <br></br><h2 className="text-center">Doküman Bilgilerim</h2><hr></hr>
                                        <li><b>Cv:</b><a href='" + bilgi.cv + "' target="_blank">Özgeçmiş.pdf</a></li>
                                        <li><b>Diploma:</b><a href='" + bilgi.diploma + "' target="_blank">Diploma.pdf</a></li>
                                        <li><b>Niyet Mektubu:</b><a href='" + bilgi.niyet + "' target="_blank">NiyetMektubu.pdf</a></li>
                                        <li><b>İngilizce Yeterlilik Belgesi:</b><a href='" + bilgi.ingYetkin + "' target="_blank">İngilizceYeterlilikBelgesi.pdf</a></li>
                                        <li><b>İkametgah:</b><a href='" + bilgi.ikametgah + "' target="_blank">İkametgah.pdf</a></li>
                                        <li><b>Pasaport:</b><a href='" + bilgi.pasaport + "' target="_blank">Pasaport.pdf</a></li>
                                        
                                        <br></br><h2 className="text-center">İletişim Bilgilerim</h2><hr></hr>
                                        <li>Telefon Numarası: <span style={{color:"black",fontSize:"18px"}}>{bilgi.telefon}</span></li>
                                        <li>E-Mail Adresi: <span style={{color:"black",fontSize:"18px"}}>{bilgi.email}</span></li>
                        </ul></form>
                    <center>
                        <div style={{marginTop:"8%"}}><Link className='btn btn-secondary' style={{marginRight:"2%"}} to="/portal/BasvuruGuncelle">Başvuru Güncelle</Link></div>
                    </center>
                        {error && <p style={{color: 'red'}}> {error} </p>}

                    </div>
            </div>
        </div>
    </div></>
    );

}

export default BasvuruGoruntule;