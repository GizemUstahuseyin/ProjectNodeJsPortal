import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import Sidebar from './Sidebar.js';

function Password() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passnew, setPassnew] = useState('');
    const [passnewtekrar, setPassnewtekrar] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => { 
               e.preventDefault();

        if(passnew !== passnewtekrar){
            setError("Şifreler eşleşmiyor, lütfen tekrar deneyiniz!");
            return;
        }


        try{

            const response = await axios.post("http://localhost:3001/portal/password", {
                email,
                    password,
                    passnew,
                    passnewtekrar
            });

            if(response.status === 200){
                setSuccess('Güncelleme işleminiz başarıyla oluşturuldu. Lütfen giriş yapınız.');
                setEmail('');
                setPassword('');
                setPassnew('');
                setPassnewtekrar('');
                setError('');

                setTimeout( () => 
                {
                navigate('/');
                },2000);

            }else{
                setError('Üzgünüz, şifre güncellemeyle ilgili bir sorun oluştu, lütfen tekrar deneyiniz.');
            }


        }catch (err){
            setError('Üzgünüz, isteğinizle ilgili bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.');
        } 
    }

    return (
        <>
        <div className="col-2">
                <Sidebar 
                    sifre_active="light" 
                    sifre_disable="disabled" />
            </div>
             <center>
             

<h1 class="neonText">
    
<form onSubmit={handleSubmit}>
    <div class="row" name="sifre" id="sifre">
        <div>
 <div class="form-signin was-validated" novalidate style={{backgroundColor:"white",marginLeft:"30%",marginRight:"30%",width:"40%",borderRadius:"20px",marginTop:"5%",padding:"2%"}}>                <h2 class=" font-weight-normal" style={{color:"black"}}>ŞİFRE GÜNCELLEME</h2><hr></hr>
 <input 
                type="email"  
                placeholder="E-Mail Adresiniz" 
                style={{borderColor:"black"}} required 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={email} 
                onChange= {(e) => setEmail(e.target.value)}/>
                <input 
                type="password" 
                placeholder="Mevcut Şifreniz" 
                style={{borderColor:"black",marginTop:"3%"}} 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                minLength = "6"
                required/>

                <input 
                type="password" 
                placeholder="Yeni Şifreniz" 
                style={{borderColor:"black",marginTop:"3%"}} 
                value={passnew}
                onChange= {(e) => setPassnew(e.target.value)}
                minLength = "6"
                required/>
                
                <div class="checkbox mb-3"></div>

                <input 
                type="password" 
                placeholder="Yeni Şifreniz (Tekrar)" 
                style={{borderColor:"black"}}
                required
                value={passnewtekrar}
                onChange= {(e) => setPassnewtekrar(e.target.value)}
                minLength = "6"/>
                
                <div class="invalid-feedback" style={{fontSize:"13px",color:"black"}}>Şifreler aynı ve en az 6 karakter olmalıdır, en az bir küçük harf, bir büyük harf, en az bir rakam ve en az bir sembol içermelidir.</div>
                
                <button type="submit" className="w-8 btn btn-lg btn-dark mt-2"style={{fontSize:"15px",width:"35%",fontFamily:"monospace"}}>Şifre Güncelle</button>
            </div>
             
            
        </div>
    </div>
    


</form>

</h1>   
            {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}
<div style={{marginBottom:"10%"}}></div>
</center> 
        </>
    );
}

export default Password;