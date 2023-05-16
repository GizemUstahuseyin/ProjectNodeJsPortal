import React from "react";
import '../style.css';
import { useState, useEffect } from 'react';
import Sidebar from './Sidebar.js';


function Anasayfa(props) {
  if(sessionStorage.getItem("oturum") != 1){
    document.location.href="/";
    }

//Kullanıcının başvuru yapması için kalan süreyi gösteri usestate örneği
  const [count, setCount] = useState(30);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount(count => count - 1);
    }, 86400000);
    return () => clearInterval(timer);
  }, []);

  return (
<>
            <div className="">
                <Sidebar 
                    anasayfa_active="light" 
                    anasayfa_disable="disabled" />
            </div>
            
            <center>

            <div>
      {count === 0 ? (
        <h3>Başvurumuz Sona Ermiştir!</h3>
      ) : (
        <h3 style={{marginLeft:"12%",marginRight:"12%",marginTop:"2%",textAlign:"center",fontFamily: "Raleway, sans-serif"}}>
          BAŞVURU YAPMAK İÇİN <b style={{fontSize:"40px"}}>{count}</b> GÜN KALDI
        </h3>
      )}
    </div>
  
<div class="container">
<div className="wrapper row" style={{marginLeft:"12%",marginTop:"4%",marginBottom:"10%",textAlign:"center" ,marginRight:"12%",}}>
  <p style={{fontWeight:"bold",fontSize:"25px",textDecoration:"underline"}}>PROGRAM HAKKINDA</p>
  <p>Bu program Kadir Has Üniversitesi'nin bünyesinde kullanıcıların başvuru yapabilmesi adına hazırlanmıştır. Program'a başvuru yapabilmek için lütfen kayıt olunuz. Kayıt ve giriş işlemlerinizin ardından açılacak olan Başvurular sayfasından başvuru yapabilirsiniz...</p>
  <p>Erasmus Programı, yükseköğretim kurumlarının iş birliğini, öğrenci ve akademisyenlerin kısa süreli olarak bu iş birliği çerçevesinde farklı ülke ve üniversitelerde deneyim kazanmasını teşvik eden Avrupa Birliği projesi.</p>
<p>Program, 1987 yılında bir öğrenci hareketlilik programı olarak Erasmus ismiyle başlamış; eğitimin diğer alanlarını ve gençliği de kapsayarak sürekli gelişmiş ve yedişer yıllık dönemlerle "Socrates", "Leonardo da Vinci", "Hayatboyu Öğrenme" ve "Gençlik" adı altında uygulanmıştır. Program 2014-2020 arsında 'Erasmus+ altında yapılandı.</p>
<p>Avrupa Birliği EU2020 Stratejisi ile birlikte eğitim ve öğretime daha çok önem vermektedir. Erasmus+, yurt dışında eğitim alma ve çalışma yapma fırsatları sayesinde insanların daha fazla ve daha iyi beceriler kazanmalarına yardım etmeyi amaçlıyor. Erasmus+ Programı eğitim, öğretim, öğrenim, staj, gönüllü çalışmalar, gençlik ve spor alanlarında yükseköğretimde kaliteyi arttırmak amacı ile uygulanmaya başlanmıştır. Erasmus program ülkelerinin hepsi Ulusal Ajans tarafından sağlanan finansal destek hibesi alabilirler. Bu alanlarda Türkiye’de Avrupa Birliği Eğitim ve Gençlik Programları Merkezi Başkanlığı, Ulusal Ajans ile hibe desteği sağlamaktadır.</p>
</div>
</div></center>

</>

  );
}


export default Anasayfa;