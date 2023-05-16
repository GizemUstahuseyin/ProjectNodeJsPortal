import Sidebar from './Sidebar.js';
import { ImAirplane } from "react-icons/im";
import React, {useState} from 'react';
import axios from 'axios';

function BasvuruFormu() {
    if(sessionStorage.getItem("oturum") != 1){
        document.location.href="/";
        }
  
    const handleEngelChange = (e) => {
        setDisability(e.target.value);
    };

    const [isim, setIsim] = useState('');
    const [soyisim, setSoyisim] = useState('');
    const [cinsiyet, setCinsiyet] = useState('');
    const [tarih, setTarih] = useState('');
    const [milliyet, setMilliyet] = useState('');
    const [ikinciMilliyet, setIkinciMilliyet] = useState('');
    const [tcNo, setTcNo] = useState('');
    const [disability, setDisability] = useState('');
    const [why, setWhy] = useState('');
    const [ulke, setUlke] = useState('');
    const [il, setIl] = useState('');
    const [ilce, setIlce] = useState('');
    const [mahalle, setMahalle] = useState('');
    const [sokak, setSokak] = useState('');
    const [apartno, setApartno] = useState('');
    const [zip, setZip] = useState('');
    const [universite, setUniversite] = useState('');
    const [fakulte, setFakulte] = useState('');
    const [bolum, setBolum] = useState('');
    const [mezuniyet, setMezuniyet] = useState('');
    const [mezuniyetTarih, setMezuniyetTarih] = useState('');
    const [not, setNot] = useState('');
    const [cv, setCv] = useState('');
    const [niyet, setNiyet] = useState('');
    const [diploma, setDiploma] = useState('');
    const [ingYetkin, setIngYetkin] = useState('');
    const [ikametgah, setIkametgah] = useState('');
    const [pasaport, setPasaport] = useState('');
    const [telefon, setTelefon] = useState('');
    const [email, setEmail] = useState('');

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const id = sessionStorage.getItem('id');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post("http://localhost:3001/BasvuruFormuGonder", {
                id, isim, soyisim, cinsiyet, tarih, milliyet, ikinciMilliyet, tcNo, disability, why, ulke, il, ilce, mahalle, sokak, apartno, zip, universite, fakulte, bolum, mezuniyet, mezuniyetTarih, not, cv, niyet, diploma, ingYetkin, ikametgah, pasaport, telefon, email
            });

            if (response.status === 200) {
                setSuccess('Başvurunuz Alındı!');
                setIsim('');
                setSoyisim('');
                setCinsiyet('');
                setTarih('');
                setMilliyet('');
                setIkinciMilliyet('');
                setTcNo('');
                setDisability('');
                setWhy('');
                setUlke('');
                setIl('');
                setIlce('');
                setMahalle('');
                setSokak('');
                setApartno('');
                setZip('');
                setUniversite('');
                setFakulte('');
                setBolum('');
                setMezuniyet('');
                setMezuniyetTarih('');
                setNot('');
                setCv('');
                setNiyet('');
                setDiploma('');
                setIngYetkin('');
                setIkametgah('');
                setPasaport('');
                setTelefon('');
                setEmail('');


                setError('');

            } else {
                setError(response.data.error);
            }


        } catch (err) {
            setError('Veritabanı bağlantısında bir hata oluştu!');
        }
    }

    return (
        <>
            <div className="">
                <Sidebar 
                    form_active="light" 
                    form_disable="disabled"/>
            </div>
            
    <div className="" style={{marginRight:"15%",marginLeft:"18%",paddingTop:"3%"}}>
            <center>
                <div className="col-10 align-items-center" style={{color:"black"}}>
                    <div className="modal-content rounded-4 shadow" style={{backgroundColor:"white"}}>
                    <div style={{paddingTop:"5%",fontSize:"40px"}}><ImAirplane/></div>
                        <form className="was-validated p-5"onSubmit={handleSubmit} method="post" novalidate>
                        <div className="col-12 text-center" name="erasmus" id="erasmus" style={{ display: "flex", justifyContent: 'center'}}>
                <h4><label className="form-label form-label-left form-label-auto"><b>ERASMUS PROGRAMI BAŞVURU FORMU</b></label></h4>
            </div>                            
                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="kisiselBilgiler" name="kisiselBilgiler" for="kisiselBilgiler"><b>Kişisel Bilgiler</b></label></h4><hr></hr>
                            </div>
                            <div className="row p-2">
                                <div className="col-3">
                                    <label for="isim" style={{minHeight:"13px" ,ariaHidden:"false"}}>Adınız</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="isim" required 
                                    name="isim"
                                    value={isim} 
                                    onChange= {(e) => setIsim(e.target.value)}/>
                                    <div className="invalid-feedback">Lütfen geçerli bir ad giriniz!</div>
                                </div>
    
                                <div className="col-3">
                                    <label for="soyisim" style={{minHeight:"13px" ,ariaHidden:"false"}}>Soyadınız</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="soyisim" name="soyisim" required 
                                    value={soyisim} 
                                    onChange= {(e) => setSoyisim(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir soyad giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row p-2">
                                <div className="col-3">
                                    <label className="form-sub-label" for="cins" style={{ minHeight: "13px", ariaHidden: "false" }}>
                                    Cinsiyetiniz
                                    </label>
                                </div>
                                    
                                <div className="col-3">
                                <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                        <select id="cins" name="cins" className="form-select" required
                                            value={cinsiyet} 
                                            onChange= {(e) => setCinsiyet(e.target.value)}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="Kadın">Kadın</option>
                                                <option value="Erkek">Erkek</option>
                                                <option value="Diğer">Diğer</option>
                                            </select><div className="invalid-feedback">
                                        Lütfen geçerli bir cinsiyet seçiniz!
                                    </div>
                                        </span>
                                    </span>
                                    
                                </div>
                                <div className="col-3">
                                    <label for="tarih" style={{minHeight:"13px" ,ariaHidden:"false"}}>Doğum Tarihiniz</label>
                                </div>
    
    
                                <div className="col-3">
                                    <input type="date" className="form-control" id="tarih" name="tarih" required 
                                    value={tarih} 
                                    onChange= {(e) => setTarih(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir tarih giriniz!
                                    </div>
                                </div>                            
                                </div>    

                                <div className="row p-2">
                                <div className="col-3">
                                    <label className="form-sub-label" for="milliyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>Milliyetiniz</label>
                                </div>
    
    
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select id="milliyet" name="milliyet" className="form-select" required
                                            value={milliyet} 
                                            onChange= {(e) => setMilliyet(e.target.value)}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="Türk" selected>Türk</option>  
                                                <option value="Afgan">Afgan</option>
                                                <option value="Alman">Alman</option>
                                                <option value="Amerikalı">Amerikalı</option>
                                                <option value="Andorralı">Andorralı</option>
                                                <option value="Angolalı">Angolalı</option>
                                                <option value="Antigualı">Antigualı</option>
                                                <option value="Arjantinli">Arjantinli</option>
                                                <option value="Arnavut">Arnavut</option>
                                                <option value="Avustralyalı">Avustralyalı</option>
                                                <option value="Avusturyalı">Avusturyalı</option>
                                                <option value="Azerbaycanlı">Azerbaycanlı</option>
                                                <option value="Bahamalı">Bahamalı</option>
                                                <option value="Bahreynli">Bahreynli</option>
                                                <option value="Bangladeşli">Bangladeşli</option>
                                                <option value="Barbadoslu">Barbadoslu</option>
                                                <option value="Barbudalı">Barbudalı</option>
                                                <option value="Belaruslu">Belaruslu</option>
                                                <option value="Belçikalı">Belçikalı</option>
                                                <option value="Belizli">Belizli</option>
                                                <option value="Beninli">Beninli</option>
                                                <option value="Birleşik Arap Emirlikli">Birleşik Arap Emirlikli</option>
                                                <option value="Bolivyalı">Bolivyalı</option>
                                                <option value="Bosnalı">Bosnalı</option>
                                                <option value="Botsvanalı">Botsvanalı</option>
                                                <option value="Botsvanalı">Botsvanalı</option>
                                                <option value="Brezilyalı">Brezilyalı</option>
                                                <option value="Bruneili">Bruneili</option>
                                                <option value="Bulgar">Bulgar</option>
                                                <option value="Burkinalı">Burkinalı</option>
                                                <option value="Burundili">Burundili</option>
                                                <option value="Butanlı">Butanlı</option>
                                                <option value="Cezayirli">Cezayirli</option>
                                                <option value="Cibutili">Cibutili</option>
                                                <option value="Çadlı">Çadlı</option>
                                                <option value="Çek">Çek</option>
                                                <option value="Çinli">Çinli</option>
                                                <option value="Danimarkalı">Danimarkalı</option>
                                                <option value="Doğu Timorlu">Doğu Timorlu</option>
                                                <option value="Dominikalı">Dominikalı</option>
                                                <option value="Ekvadorlu">Ekvadorlu</option>
                                                <option value="Ekvator Ginesi'li">Ekvator Ginesi'li</option>
                                                <option value="Endonezyalı">Endonezyalı</option>
                                                <option value="Eritreli">Eritreli</option>
                                                <option value="Ermeni">Ermeni</option>
                                                <option value="Estonyalı">Estonyalı</option>
                                                <option value="Etiyopyalı">Etiyopyalı</option>
                                                <option value="Faslı">Faslı</option>
                                                <option value="Fijili">Fijili</option>
                                                <option value="Fildişi Sahilli">Fildişi Sahilli</option>
                                                <option value="Filipinli">Filipinli</option>
                                                <option value="Finli">Finli</option>
                                                <option value="Fransız">Fransız</option>
                                                <option value="Gabonlu">Gabonlu</option>
                                                <option value="Galce">Galce</option>
                                                <option value="Gambiyalı">Gambiyalı</option>
                                                <option value="Ganalı">Ganalı</option>
                                                <option value="Gine-Bissaulu">Gine-Bissaulu</option>
                                                <option value="Gine'li">Gine'li</option>
                                                <option value="Grenadalı">Grenadalı</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guyanalı">Guyanalı</option>
                                                <option value="Güney Afrikalı">Güney Afrikalı</option>
                                                <option value="Güney Koreli">Güney Koreli</option>
                                                <option value="Gürcü">Gürcü</option> 
                                                <option value="Haitili">Haitili</option>
                                                <option value="Hersekli">Hersekli</option>
                                                <option value="Hırvat">Hırvat</option>
                                                <option value="Hintli">Hintli</option>
                                                <option value="Hollandalı">Hollandalı</option>
                                                <option value="Honduraslı">Honduraslı</option>
                                                <option value="Iraklı">Iraklı</option>
                                                <option value="İngiliz">İngiliz</option>
                                                <option value="İranlı">İranlı</option>
                                                <option value="İrlandalı">İrlandalı</option>
                                                <option value="İskoçyalı">İskoçyalı</option>
                                                <option value="İspanyol">İspanyol</option>
                                                <option value="İsveçli">İsveçli</option>
                                                <option value="İsviçreli">İsviçreli</option>
                                                <option value="İsrailli">İsrailli</option>
                                                <option value="İtalyan">İtalyan</option>                
                                                <option value="İzlandalı">İzlandalı</option>                                          
                                                <option value="Jamaikalı">Jamaikalı</option>
                                                <option value="Japon">Japon</option>                       
                                                <option value="Kamboçyalı">Kamboçyalı</option>
                                                <option value="Kamerunlu">Kamerunlu</option>
                                                <option value="Kanadalı">Kanadalı</option>
                                                <option value="Katarlı">Katarlı</option>
                                                <option value="Kazakistanlı">Kazakistanlı</option>
                                                <option value="Kenyalı">Kenyalı</option>
                                                <option value="Kıbrıslı">Kıbrıslı</option>
                                                <option value="Kırgız">Kırgız</option>
                                                <option value="Kittis ve Nevislili">Kittis ve Nevislili</option>
                                                <option value="Kolombiyalı">Kolombiyalı</option>
                                                <option value="Komorlu">Komorlu</option>
                                                <option value="Kongo'lu">Kongo'lu</option>
                                                <option value="Kosta Rikalı">Kosta Rikalı</option>
                                                <option value="Kuveytli">Kuveytli</option>
                                                <option value="Kuzey İrlandalı">Kuzey İrlandalı</option>
                                                <option value="Kuzey Koreli">Kuzey Koreli</option>
                                                <option value="Kübalı">Kübalı</option>
                                                <option value="Lao">Laoslu</option>
                                                <option value="Lesotholu">Lesotholu</option>
                                                <option value="Letonyalı">Letonyalı</option>
                                                <option value="Liberyalı">Liberyalı</option>
                                                <option value="Libyalı">Libyalı</option>
                                                <option value="Lihtenştaynlı">Lihtenştaynlı</option>
                                                <option value="Litvanyalı">Litvanyalı</option>
                                                <option value="Lübnanlı">Lübnanlı</option>
                                                <option value="Lüksemburglu">Lüksemburglu</option>
                                                <option value="Macar">Macar</option>
                                                <option value="Madagaskarlı">Madagaskarlı</option>
                                                <option value="Makedon">Makedon</option>
                                                <option value="Malavili">Malavili</option>
                                                <option value="Maldivli">Maldivli</option>
                                                <option value="Malezyalı">Malezyalı</option>
                                                <option value="Maliyeli">Maliyeli</option>
                                                <option value="Maltalı">Maltalı</option>
                                                <option value="Marshall Adalı">Marshall Adalı</option>
                                                <option value="Mauritiuslu">Mauritiuslu</option>
                                                <option value="Meksikalı">Meksikalı</option>
                                                <option value="Mısırlı">Mısırlı</option>
                                                <option value="Mikronezyalı">Mikronezyalı</option>
                                                <option value="Moğol">Moğol</option>
                                                <option value="Moldovalı">Moldovalı</option>
                                                <option value="Monakolu">Monakolu</option>
                                                <option value="Moritanyalı">Moritanyalı</option>
                                                <option value="Mozambikli">Mozambikli</option>
                                                <option value="Myanmarlı">Myanmarlı</option>
                                                <option value="Namibyalı">Namibyalı</option>
                                                <option value="Naurulu">Naurulu</option>
                                                <option value="Nepalli">Nepalli</option>
                                                <option value="Nijerli">Nijerli</option>
                                                <option value="Nikaragualı">Nikaragualı</option>
                                                <option value="Ni-Vanuatu">Ni-Vanuatu</option>
                                                <option value="Norveçli">Norveçli</option>
                                                <option value="Orta Afrikalı">Orta Afrikalı</option>
                                                <option value="Özbek">Özbek</option>
                                                <option value="Pakistanlı">Pakistanlı</option>
                                                <option value="Palauyalı">Palauyalı</option>
                                                <option value="Panamalı">Panamalı</option>
                                                <option value="Papua Yeni Gine'li">Papua Yeni Gine'li</option>
                                                <option value="Paraguaylı">Paraguaylı</option>
                                                <option value="Perulu">Perulu</option>
                                                <option value="Polonyalı">Polonyalı</option>
                                                <option value="Portekizli">Portekizli</option>
                                                <option value="Romanyalı">Romanyalı</option>
                                                <option value="Ruandalı">Ruandalı</option>
                                                <option value="Rus">Rus</option>
                                                <option value="Saint Lucialı">Saint Lucialı</option>
                                                <option value="Salvadorlu">Salvadorlu</option>
                                                <option value="Samoalı">Samoalı</option>
                                                <option value="San Marinolu">San Marinolu</option>
                                                <option value="Sao Tome'li">Sao Tome'li</option>
                                                <option value="Saudili">Saudili</option>
                                                <option value="Senegalli">Senegalli</option>
                                                <option value="Seyşellois">Seyşellois</option>
                                                <option value="Sırp">Sırp</option>
                                                <option value="Sierra Leoneli">Sierra Leoneli</option>
                                                <option value="Singapurlu">Singapurlu</option>
                                                <option value="Slovakyalı">Slovakyalı</option>
                                                <option value="Slovenyalı">Slovenyalı</option>
                                                <option value="Solomon Adalı">Solomon Adalı</option>
                                                <option value="somali">Somali</option>
                                                <option value="Sri Lankalı">Sri Lankalı</option>
                                                <option value="Sudanlı">Sudanlı</option>
                                                <option value="Surinamlı">Surinamlı</option>
                                                <option value="Suriyeli">Suriyeli</option>
                                                <option value="Svazilandlı">Svazilandlı</option>
                                                <option value="Şilili">Şilili</option>
                                                <option value="Tacik">Tacik</option>
                                                <option value="Tanzanyalı">Tanzanyalı</option>
                                                <option value="Tay">Tay</option>
                                                <option value="Tayvanlı">Tayvanlı</option>
                                                <option value="Togolu">Togolu</option>
                                                <option value="Tongan">Tongan</option>
                                                <option value="Trinidadli veya Tobagolu">Trinidadli veya Tobagolu</option>
                                                <option value="Tunuslu">Tunuslu</option>
                                                <option value="Tuvalulu">Tuvalulu</option>
                                                <option value="Ugandalı">Ugandalı</option>
                                                <option value="Ukraynalı">Ukraynalı</option>
                                                <option value="Uruguaylı">Uruguaylı</option>
                                                <option value="Ummanlı">Ummanlı</option>
                                                <option value="Ürdünlü">Ürdünlü</option>
                                                <option value="Venezuelalı">Venezuelalı</option>
                                                <option value="Vietnamyalı">Vietnamyalı</option>
                                                <option value="Yemenli">Yemenli</option>
                                                <option value="Yeni Zelandalı">Yeni Zelandalı</option>
                                                <option value="Yeşil Burunlu">Yeşil Burunlu</option>
                                                <option value="Yunan">Yunan</option>
                                                <option value="Zambiyalı">Zambiyalı</option>
                                                <option value="Zimbabveli">Zimbabveli</option>
                                                <option value="Diğer">Diğer</option>
                                            </select><div className="invalid-feedback">
                                        Lütfen milliyetinizi seçiniz!
                                    </div>
    
                                        </span>
                                    </span>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="ikincimilliyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>İkinci Milliyetiniz</label>
                                </div>
    
    
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select id="ikincimilliyet" name="ikincimilliyet" className="form-select"
                                           value={ikinciMilliyet} 
                                           onChange= {(e) => setIkinciMilliyet(e.target.value)}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="Yok">Yok</option>
                                                <option value="Türk" selected>Türk</option>  
                                                <option value="Afgan">Afgan</option>
                                                <option value="Alman">Alman</option>
                                                <option value="Amerikalı">Amerikalı</option>
                                                <option value="Andorralı">Andorralı</option>
                                                <option value="Angolalı">Angolalı</option>
                                                <option value="Antigualı">Antigualı</option>
                                                <option value="Arjantinli">Arjantinli</option>
                                                <option value="Arnavut">Arnavut</option>
                                                <option value="Avustralyalı">Avustralyalı</option>
                                                <option value="Avusturyalı">Avusturyalı</option>
                                                <option value="Azerbaycanlı">Azerbaycanlı</option>
                                                <option value="Bahamalı">Bahamalı</option>
                                                <option value="Bahreynli">Bahreynli</option>
                                                <option value="Bangladeşli">Bangladeşli</option>
                                                <option value="Barbadoslu">Barbadoslu</option>
                                                <option value="Barbudalı">Barbudalı</option>
                                                <option value="Belaruslu">Belaruslu</option>
                                                <option value="Belçikalı">Belçikalı</option>
                                                <option value="Belizli">Belizli</option>
                                                <option value="Beninli">Beninli</option>
                                                <option value="Birleşik Arap Emirlikli">Birleşik Arap Emirlikli</option>
                                                <option value="Bolivyalı">Bolivyalı</option>
                                                <option value="Bosnalı">Bosnalı</option>
                                                <option value="Botsvanalı">Botsvanalı</option>
                                                <option value="Botsvanalı">Botsvanalı</option>
                                                <option value="Brezilyalı">Brezilyalı</option>
                                                <option value="Bruneili">Bruneili</option>
                                                <option value="Bulgar">Bulgar</option>
                                                <option value="Burkinalı">Burkinalı</option>
                                                <option value="Burundili">Burundili</option>
                                                <option value="Butanlı">Butanlı</option>
                                                <option value="Cezayirli">Cezayirli</option>
                                                <option value="Cibutili">Cibutili</option>
                                                <option value="Çadlı">Çadlı</option>
                                                <option value="Çek">Çek</option>
                                                <option value="Çinli">Çinli</option>
                                                <option value="Danimarkalı">Danimarkalı</option>
                                                <option value="Doğu Timorlu">Doğu Timorlu</option>
                                                <option value="Dominikalı">Dominikalı</option>
                                                <option value="Ekvadorlu">Ekvadorlu</option>
                                                <option value="Ekvator Ginesi'li">Ekvator Ginesi'li</option>
                                                <option value="Endonezyalı">Endonezyalı</option>
                                                <option value="Eritreli">Eritreli</option>
                                                <option value="Ermeni">Ermeni</option>
                                                <option value="Estonyalı">Estonyalı</option>
                                                <option value="Etiyopyalı">Etiyopyalı</option>
                                                <option value="Faslı">Faslı</option>
                                                <option value="Fijili">Fijili</option>
                                                <option value="Fildişi Sahilli">Fildişi Sahilli</option>
                                                <option value="Filipinli">Filipinli</option>
                                                <option value="Finli">Finli</option>
                                                <option value="Fransız">Fransız</option>
                                                <option value="Gabonlu">Gabonlu</option>
                                                <option value="Galce">Galce</option>
                                                <option value="Gambiyalı">Gambiyalı</option>
                                                <option value="Ganalı">Ganalı</option>
                                                <option value="Gine-Bissaulu">Gine-Bissaulu</option>
                                                <option value="Gine'li">Gine'li</option>
                                                <option value="Grenadalı">Grenadalı</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guyanalı">Guyanalı</option>
                                                <option value="Güney Afrikalı">Güney Afrikalı</option>
                                                <option value="Güney Koreli">Güney Koreli</option>
                                                <option value="Gürcü">Gürcü</option> 
                                                <option value="Haitili">Haitili</option>
                                                <option value="Hersekli">Hersekli</option>
                                                <option value="Hırvat">Hırvat</option>
                                                <option value="Hintli">Hintli</option>
                                                <option value="Hollandalı">Hollandalı</option>
                                                <option value="Honduraslı">Honduraslı</option>
                                                <option value="Iraklı">Iraklı</option>
                                                <option value="İngiliz">İngiliz</option>
                                                <option value="İranlı">İranlı</option>
                                                <option value="İrlandalı">İrlandalı</option>
                                                <option value="İskoçyalı">İskoçyalı</option>
                                                <option value="İspanyol">İspanyol</option>
                                                <option value="İsveçli">İsveçli</option>
                                                <option value="İsviçreli">İsviçreli</option>
                                                <option value="İsrailli">İsrailli</option>
                                                <option value="İtalyan">İtalyan</option>                
                                                <option value="İzlandalı">İzlandalı</option>                                          
                                                <option value="Jamaikalı">Jamaikalı</option>
                                                <option value="Japon">Japon</option>                       
                                                <option value="Kamboçyalı">Kamboçyalı</option>
                                                <option value="Kamerunlu">Kamerunlu</option>
                                                <option value="Kanadalı">Kanadalı</option>
                                                <option value="Katarlı">Katarlı</option>
                                                <option value="Kazakistanlı">Kazakistanlı</option>
                                                <option value="Kenyalı">Kenyalı</option>
                                                <option value="Kıbrıslı">Kıbrıslı</option>
                                                <option value="Kırgız">Kırgız</option>
                                                <option value="Kittis ve Nevislili">Kittis ve Nevislili</option>
                                                <option value="Kolombiyalı">Kolombiyalı</option>
                                                <option value="Komorlu">Komorlu</option>
                                                <option value="Kongo'lu">Kongo'lu</option>
                                                <option value="Kosta Rikalı">Kosta Rikalı</option>
                                                <option value="Kuveytli">Kuveytli</option>
                                                <option value="Kuzey İrlandalı">Kuzey İrlandalı</option>
                                                <option value="Kuzey Koreli">Kuzey Koreli</option>
                                                <option value="Kübalı">Kübalı</option>
                                                <option value="Lao">Laoslu</option>
                                                <option value="Lesotholu">Lesotholu</option>
                                                <option value="Letonyalı">Letonyalı</option>
                                                <option value="Liberyalı">Liberyalı</option>
                                                <option value="Libyalı">Libyalı</option>
                                                <option value="Lihtenştaynlı">Lihtenştaynlı</option>
                                                <option value="Litvanyalı">Litvanyalı</option>
                                                <option value="Lübnanlı">Lübnanlı</option>
                                                <option value="Lüksemburglu">Lüksemburglu</option>
                                                <option value="Macar">Macar</option>
                                                <option value="Madagaskarlı">Madagaskarlı</option>
                                                <option value="Makedon">Makedon</option>
                                                <option value="Malavili">Malavili</option>
                                                <option value="Maldivli">Maldivli</option>
                                                <option value="Malezyalı">Malezyalı</option>
                                                <option value="Maliyeli">Maliyeli</option>
                                                <option value="Maltalı">Maltalı</option>
                                                <option value="Marshall Adalı">Marshall Adalı</option>
                                                <option value="Mauritiuslu">Mauritiuslu</option>
                                                <option value="Meksikalı">Meksikalı</option>
                                                <option value="Mısırlı">Mısırlı</option>
                                                <option value="Mikronezyalı">Mikronezyalı</option>
                                                <option value="Moğol">Moğol</option>
                                                <option value="Moldovalı">Moldovalı</option>
                                                <option value="Monakolu">Monakolu</option>
                                                <option value="Moritanyalı">Moritanyalı</option>
                                                <option value="Mozambikli">Mozambikli</option>
                                                <option value="Myanmarlı">Myanmarlı</option>
                                                <option value="Namibyalı">Namibyalı</option>
                                                <option value="Naurulu">Naurulu</option>
                                                <option value="Nepalli">Nepalli</option>
                                                <option value="Nijerli">Nijerli</option>
                                                <option value="Nikaragualı">Nikaragualı</option>
                                                <option value="Ni-Vanuatu">Ni-Vanuatu</option>
                                                <option value="Norveçli">Norveçli</option>
                                                <option value="Orta Afrikalı">Orta Afrikalı</option>
                                                <option value="Özbek">Özbek</option>
                                                <option value="Pakistanlı">Pakistanlı</option>
                                                <option value="Palauyalı">Palauyalı</option>
                                                <option value="Panamalı">Panamalı</option>
                                                <option value="Papua Yeni Gine'li">Papua Yeni Gine'li</option>
                                                <option value="Paraguaylı">Paraguaylı</option>
                                                <option value="Perulu">Perulu</option>
                                                <option value="Polonyalı">Polonyalı</option>
                                                <option value="Portekizli">Portekizli</option>
                                                <option value="Romanyalı">Romanyalı</option>
                                                <option value="Ruandalı">Ruandalı</option>
                                                <option value="Rus">Rus</option>
                                                <option value="Saint Lucialı">Saint Lucialı</option>
                                                <option value="Salvadorlu">Salvadorlu</option>
                                                <option value="Samoalı">Samoalı</option>
                                                <option value="San Marinolu">San Marinolu</option>
                                                <option value="Sao Tome'li">Sao Tome'li</option>
                                                <option value="Saudili">Saudili</option>
                                                <option value="Senegalli">Senegalli</option>
                                                <option value="Seyşellois">Seyşellois</option>
                                                <option value="Sırp">Sırp</option>
                                                <option value="Sierra Leoneli">Sierra Leoneli</option>
                                                <option value="Singapurlu">Singapurlu</option>
                                                <option value="Slovakyalı">Slovakyalı</option>
                                                <option value="Slovenyalı">Slovenyalı</option>
                                                <option value="Solomon Adalı">Solomon Adalı</option>
                                                <option value="somali">Somali</option>
                                                <option value="Sri Lankalı">Sri Lankalı</option>
                                                <option value="Sudanlı">Sudanlı</option>
                                                <option value="Surinamlı">Surinamlı</option>
                                                <option value="Suriyeli">Suriyeli</option>
                                                <option value="Svazilandlı">Svazilandlı</option>
                                                <option value="Şilili">Şilili</option>
                                                <option value="Tacik">Tacik</option>
                                                <option value="Tanzanyalı">Tanzanyalı</option>
                                                <option value="Tay">Tay</option>
                                                <option value="Tayvanlı">Tayvanlı</option>
                                                <option value="Togolu">Togolu</option>
                                                <option value="Tongan">Tongan</option>
                                                <option value="Trinidadli veya Tobagolu">Trinidadli veya Tobagolu</option>
                                                <option value="Tunuslu">Tunuslu</option>
                                                <option value="Tuvalulu">Tuvalulu</option>
                                                <option value="Ugandalı">Ugandalı</option>
                                                <option value="Ukraynalı">Ukraynalı</option>
                                                <option value="Uruguaylı">Uruguaylı</option>
                                                <option value="Ummanlı">Ummanlı</option>
                                                <option value="Ürdünlü">Ürdünlü</option>
                                                <option value="Venezuelalı">Venezuelalı</option>
                                                <option value="Vietnamyalı">Vietnamyalı</option>
                                                <option value="Yemenli">Yemenli</option>
                                                <option value="Yeni Zelandalı">Yeni Zelandalı</option>
                                                <option value="Yeşil Burunlu">Yeşil Burunlu</option>
                                                <option value="Yunan">Yunan</option>
                                                <option value="Zambiyalı">Zambiyalı</option>
                                                <option value="Zimbabveli">Zimbabveli</option>
                                                <option value="Diğer">Diğer</option>
                                            </select>
                                        </span>
                                    </span>
                                </div>                            
                                </div>

                                <div className="row p-2">

                                <div className="col-3">
                                    <label for="tcNo" style={{minHeight:"13px" ,ariaHidden:"false"}}>Vatandaşlık Numaranız</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="number" className="form-control" name="tcNo" id="tcNo" required
                                   value={tcNo} 
                                   onChange= {(e) => setTcNo(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen vatandaşlık numaranızı giriniz!
                                    </div>
    
                                </div>
                                <div className="col-3">
                                    <label for="engellilik" style={{minHeight:"13px" ,ariaHidden:"false"}}>Kronik Rahatsızlık</label>
                                </div>
    
                                <div className="col-3">
                                                <input 
                                                    type="radio" 
                                                    class="form-check-input ms-0" 
                                                    id="engel" 
                                                    name="engel" 
                                                    data-value="1" 
                                                    value="Var" 
                                                    onChange={handleEngelChange} 
                                                    required
                                                    /> Var
                                                 <label class="form-check-label" for="radio1" style={{marginLeft:"10%"}}></label>
                                            <input 
                                                    type="radio" 
                                                    class="form-check-input ms-0" 
                                                    id="engel" 
                                                    name="engel" 
                                                    data-value="2" 
                                                    value="Yok" 
                                                    onChange={handleEngelChange} 
                                                    required
                                                    /> Yok
                                                 <label class="form-check-label" for="radio1"></label>
                                            </div>

                                            <div className="col-12 form-check-inline">
                                            {disability === "Var" && (
    
                                                 <div className="form-group">
                                                <label htmlFor="bedensel_engel_var">
                                                    Varsa Açıklaması*
                                                </label>
                                                <input
                                                    type="text"
                                                    id="bedensel_engel_var"
                                                    className="form-control"
                                                    value={why} 
                                                    onChange={(e) => setWhy(e.target.value)}
                                                />
                                                </div>)}
                                                </div>
                                                
                                </div>

                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="adres" name="adres" for="adres"><b>Adres Bilgileri</b></label></h4><hr />
                            </div>
    
                            <div className="row p-2">
                                <div className="col-3">
                                    <label className="form-sub-label" for="ulke" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız Ülke</label>
                                </div>
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select name="ulke" className="form-select" id="ulke" required
                                           value={ulke} 
                                           onChange= {(e) => setUlke(e.target.value)}>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="Türkiye" selected>Türkiye</option>  
                                                <option value="ABD Virgin Adaları">ABD Virgin Adaları</option>
                                                <option value="Afganistan">Afganistan</option>
                                                <option value="Aland Adaları">Aland Adaları</option>
                                                <option value="Almanya">Almanya</option>
                                                <option value="Amerika Birleşik Devletleri">Amerika Birleşik Devletleri</option>
                                                <option value="Amerika Birleşik Devletleri Küçük Dış Adaları">Amerika Birleşik Devletleri Küçük Dış Adaları</option>
                                                <option value="Amerikan Samoası">Amerikan Samoası</option>
                                                <option value="Andora">Andora</option>
                                                <option value="Angola">Angola</option>
                                                <option value="Anguilla">Anguilla</option>
                                                <option value="Antarktika">Antarktika</option>
                                                <option value="Antigua ve Barbuda">Antigua ve Barbuda</option>
                                                <option value="Arjantin">Arjantin</option>
                                                <option value="Arnavutluk">Arnavutluk</option>
                                                <option value="Aruba">Aruba</option>
                                                <option value="Avrupa Birliği">Avrupa Birliği</option>
                                                <option value="Avustralya">Avustralya</option>
                                                <option value="Avusturya">Avusturya</option>
                                                <option value="Azerbaycan">Azerbaycan</option>
                                                <option value="Bahamalar">Bahamalar</option>
                                                <option value="Bahreyn">Bahreyn</option>
                                                <option value="Bangladeş">Bangladeş</option>
                                                <option value="Barbados">Barbados</option>
                                                <option value="Batı Sahara">Batı Sahara</option>
                                                <option value="Belize">Belize</option>
                                                <option value="Belçika">Belçika</option>
                                                <option value="Benin">Benin</option>
                                                <option value="Bermuda">Bermuda</option>
                                                <option value="Beyaz Rusya">Beyaz Rusya</option>
                                                <option value="Bhutan">Bhutan</option>
                                                <option value="Birleşik Arap Emirlikleri">Birleşik Arap Emirlikleri</option>
                                                <option value="Birleşik Krallık">Birleşik Krallık</option>
                                                <option value="Bolivya">Bolivya</option>
                                                <option value="Bosna Hersek">Bosna Hersek</option>
                                                <option value="Botsvana">Botsvana</option>
                                                <option value="Bouvet Adası">Bouvet Adası</option>
                                                <option value="Brezilya">Brezilya</option>
                                                <option value="Brunei">Brunei</option>
                                                <option value="Bulgaristan">Bulgaristan</option>
                                                <option value="Burkina Faso">Burkina Faso</option>
                                                <option value="Burundi">Burundi</option>
                                                <option value="Cape Verde">Cape Verde</option>
                                                <option value="Cebelitarık">Cebelitarık</option>
                                                <option value="Cezayir">Cezayir</option>
                                                <option value="Christmas Adası">Christmas Adası</option>
                                                <option value="Cibuti">Cibuti</option>
                                                <option value="Cocos Adaları">Cocos Adaları</option>
                                                <option value="Cook Adaları">Cook Adaları</option>
                                                <option value="Çad">Çad</option>
                                                <option value="Çek Cumhuriyeti">Çek Cumhuriyeti</option>
                                                <option value="Çin">Çin</option>
                                                <option value="Danimarka">Danimarka</option>
                                                <option value="Dominik">Dominik</option>
                                                <option value="Dominik Cumhuriyeti">Dominik Cumhuriyeti</option>
                                                <option value="Doğu Timor">Doğu Timor</option>
                                                <option value="Ekvator">Ekvator</option>
                                                <option value="Ekvator Ginesi">Ekvator Ginesi</option>
                                                <option value="El Salvador">El Salvador</option>
                                                <option value="Endonezya">Endonezya</option>
                                                <option value="Eritre">Eritre</option>
                                                <option value="Ermenistan">Ermenistan</option>
                                                <option value="Estonya">Estonya</option>
                                                <option value="Etiyopya">Etiyopya</option>
                                                <option value="Falkland Adaları (Malvinalar)">Falkland Adaları (Malvinalar)</option>
                                                <option value="Faroe Adaları">Faroe Adaları</option>
                                                <option value="Fas">Fas</option>
                                                <option value="Fiji">Fiji</option>
                                                <option value="Fildişi Sahilleri">Fildişi Sahilleri</option>
                                                <option value="Filipinler">Filipinler</option>
                                                <option value="Filistin Bölgesi">Filistin Bölgesi</option>
                                                <option value="Finlandiya">Finlandiya</option>
                                                <option value="Fransa">Fransa</option>
                                                <option value="Fransız Guyanası">Fransız Guyanası</option>
                                                <option value="Fransız Güney Bölgeleri">Fransız Güney Bölgeleri</option>
                                                <option value="Fransız Polinezyası">Fransız Polinezyası</option>
                                                <option value="Gabon">Gabon</option>
                                                <option value="Gambia">Gambia</option>
                                                <option value="Gana">Gana</option>
                                                <option value="Gine">Gine</option>
                                                <option value="Gine-Bissau">Gine-Bissau</option>
                                                <option value="Granada">Granada</option>
                                                <option value="Grönland">Grönland</option>
                                                <option value="Guadeloupe">Guadeloupe</option>
                                                <option value="Guam">Guam</option>
                                                <option value="Guatemala">Guatemala</option>
                                                <option value="Guernsey">Guernsey</option>
                                                <option value="Guyana">Guyana</option>
                                                <option value="Güney Afrika">Güney Afrika</option>
                                              <option value="Güney Georgia ve Güney Sandwich Adaları">Güney Georgia ve Güney Sandwich Adaları</option>
                                                <option value="Güney Kore">Güney Kore</option>
                                                <option value="Güney Kıbrıs Rum Kesimi">Güney Kıbrıs Rum Kesimi</option>
                                                <option value="Gürcistan">Gürcistan</option>
                                                <option value="Haiti">Haiti</option>
                                                <option value="Heard Adası ve McDonald Adaları">Heard Adası ve McDonald Adaları</option>
                                                <option value="Hindistan">Hindistan</option>
                                                <option value="Hint Okyanusu İngiliz Bölgesi">Hint Okyanusu İngiliz Bölgesi</option>
                                                <option value="Hollanda">Hollanda</option>
                                                <option value="Hollanda Antilleri">Hollanda Antilleri</option>
                                                <option value="Honduras">Honduras</option>
                                                <option value="Hong Kong SAR - Çin">Hong Kong SAR - Çin</option>
                                                <option value="Hırvatistan">Hırvatistan</option>
                                                <option value="Irak">Irak</option>
                                                <option value="İngiliz Virgin Adaları">İngiliz Virgin Adaları</option>
                                                <option value="İran">İran</option>
                                                <option value="İrlanda">İrlanda</option>
                                                <option value="İspanya">İspanya</option>
                                                <option value="İsrail">İsrail</option>
                                                <option value="İsveç">İsveç</option>
                                                <option value="İsviçre">İsviçre</option>
                                                <option value="İtalya">İtalya</option>
                                                <option value="İzlanda">İzlanda</option>
                                                <option value="Jamaika">Jamaika</option>
                                                <option value="Japonya">Japonya</option>
                                                <option value="Jersey">Jersey</option>
                                                <option value="Kamboçya">Kamboçya</option>
                                                <option value="Kamerun">Kamerun</option>
                                                <option value="Kanada">Kanada</option>
                                                <option value="Karadağ">Karadağ</option>
                                                <option value="Katar">Katar</option>
                                                <option value="Kayman Adaları">Kayman Adaları</option>
                                                <option value="Kazakistan">Kazakistan</option>
                                                <option value="Kenya">Kenya</option>
                                                <option value="Kiribati">Kiribati</option>
                                                <option value="Kolombiya">Kolombiya</option>
                                                <option value="Komorlar">Komorlar</option>
                                                <option value="Kongo">Kongo</option>
                                                <option value="Kongo Demokratik Cumhuriyeti">Kongo Demokratik Cumhuriyeti</option>
                                                <option value="Kosta Rika">Kosta Rika</option>
                                                <option value="Kuveyt">Kuveyt</option>
                                                <option value="Kuzey Kore">Kuzey Kore</option>  
                                                <option value="Kuzey Mariana Adaları">Kuzey Mariana Adaları</option>
                                                <option value="Küba">Küba</option>
                                                <option value="Kırgızistan">Kırgızistan</option>
                                                <option value="Laos">Laos</option>
                                                <option value="Lesotho">Lesotho</option>
                                                <option value="Letonya">Letonya</option>
                                                <option value="Liberya">Liberya</option>
                                                <option value="Libya">Libya</option>
                                                <option value="Liechtenstein">Liechtenstein</option>
                                                <option value="Litvanya">Litvanya</option>
                                                <option value="Lübnan">Lübnan</option>
                                                <option value="Lüksemburg">Lüksemburg</option>
                                                <option value="Macaristan">Macaristan</option>
                                                <option value="Madagaskar">Madagaskar</option>
                                                <option value="Makao S.A.R. Çin">Makao S.A.R. Çin</option>
                                                <option value="Makedonya">Makedonya</option>
                                                <option value="Malavi">Malavi</option>
                                                <option value="Maldivler">Maldivler</option>
                                                <option value="Malezya">Malezya</option>
                                                <option value="Mali">Mali</option>
                                                <option value="Malta">Malta</option>
                                                <option value="Man Adası">Man Adası</option>
                                                <option value="Marshall Adaları">Marshall Adaları</option>
                                                <option value="Martinik">Martinik</option>
                                                <option value="Mauritius">Mauritius</option>
                                                <option value="Mayotte">Mayotte</option>
                                                <option value="Meksika">Meksika</option>
                                                <option value="Mikronezya Federal Eyaletleri">Mikronezya Federal Eyaletleri</option>
                                                <option value="Moldovya Cumhuriyeti">Moldovya Cumhuriyeti</option>
                                                <option value="Monako">Monako</option>
                                                <option value="Montserrat">Montserrat</option>
                                                <option value="Moritanya">Moritanya</option>
                                                <option value="Mozambik">Mozambik</option>
                                                <option value="Moğolistan">Moğolistan</option>
                                                <option value="Myanmar">Myanmar</option>
                                                <option value="Mısır">Mısır</option>
                                                <option value="Namibya">Namibya</option>
                                                <option value="Nauru">Nauru</option>
                                                <option value="Nepal">Nepal</option>
                                                <option value="Nijer">Nijer</option>
                                                <option value="Nijerya">Nijerya</option>
                                                <option value="Nikaragua">Nikaragua</option>
                                                <option value="Niue">Niue</option>
                                                <option value="Norfolk Adası">Norfolk Adası</option>
                                                <option value="Norveç">Norveç</option>
                                                <option value="Orta Afrika Cumhuriyeti">Orta Afrika Cumhuriyeti</option>
                                                <option value="Özbekistan">Özbekistan</option>
                                                <option value="Pakistan">Pakistan</option>
                                                <option value="Palau">Palau</option>
                                                <option value="Panama">Panama</option>
                                                <option value="Papua Yeni Gine">Papua Yeni Gine</option>
                                                <option value="Paraguay">Paraguay</option>
                                                <option value="Peru">Peru</option>
                                                <option value="Pitcairn">Pitcairn</option>
                                                <option value="Polonya">Polonya</option>
                                                <option value="Portekiz">Portekiz</option>
                                                <option value="Porto Riko">Porto Riko</option>
                                                <option value="Reunion">Reunion</option>
                                                <option value="Romanya">Romanya</option>
                                                <option value="Ruanda">Ruanda</option>
                                                <option value="Rusya Federasyonu">Rusya Federasyonu</option>
                                                <option value="Saint Helena">Saint Helena</option>
                                                <option value="Saint Kitts ve Nevis">Saint Kitts ve Nevis</option>
                                                <option value="Saint Lucia">Saint Lucia</option>
                                                <option value="Saint Pierre ve Miquelon">Saint Pierre ve Miquelon</option>
                                                <option value="Saint Vincent ve Grenadinler">Saint Vincent ve Grenadinler</option>
                                                <option value="Samoa">Samoa</option>
                                                <option value="San Marino">San Marino</option>
                                                <option value="Sao Tome ve Principe">Sao Tome ve Principe</option>
                                                <option value="Senegal">Senegal</option>
                                                <option value="Seyşeller">Seyşeller</option>
                                                <option value="Sierra Leone">Sierra Leone</option>
                                                <option value="Singapur">Singapur</option>
                                                <option value="Slovakya">Slovakya</option>
                                                <option value="Slovenya">Slovenya</option>
                                                <option value="Solomon Adaları">Solomon Adaları</option>
                                                <option value="Somali">Somali</option>
                                                <option value="Sri Lanka">Sri Lanka</option>
                                                <option value="Sudan">Sudan</option>
                                                <option value="Surinam">Surinam</option>
                                                <option value="Suriye">Suriye</option>
                                                <option value="Suudi Arabistan">Suudi Arabistan</option>
                                                <option value="Svalbard ve Jan Mayen">Svalbard ve Jan Mayen</option>
                                                <option value="Svaziland">Svaziland</option>
                                                <option value="Sırbistan">Sırbistan</option>
                                                <option value="Sırbistan-Karadağ">Sırbistan-Karadağ</option>
                                                <option value="Şili">Şili</option>
                                                <option value="Tacikistan">Tacikistan</option>
                                                <option value="Tanzanya">Tanzanya</option>
                                                <option value="Tayland">Tayland</option>
                                                <option value="Tayvan">Tayvan</option>
                                                <option value="Togo">Togo</option>
                                                <option value="Tokelau">Tokelau</option>
                                                <option value="Tonga">Tonga</option>
                                                <option value="Trinidad ve Tobago">Trinidad ve Tobago</option>
                                                <option value="Tunus">Tunus</option>
                                                <option value="Turks ve Caicos Adaları">Turks ve Caicos Adaları</option>
                                                <option value="Tuvalu">Tuvalu</option>
                                                <option value="Türkmenistan">Türkmenistan</option>
                                                <option value="Uganda">Uganda</option>
                                                <option value="Ukrayna">Ukrayna</option>
                                                <option value="Umman">Umman</option>
                                                <option value="Uruguay">Uruguay</option>
                                                <option value="Uzak Okyanusya">Uzak Okyanusya</option>
                                                <option value="Ürdün">Ürdün</option>
                                                <option value="Vanuatu">Vanuatu</option>
                                                <option value="Vatikan">Vatikan</option>
                                                <option value="Venezuela">Venezuela</option>
                                                <option value="Vietnam">Vietnam</option>
                                                <option value="Wallis ve Futuna">Wallis ve Futuna</option>
                                                <option value="Yemen">Yemen</option>
                                                <option value="Yeni Kaledonya">Yeni Kaledonya</option>
                                                <option value="Yeni Zelanda">Yeni Zelanda</option>
                                                <option value="Yunanistan">Yunanistan</option>
                                                <option value="Zambiya">Zambiya</option>
                                                <option value="Zimbabve">Zimbabve</option>
                                            </select>
                                            <div className="invalid-feedback">
                                    Lütfen yaşadığınız ülkeyi seçiniz!
                                </div>
                                        </span>
                                    </span>
                                </div>
                                
                                <div className="col-3">
                                    <label className="form-sub-label" for="il" style={{minHeight:"13px", ariaHidden:"false"}}>Yaşadığınız İl</label>
                                </div>
                                <div className="col-3">
                                <input type="text" className="form-control" id="il" name="il" required
                                value={il} 
                                onChange= {(e) => setIl(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen yaşadığınız ili seçiniz!
                                    </div>
                            </div>
                            </div>
                            
                            <div className="row p-2">
                                <div className="col-3">
                                    <label className="form-sub-label" for="ilce" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız ilçe</label>
                                </div>
                                <div className="col-3">
                                <input type="text" className="form-control" id="ilce" name="ilce" required
                                value={ilce} 
                                onChange= {(e) => setIlce(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen yaşadığınız ilçeyi seçiniz!
                                    </div>
    
                                </div>
                                <div className="col-3">
                                    <label for="mahalle" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız Mahalle</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="mahalle" name="mahalle" required
                                    value={mahalle} 
                                    onChange= {(e) => setMahalle(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir mahalle giriniz!
                                    </div>
                                </div>
    
                            </div>
                            
    
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label for="sokak" style={{minHeight:"13px" ,ariaHidden:"false"}}>Yaşadığınız Sokak</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="sokak" name="sokak" required
                                    value={sokak} 
                                    onChange= {(e) => setSokak(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir sokak giriniz!
                                    </div>
                                </div>
    
                                <div className="col-3">
                                    <label for="apartno" style={{minHeight:"13px" ,ariaHidden:"false"}}>Apartman Numarası</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="number" className="form-control" id="apartno" name="apartno" required
                                    value={apartno} 
                                    onChange= {(e) => setApartno(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir numara giriniz!
                                    </div>
                                </div>
                            </div>
                            <div className="row p-2">
                                <div className="col-3">
                                    <label for="Zip" style={{minHeight:"13px" ,ariaHidden:"false"}}>Posta Kodu</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="number" className="form-control" id="zip" name="zip" required
                                   value={zip} 
                                   onChange= {(e) => setZip(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir posta kodu giriniz!
                                    </div>
                                </div>
                            </div>
    
                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="egitim" name="egitim"><b>Eğitim Bilgileri</b></label></h4><hr />
    
                            </div>
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label for="universite" style={{minHeight:"13px" ,ariaHidden:"false"}}>Üniversite Adı</label>
                                </div>
    
                                <div className="col-3">
                                <span className="form-address-line form-address-country-line jsTest-address-lineField">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select className="form-select"id="universite" name="universite" required
                                    value={universite} 
                                    onChange= {(e) => setUniversite(e.target.value)}>
                                        <option value="">Lütfen Seçiniz</option>
                                        <option value="Abant İzzet Baysal Üniversitesi">Abant İzzet Baysal Üniversitesi</option>
                                        <option value="Abdullah Gül Üniversitesi">Abdullah Gül Üniversitesi</option>
                                        <option value="Acıbadem Üniversitesi">Acıbadem Üniversitesi</option>
                                        <option value="Adana Bilim ve Teknoloji Üniversitesi">Adana Bilim ve Teknoloji Üniversitesi</option>
                                        <option value="Adnan Menderes Üniversitesi">Adnan Menderes Üniversitesi</option>
                                        <option value="Adıyaman Üniversitesi">Adıyaman Üniversitesi</option>
                                        <option value="Afyon Kocatepe Üniversitesi">Afyon Kocatepe Üniversitesi</option>
                                        <option value="Ahi Evran Üniversitesi">Ahi Evran Üniversitesi</option>
                                        <option value="Akdeniz Üniversitesi">Akdeniz Üniversitesi</option>
                                        <option value="Akev Üniversitesi">Akev Üniversitesi</option>
                                        <option value="Aksaray Üniversitesi">Aksaray Üniversitesi</option>
                                        <option value="Alanya Alaaddin Keykubat Üniversitesi">Alanya Alaaddin Keykubat Üniversitesi</option>
                                        <option value="Alanya Hamdullah Emin Paşa Üniversitesi">Alanya Hamdullah Emin Paşa Üniversitesi</option>
                                        <option value="Amasya Üniversitesi">Amasya Üniversitesi</option>
                                        <option value="Anadolu Üniversitesi">Anadolu Üniversitesi</option>
                                        <option value="Anka Teknoloji Üniversitesi">Anka Teknoloji Üniversitesi</option>
                                        <option value="Ankara Sosyal Bilimler Üniversitesi">Ankara Sosyal Bilimler Üniversitesi</option>
                                        <option value="Ankara Üniversitesi">Ankara Üniversitesi</option>
                                        <option value="Ardahan Üniversitesi">Ardahan Üniversitesi</option>
                                        <option value="Artvin Çoruh Üniversitesi">Artvin Çoruh Üniversitesi</option>
                                        <option value="Atatürk Üniversitesi">Atatürk Üniversitesi</option>
                                        <option value="Atılım Üniversitesi">Atılım Üniversitesi</option>
                                        <option value="Avrasya Üniversitesi">Avrasya Üniversitesi</option>
                                        <option value="Ağrı İbrahim Çeçen Üniversitesi">Ağrı İbrahim Çeçen Üniversitesi</option>
                                        <option value="Bahçeşehir Üniversitesi">Bahçeşehir Üniversitesi</option>
                                        <option value="Balıkesir Üniversitesi">Balıkesir Üniversitesi</option>
                                        <option value="Bandırma Onyedi Eylül Üniversitesi">Bandırma Onyedi Eylül Üniversitesi</option>
                                        <option value="Bartın Üniversitesi">Bartın Üniversitesi</option>
                                        <option value="Batman Üniversitesi">Batman Üniversitesi</option>
                                        <option value="Bayburt Üniversitesi">Bayburt Üniversitesi</option>
                                        <option value="Başkent Üniversitesi">Başkent Üniversitesi</option>
                                        <option value="Beykent Üniversitesi">Beykent Üniversitesi</option>
                                        <option value="Bezmiâlem Vakıf Üniversitesi">Bezmiâlem Vakıf Üniversitesi</option>
                                        <option value="Bilecik Şeyh Edebali Üniversitesi">Bilecik Şeyh Edebali Üniversitesi</option>
                                        <option value="Bilkent Üniversitesi">Bilkent Üniversitesi</option>
                                        <option value="Bingöl Üniversitesi">Bingöl Üniversitesi</option>
                                        <option value="Biruni Üniversitesi">Biruni Üniversitesi</option>
                                        <option value="Bitlis Eren Üniversitesi">Bitlis Eren Üniversitesi</option>
                                        <option value="Bozok Üniversitesi">Bozok Üniversitesi</option>
                                        <option value="Boğaziçi Üniversitesi">Boğaziçi Üniversitesi</option>
                                        <option value="Bursa Orhangazi Üniversitesi">Bursa Orhangazi Üniversitesi</option>
                                        <option value="Bursa Teknik Üniversitesi">Bursa Teknik Üniversitesi</option>
                                        <option value="Bülent Ecevit Üniversitesi">Bülent Ecevit Üniversitesi</option>
                                        <option value="Canik Başarı Üniversitesi">Canik Başarı Üniversitesi</option>
                                        <option value="Celal Bayar Üniversitesi">Celal Bayar Üniversitesi</option>
                                        <option value="Cumhuriyet Üniversitesi">Cumhuriyet Üniversitesi</option>
                                        <option value="Çanakkale Onsekiz Mart Üniversitesi">Çanakkale Onsekiz Mart Üniversitesi</option>
                                        <option value="Çankaya Üniversitesi">Çankaya Üniversitesi</option>
                                        <option value="Çankırı Karatekin Üniversitesi">Çankırı Karatekin Üniversitesi</option>
                                        <option value="Çağ Üniversitesi">Çağ Üniversitesi</option>
                                        <option value="Çukurova Üniversitesi">Çukurova Üniversitesi</option>
                                        <option value="Deniz Harp Okulu">Deniz Harp Okulu</option>
                                        <option value="Dicle Üniversitesi">Dicle Üniversitesi</option>
                                        <option value="Dokuz Eylül Üniversitesi">Dokuz Eylül Üniversitesi</option>
                                        <option value="Doğuş Üniversitesi">Doğuş Üniversitesi</option>
                                        <option value="Dumlupınar Üniversitesi">Dumlupınar Üniversitesi</option>
                                        <option value="Düzce Üniversitesi">Düzce Üniversitesi</option>
                                        <option value="Ege Üniversitesi">Ege Üniversitesi</option>
                                        <option value="Erciyes Üniversitesi">Erciyes Üniversitesi</option>
                                        <option value="Erzincan Üniversitesi">Erzincan Üniversitesi</option>
                                        <option value="Erzurum Teknik Üniversitesi">Erzurum Teknik Üniversitesi</option>
                                        <option value="Eskişehir Osmangazi Üniversitesi">Eskişehir Osmangazi Üniversitesi</option>
                                        <option value="Fatih Sultan Mehmet Üniversitesi">Fatih Sultan Mehmet Üniversitesi</option>
                                        <option value="Fatih Üniversitesi">Fatih Üniversitesi</option>
                                        <option value="Fırat Üniversitesi">Fırat Üniversitesi</option>
                                        <option value="Galatasaray Üniversitesi">Galatasaray Üniversitesi</option>
                                        <option value="Gazi Üniversitesi">Gazi Üniversitesi</option>
                                        <option value="Gaziantep Üniversitesi">Gaziantep Üniversitesi</option>
                                        <option value="Gaziosmanpaşa Üniversitesi">Gaziosmanpaşa Üniversitesi</option>
                                        <option value="Gebze Teknik Üniversitesi">Gebze Teknik Üniversitesi</option>
                                        <option value="Gedik Üniversitesi">Gedik Üniversitesi</option>
                                        <option value="Gediz Üniversitesi">Gediz Üniversitesi</option>
                                        <option value="Giresun Üniversitesi">Giresun Üniversitesi</option>
                                        <option value="Gülhane Askeri Tıp Akademisi">Gülhane Askeri Tıp Akademisi</option>
                                        <option value="Gümüşhane Üniversitesi">Gümüşhane Üniversitesi</option>
                                        <option value="Hacettepe Üniversitesi">Hacettepe Üniversitesi</option>
                                        <option value="Hakkari Üniversitesi">Hakkari Üniversitesi</option>
                                        <option value="Haliç Üniversitesi">Haliç Üniversitesi</option>
                                        <option value="Harran Üniversitesi">Harran Üniversitesi</option>
                                        <option value="Hasan Kalyoncu Üniversitesi">Hasan Kalyoncu Üniversitesi</option>
                                        <option value="Hava Harp Okulu">Hava Harp Okulu</option>
                                        <option value="Hitit Üniversitesi">Hitit Üniversitesi</option>
                                        <option value="Iğdır Üniversitesi">Iğdır Üniversitesi</option>
                                        <option value="Işık Üniversitesi">Işık Üniversitesi</option>
                                        <option value="Kadir Has Üniversitesi">Kadir Has Üniversitesi</option>
                                        <option value="Kafkas Üniversitesi">Kafkas Üniversitesi</option>
                                        <option value="Kahramanmaraş Sütçü İmam Üniversitesi">Kahramanmaraş Sütçü İmam Üniversitesi</option>
                                        <option value="Kanuni Üniversitesi">Kanuni Üniversitesi</option>
                                        <option value="Kara Harp Okulu">Kara Harp Okulu</option>
                                        <option value="Karabük Üniversitesi">Karabük Üniversitesi</option>
                                        <option value="Karadeniz Teknik Üniversitesi">Karadeniz Teknik Üniversitesi</option>
                                        <option value="Karamanoğlu Mehmetbey Üniversitesi">Karamanoğlu Mehmetbey Üniversitesi</option>
                                        <option value="Karatay Üniversitesi">Karatay Üniversitesi</option>
                                        <option value="Kastamonu Üniversitesi">Kastamonu Üniversitesi</option>
                                        <option value="Kilis 7 Aralık Üniversitesi">Kilis 7 Aralık Üniversitesi</option>
                                        <option value="Kocaeli Üniversitesi">Kocaeli Üniversitesi</option>
                                        <option value="Konya Gıda Tarım Üniversitesi">Konya Gıda Tarım Üniversitesi</option>
                                        <option value="Koç Üniversitesi">Koç Üniversitesi</option>
                                        <option value="Kırklareli Üniversitesi">Kırklareli Üniversitesi</option>
                                        <option value="Kırıkkale Üniversitesi">Kırıkkale Üniversitesi</option>
                                        <option value="MEF Üniversitesi">MEF Üniversitesi</option>
                                        <option value="Maltepe Üniversitesi">Maltepe Üniversitesi</option>
                                        <option value="Mardin Artuklu Üniversitesi">Mardin Artuklu Üniversitesi</option>
                                        <option value="Marmara Üniversitesi">Marmara Üniversitesi</option>
                                        <option value="Mehmet Akif Ersoy Üniversitesi">Mehmet Akif Ersoy Üniversitesi</option>
                                        <option value="Melikşah Üniversitesi">Melikşah Üniversitesi</option>
                                        <option value="Mersin Üniversitesi">Mersin Üniversitesi</option>
                                        <option value="Mevlana Üniversitesi">Mevlana Üniversitesi</option>
                                        <option value="Mimar Sinan Güzel Sanatlar Üniversitesi">Mimar Sinan Güzel Sanatlar Üniversitesi</option>
                                        <option value="Murat Hüdavendigar Üniversitesi">Murat Hüdavendigar Üniversitesi</option>
                                        <option value="Mustafa Kemal Üniversitesi">Mustafa Kemal Üniversitesi</option>
                                        <option value="Muğla Sıtkı Koçman Üniversitesi">Muğla Sıtkı Koçman Üniversitesi</option>
                                        <option value="Muş Alparslan Üniversitesi">Muş Alparslan Üniversitesi</option>
                                        <option value="Namık Kemal Üniversitesi">Namık Kemal Üniversitesi</option>
                                        <option value="Necmettin Erbakan Üniversitesi**">Necmettin Erbakan Üniversitesi**</option>
                                        <option value="Nevşehir Hacı Bektaş Veli Üniversitesi">Nevşehir Hacı Bektaş Veli Üniversitesi</option>
                                        <option value="Niğde Üniversitesi">Niğde Üniversitesi</option>
                                        <option value="Nişantaşı Üniversitesi">Nişantaşı Üniversitesi</option>
                                        <option value="Nuh Naci Yazgan Üniversitesi">Nuh Naci Yazgan Üniversitesi</option>
                                        <option value="İbn-u Haldun Üniversitesi">İbn-u Haldun Üniversitesi</option>
                                        <option value="İnönü Üniversitesi">İnönü Üniversitesi</option>
                                        <option value="İpek Üniversitesi**">İpek Üniversitesi**</option>
                                        <option value="İskenderun Teknik Üniversitesi">İskenderun Teknik Üniversitesi</option>
                                        <option value="İstanbul 29 Mayıs Üniversitesi">İstanbul 29 Mayıs Üniversitesi</option>
                                        <option value="İstanbul Arel Üniversitesi">İstanbul Arel Üniversitesi</option>
                                        <option value="İstanbul Aydın Üniversitesi">İstanbul Aydın Üniversitesi</option>
                                        <option value="İstanbul Bilgi Üniversitesi">İstanbul Bilgi Üniversitesi</option>
                                        <option value="İstanbul Bilim Üniversitesi">İstanbul Bilim Üniversitesi</option>
                                        <option value="İstanbul Esenyurt Üniversitesi">İstanbul Esenyurt Üniversitesi</option>
                                        <option value="İstanbul Gelişim Üniversitesi">İstanbul Gelişim Üniversitesi</option>
                                        <option value="İstanbul Kemerburgaz Üniversitesi">İstanbul Kemerburgaz Üniversitesi</option>
                                        <option value="İstanbul Kültür Üniversitesi">İstanbul Kültür Üniversitesi</option>
                                        <option value="İstanbul Medeniyet Üniversitesi">İstanbul Medeniyet Üniversitesi</option>
                                        <option value="İstanbul Medipol Üniversitesi">İstanbul Medipol Üniversitesi</option>
                                        <option value="İstanbul Rumeli Üniversitesi">İstanbul Rumeli Üniversitesi</option>
                                        <option value="İstanbul Sabahattin Zaim Üniversitesi">İstanbul Sabahattin Zaim Üniversitesi</option>
                                        <option value="İstanbul Teknik Üniversitesi">İstanbul Teknik Üniversitesi</option>
                                        <option value="İstanbul Ticaret Üniversitesi">İstanbul Ticaret Üniversitesi</option>
                                        <option value="İstanbul Üniversitesi">İstanbul Üniversitesi</option>
                                        <option value="İstanbul Şehir Üniversitesi">İstanbul Şehir Üniversitesi</option>
                                        <option value="İstinye Üniversitesi">İstinye Üniversitesi</option>
                                        <option value="İzmir Ekonomi Üniversitesi">İzmir Ekonomi Üniversitesi</option>
                                        <option value="İzmir Kâtip Çelebi Üniversitesi">İzmir Kâtip Çelebi Üniversitesi</option>
                                        <option value="İzmir Yüksek Teknoloji Enstitüsü">İzmir Yüksek Teknoloji Enstitüsü</option>
                                        <option value="İzmir Üniversitesi">İzmir Üniversitesi</option>
                                        <option value="Okan Üniversitesi">Okan Üniversitesi</option>
                                        <option value="Ondokuz Mayıs Üniversitesi">Ondokuz Mayıs Üniversitesi</option>
                                        <option value="Ordu Üniversitesi">Ordu Üniversitesi</option>
                                        <option value="Orta Doğu Teknik Üniversitesi">Orta Doğu Teknik Üniversitesi</option>
                                        <option value="Osmaniye Korkut Ata Üniversitesi">Osmaniye Korkut Ata Üniversitesi</option>
                                        <option value="Özyeğin Üniversitesi">Özyeğin Üniversitesi</option>
                                        <option value="Pamukkale Üniversitesi">Pamukkale Üniversitesi</option>
                                        <option value="Piri Reis Üniversitesi">Piri Reis Üniversitesi</option>
                                        <option value="Polis Akademisi">Polis Akademisi</option>
                                        <option value="Recep Tayyip Erdoğan Üniversitesi">Recep Tayyip Erdoğan Üniversitesi</option>
                                        <option value="Sabancı Üniversitesi">Sabancı Üniversitesi</option>
                                        <option value="Sakarya Üniversitesi">Sakarya Üniversitesi</option>
                                        <option value="Sanko Üniversitesi">Sanko Üniversitesi</option>
                                        <option value="Sağlık Bilimleri Üniversitesi">Sağlık Bilimleri Üniversitesi</option>
                                        <option value="Selahattin Eyyubi Üniversitesi">Selahattin Eyyubi Üniversitesi</option>
                                        <option value="Selçuk Üniversitesi">Selçuk Üniversitesi</option>
                                        <option value="Siirt Üniversitesi">Siirt Üniversitesi</option>
                                        <option value="Sinop Üniversitesi">Sinop Üniversitesi</option>
                                        <option value="Süleyman Demirel Üniversitesi">Süleyman Demirel Üniversitesi</option>
                                        <option value="Süleyman Şah Üniversitesi">Süleyman Şah Üniversitesi</option>
                                        <option value="Şifa Üniversitesi">Şifa Üniversitesi</option>
                                        <option value="Şırnak Üniversitesi">Şırnak Üniversitesi</option>
                                        <option value="TED Üniversitesi">TED Üniversitesi</option>
                                        <option value="TOBB Ekonomi ve Teknoloji Üniversitesi">TOBB Ekonomi ve Teknoloji Üniversitesi</option>
                                        <option value="Toros Üniversitesi">Toros Üniversitesi</option>
                                        <option value="Trakya Üniversitesi">Trakya Üniversitesi</option>
                                        <option value="Tunceli Üniversitesi">Tunceli Üniversitesi</option>
                                        <option value="Turgut Özal Üniversitesi">Turgut Özal Üniversitesi</option>
                                        <option value="Türk Alman Üniversitesi">Türk Alman Üniversitesi</option>
                                        <option value="Türk Hava Kurumu Üniversitesi">Türk Hava Kurumu Üniversitesi</option>
                                        <option value="Türkiye Uluslararası İslam, Bilim ve Teknoloji Üniversitesi">Türkiye Uluslararası İslam, Bilim ve Teknoloji Üniversitesi</option>
                                        <option value="Ufuk Üniversitesi">Ufuk Üniversitesi</option>
                                        <option value="Uludağ Üniversitesi">Uludağ Üniversitesi</option>
                                        <option value="Uluslararası Antalya Üniversitesi">Uluslararası Antalya Üniversitesi</option>
                                        <option value="Uşak Üniversitesi">Uşak Üniversitesi</option>
                                        <option value="Üsküdar Üniversitesi">Üsküdar Üniversitesi</option>
                                        <option value="Yalova Üniversitesi">Yalova Üniversitesi</option>
                                        <option value="Yaşar Üniversitesi">Yaşar Üniversitesi</option>
                                        <option value="Yeditepe Üniversitesi">Yeditepe Üniversitesi</option>
                                        <option value="Yeni Yüzyıl Üniversitesi">Yeni Yüzyıl Üniversitesi</option>
                                        <option value="Yüksek İhtisas Üniversitesi**">Yüksek İhtisas Üniversitesi**</option>
                                        <option value="Yüzüncü Yıl Üniversitesi">Yüzüncü Yıl Üniversitesi</option>
                                        <option value="Yıldırım Beyazıt Üniversitesi">Yıldırım Beyazıt Üniversitesi</option>
                                        <option value="Yıldız Teknik Üniversitesi">Yıldız Teknik Üniversitesi</option>
                                        <option value="Zirve Üniversitesi">Zirve Üniversitesi</option>
                                        <option value="Diğer">Diğer</option>
                                    </select>
                                </span>
                            </span>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir üniversite giriniz!
                                    </div>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="fakulte" style={{minHeight:"13px" ,ariaHidden:"false"}}>Fakülte Adı</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="fakulte" name="fakulte" required
                                    value={fakulte} 
                                    onChange= {(e) => setFakulte(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen geçerli bir fakülte giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="bolum" style={{minHeight:"13px" ,ariaHidden:"false"}}>Bölüm Adı</label>
                                </div>
    
                                <div className="col-3">
                                <span className="form-address-line form-address-country-line jsTest-address-lineField">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}>
                                            <select className="form-select" id="bolum" name="bolum" required
                                    value={bolum} 
                                    onChange= {(e) => setBolum(e.target.value)}>
                                <option value="">Lütfen Seçiniz</option>

                                <optgroup label="2 Yıllık Ön Lisans Programları"> 
                                <option value="İşletme">İşletme</option> 
                                <option value="Bilgisayar Programlama">Bilgisayar Programlama</option> 
                                <option value="Muhasebe">Muhasebe</option> 
                                <option value="Elektronik Teknolojisi">Elektronik Teknolojisi</option> 
                                <option value="Grafik Tasarımı">Grafik Tasarımı</option> 
                                <option value="Web Tasarımı">Web Tasarımı</option> 
                                <option value="Halkla İlişkiler">Halkla İlişkiler</option> 
                                <option value="Turizm ve Otel İşletmeciliği">Turizm ve Otel İşletmeciliği</option> 
                                <option value="Çocuk Gelişimi">Çocuk Gelişimi</option> 
                                <option value="Hemşirelik">Hemşirelik</option> 
                                <option value="Adalet Meslek Yüksekokulu">Adalet Meslek Yüksekokulu</option> 
                                <option value="Diş Protez Teknolojisi">Diş Protez Teknolojisi</option> 
                                <option value="Radyo ve Televizyon Teknolojisi">Radyo ve Televizyon Teknolojisi</option> 
                                <option value="Fotoğrafçılık ve Kameramanlık">Fotoğrafçılık ve Kameramanlık</option> 
                                <option value="Dil Eğitimi">Dil Eğitimi</option> 
                                </optgroup> 

                                <optgroup label="4 Yıllık Lisans Programları"> 
                                <option value="İşletme">İşletme</option> 
                                <option value="Hukuk">Hukuk</option> 
                                <option value="Mühendislik">Mühendislik</option> 
                                <option value="Tıp">Tıp</option> 
                                <option value="Diş Hekimliği">Diş Hekimliği</option> 
                                <option value="Eczacılık">Eczacılık</option> 
                                <option value="Psikoloji">Psikoloji</option> 
                                <option value="Sosyoloji">Sosyoloji</option> 
                                <option value="İletişim">İletişim</option> 
                                <option value="Bilgisayar Bilimleri">Bilgisayar Bilimleri</option> 
                                <option value="Matematik">Matematik</option> 
                                <option value="Fizik">Fizik</option> 
                                <option value="Kimya">Kimya</option> 
                                <option value="Biyoloji">Biyoloji</option> 
                                <option value="İngilizce">İngilizce</option> 
                                <option value="Türk Dili ve Edebiyatı">Türk Dili ve Edebiyatı</option> 
                                <option value="Tarih">Tarih</option> 
                                </optgroup> 
                             
                                <optgroup label="6 Yıllık Üniversite Bölümleri"> 
                                <option value="Tıp">Tıp</option>
                                <option value="Diş Hekimliği">Diş Hekimliği</option>
                                <option value="Veterinerlik">Veterinerlik</option>
                                <option value="Eczacılık">Eczacılık</option>
                                <option value="Optometri">Optometri</option>
                                <option value="Ortez ve Protez">Ortez ve Protez</option>
                                <option value="Fizyoterapi ve Rehabilitasyon">Fizyoterapi ve Rehabilitasyon</option>
                                <option value="Dil ve Konuşma Terapisi">Dil ve Konuşma Terapisi</option>
                                <option value="Sağlık Yönetimi ve Organizasyonu">Sağlık Yönetimi ve Organizasyonu</option>
                                </optgroup>

                                <optgroup label="8 Yıllık Üniversite Bölümleri"> 
                                <option value="tip">Tıp Fakültesi ve Tıbbi Uzmanlık Programları (örneğin Kardiyoloji, Nöroloji, Radyoloji, Cerrahi vs.)</option> 
                                <option value=" Diş Hekimliği">Diş Hekimliği Fakültesi ve Diş Hekimliği Uzmanlık Programları</option> 
                                <option value="Veterinerlik">Veterinerlik Fakültesi ve Veteriner Uzmanlık Programları</option> 
                                <option value="Hukuk">Hukuk Fakültesi ve Avukatlık Stajı Programları</option> 
                                <option value="Psikoloji">Psikoloji Fakültesi ve Psikolojik Danışmanlık ve Psikoterapi Uzmanlık Programları</option> 
                                <option value="mimarlik">Mimarlık Fakültesi ve Mimarlık Uzmanlık Programları</option> 
                                </optgroup> 
                                <option value="Diğer">Diğer</option>
                             </select>
                             </span>
                            </span>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="mezuniyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>Mezuniyet Durumu</label>
                                </div>
    
                                <div className="col-3">
                                    <span className="form-address-line form-address-country-line jsTest-address-lineField ">
                                        <span className="form-sub-label-container" style={{verticalAlign:"top", size:"23"}}
                                           value={mezuniyet} 
                                           onChange= {(e) => setMezuniyet(e.target.value)}>
                                            <select name="nationality" className="form-select" id="mezuniyet" required>
                                                <option value="">Lütfen Seçiniz</option>
                                                <option value="Mezun">Mezun</option>
                                                <option value="Devam Ediyor">Devam Ediyor</option>
                                                <option value="Devam Etmiyor">Devam Etmiyor</option>
                                            </select>
                                            <div className="invalid-feedback">
                                        Lütfen mezuniyet durumunuzu seçiniz!
                                    </div>
    
                                        </span>
                                    </span>
                                </div>
                            </div>
                            
                            <div className="row p-2">
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="MezuniyetTarih" style={{minHeight:"13px" ,ariaHidden:"false"}}>Mezuniyet Tarihi</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="date" className="form-control" id="MezuniyetTarih" name="MezuniyetTarih" required
                                    value={mezuniyetTarih} 
                                    onChange= {(e) => setMezuniyetTarih(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen en son mezun olduğunuz tarihi seçiniz!
                                    </div>
                                </div>
    
                                <div className="col-3">
                                    <label className="form-sub-label" for="not" style={{minHeight:"13px" ,ariaHidden:"false"}}>Not Ortalaması</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="text" className="form-control" id="not" name="not" required
                                    value={not} 
                                    onChange= {(e) => setNot(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen not ortalamanızı giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="dokuman" name="dokuman"><b>Doküman Bilgileri</b></label></h4>                <hr></hr>
    
                            </div>
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="cv" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Özgeçmişinizi pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="cv" name="cv" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={cv} 
                                        onChange= {(e) => setCv(e.target.value)}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                        

                                    </div>
                                </div>
    
                            </div>
                            
    
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="niyet" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Niyet Mektubunuzu pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="niyet" name="niyet" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={niyet} 
                                        onChange= {(e) => setNiyet(e.target.value)}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>
                            
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="diploma" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Diplomanızı pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="diploma" name="diploma" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={diploma} 
                                        onChange= {(e) => setDiploma(e.target.value)}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>

                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="ingYetkin" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen İngilizce Yetkinlik Belgenizi pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="ingYetkin" name="ingYetkin" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={ingYetkin} 
                                        onChange= {(e) => setIngYetkin(e.target.value)}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="ikametgah" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen İkametgahınızı pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="ikametgah" name="ikametgah" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                       value={ikametgah} 
                                       onChange= {(e) => setIkametgah(e.target.value)}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
                            </div>
                            
    
                            <div className="row p-2">
    
                                <div className="col-6">
                                    <label className="form-sub-label" for="pasaport" style={{minHeight:"13px" ,ariaHidden:"false"}}>Lütfen Pasaportunuzu pdf olarak yükleyiniz.</label>
                                </div>
    
                                <div className="col-6">
                                    <div className="input-group">
                                        <input type="file" className="form-control" id="pasaport" name="pasaport" aria-describedby="inputGroupFileAddon04" aria-label="Upload" required
                                        value={pasaport} 
                                        onChange= {(e) => setPasaport(e.target.value)}/>
                                        <button className="btn btn-outline-secondary" type="button" id="btnUpload" name="btnUpload">Yükle</button>
                                    </div>
                                </div>
    
    
    
                            </div>
    

                            <div className="col-12 text-center p-3">
                                <h4><label className="form-label form-label-left form-label-auto" id="iletisim"><b>İletişim Bilgileri</b></label></h4>
                                <hr></hr>
                            </div>
                            <div className="row p-2">
        
                                <div className="col-3">
                                    <label className="form-sub-label" for="telefon" style={{minHeight:"13px" ,ariaHidden:"false"}}>Telefon Numarası</label>
                                </div>
                                <div className="col-3">
                                    <input type="tel" className="form-control" id="telefon" name="telefon" required
                                    value={telefon} 
                                    onChange= {(e) => setTelefon(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen telefon numaranızı başında ülke ve alan kodu olmadan yedi haneli olarak giriniz!
                                    </div>
                                </div>
                                <div className="col-3">
                                    <label className="form-sub-label" for="email" style={{minHeight:"13px" ,ariaHidden:"false"}}>E-Posta Adresi</label>
                                </div>
    
                                <div className="col-3">
                                    <input type="email" className="form-control" id="email" name="email" required
                                    value={email} 
                                    onChange= {(e) => setEmail(e.target.value)}/>
                                    <div className="invalid-feedback">
                                        Lütfen e-mail adresinizi mail formatına uygun olarak (örn: example@mail.com) giriniz!
                                    </div>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label for="CheckBoxList2">
                                    <input id="CheckBoxList2" type="checkbox" name="CheckBoxList2" value="1" required/> <a href="http://www.khas.edu.tr/2973/kvkk-aydinlatma-metni" target="blank">Aydınlatma Metni</a>’ni okudum ve Kadir Has Üniversitesi (Üniversite) tarafından, 6698 sayılı Kişisel Verilerin Korunması Kanunu ile Regulation (EU) 2016/679 - General Data Protection Regulation uyarınca, işleme amacı ile bağlantılı, sınırlı ve ölçülü olacak şekilde, onayıma istinaden, Üniversite bursuna başvuru yapabilmem amacı ile alınan kişisel verilerimin saklanmasına ve sair şekillerde işlenmesine, yine aynı amaçlarla gerektiğinde Üniversite çalışanları ile ve/veya Üniversite eğitimleri/çalışmaları kapsamındaki iş ortakları ile paylaşılmasına ve Learn Sistemi’nde saklanmasına rıza/onay veriyorum.
                                </label>
                            </div>
                            
                            <div class="row justify-content-center mt-5 mb-5" >
                                        <div>
                                            <center>
                                       <button class="btn btn-dark" style={{fontSize:"15px",height:"20%",width:"20%",fontFamily:"monospace"}} type="submit">Başvur</button> 
                                            </center>
                                        </div>
                            </div>  
                        </form>

                        {error && <p style={{color: 'red'}}> {error} </p>}
                        {success && <p style={{color: 'green'}}> {success} </p>}  

                    </div>
                </div>
            </center>
        </div>                      
</>
    );

}

export default BasvuruFormu;
