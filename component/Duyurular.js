import React from "react";
import Sidebar from './Sidebar.js';

function Duyurular(props) {
    if(sessionStorage.getItem("oturum") != 1){
        document.location.href="/";
        }
  return(
    <>
    <div className="row">
        
            <div className="col-2">
                <Sidebar 
                    duyurular_active="light" 
                    duyurular_disable="disabled" />
            </div>
            <div className="col-10">
            <center>
        <div className="" style={{marginTop:"3%"}}>
    <div className="row align-items-md-stretch px-5">
    <div className="col-md-4">
        <div className="h-100 p-5 bg-light rounded-3" name="duyuruEkYerlestirme" id="duyuruEkYerlestirme" style={{borderColor:"white",borderStyle: "solid"}}>
            <h3 style={{color:"black"}}>Erasmus Programı 2023-2024 Başvurusu Hakkında</h3>
            <h5 style={{color:"black"}}>22 Mart 2023</h5>
            <p><a href="Kayit" className="link-dark">Başvuru yapmak için,kayıt olmalısınız. Kayıt olmak için lütfen tıklayın!</a></p>
        </div>
    </div>
    

    <div className="col-md-4">
        <div className="h-100 p-5 bg-dark rounded-3" name="duyuruMuhendislikFinalTakvimi" id="duyuruMuhendislikFinalTakvimi" style={{borderColor:"white",borderStyle: "solid"}}>
            <h3>Mühendislik ve Doğa Bilimleri Fakültesi 2022-2023 Güz Dönemi Final Takvimi</h3>
            <h5>9 Aralık 2022</h5>
            <p><a href="https://www.khas.edu.tr/wp-content/uploads/2022/12/FENS-2022-2023-Fall-Semester-Final-Exams-Schedule-1.pdf" className="link-light"> MDBF 2022-2023 Güz Dönemi Final Takvimi’ni incelemek için tıklayınız.</a></p>
        </div>
    </div>
 <div className="col-md-4" name="duyuruSosyalBilFinalTakvimi" id="duyuruSosyalBilFinalTakvimi">
        <div className="h-100 p-5 text-bg-light rounded-3" style={{borderColor:"white",borderStyle: "solid"}}>
            <h3>İktisadi, İdari ve Sosyal Bilimler Fakültesi 2022-2023 Güz Dönemi Final Takvimi</h3>
            <h5>8 Aralık 2022</h5>
            <p><a href="https://www.khas.edu.tr/wp-content/uploads/2022/12/IISBF-2022-2023-Guz-Final-Programi-web.xlsx" className="link-dark">İİSBF 2022-2023 Güz Dönemi Final Takvimi’ni incelemek için tıklayınız.</a></p>
        </div>
    </div>
</div>

<div className="row align-items-md-stretch px-5 mt-5 mb-5">
   

    <div className="col-md-4">
        <div className="h-100 p-5 text-bg-dark rounded-3" name="duyuruİletisimFakFinalTakvimi" id="duyuruİletisimFakFinalTakvimi" style={{borderColor:"white",borderStyle: "solid"}}>
            <h3>İletişim Fakültesi 2022-2023 Güz Dönemi Final Takvimi</h3>
            <h5>24 Kasım 2022</h5>
            <p><a href="https://www.khas.edu.tr/wp-content/uploads/2022/11/ILEF-2022-2023-Guz-Donemi-Final-Sinav-Programi.xls" className="link-light">İletişim Fakültesi 2022-2023 Güz Dönemi Final Takvimi’ni incelemek için tıklayınız.</a></p>
        </div>
    </div>

    <div className="col-md-4">
        <div className="h-100 p-5 text-bg-light rounded-3" name="duyuruSanatFakFinalTakvimi" id="duyuruSanatFakFinalTakvimi" style={{borderColor:"white",borderStyle: "solid"}}>
            <h3>Sanat ve Tasarım Fakültesi 2022-2023 Güz Dönemi Final Takvimi</h3>
            <h5>22 Kasım 2022</h5>
            <p><a href="https://www.khas.edu.tr/wp-content/uploads/2022/12/STF-2022-2023-GUZ-DONEMI-FINAL-TAKVIMI.xlsx" className="link-dark">Sanat ve Tasarım Fakültesi 2022-2023 Güz Dönemi Final Takvimi’ni incelemek için tıklayınız.</a></p>
        </div>
    </div>

      <div className="col-md-4">
        <div className="h-100 p-5 text-bg-dark rounded-3" name="duyuruYatayGecis" id="duyuruYatayGecis" style={{borderColor:"white",borderStyle: "solid"}}>
            <h3>2022-2023 Bahar Yarıyılı Kurum İçi Yatay Geçiş Sonuçları</h3>
            <h5>23 Ocak 2023</h5>
            <p><a href="https://yataygecis.khas.edu.tr/sonuc" className="link-light"> 2022-2023 Bahar Yarıyılı kurum için yatay geçiş sonuçlarını incelemek için lütfen tıklayınız.</a></p>
        </div>
    </div>
    </div>
  
</div>
</center>
</div>
</div>
</>
  );
}

export default Duyurular;