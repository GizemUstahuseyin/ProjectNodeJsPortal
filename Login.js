import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './style.css';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            const response = await axios.post('http://localhost:3001/', 
            {
                email,
                password
            }
            );
            
            if(response.status === 200)
            {
                console.log(response.data.message);
                if(response.data.message === "1")
                {
                    
                    sessionStorage.setItem("id",response.data.id);
                    sessionStorage.setItem("oturum", 1); 
                    setSuccess('Girişiniz başarıyla gerçekleşti. Yönlendiriliyorsunuz...')
                    
                    setTimeout( () => 
                    {
                    navigate('/portal');
                    },2000);
                             
                }
            
                else
                {
                    setError('Kullanıcı adı veya şifre hatalı, lütfen tekrar deneyiniz!');
                }
            }

            }   
                catch(err)
                {
                    setError('Üzgünüz, isteğinizle ilgili bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.')
                }

    }


    return (
             <center>

<h1 class="neonText">
    <div>
<form onSubmit={handleSubmit} >
    <div class="row" name="giris" id="giris">
        
            <div class="form-signin was-validated" novalidate style={{backgroundColor:"white",marginLeft:"30%",marginRight:"30%",width:"40%",borderRadius:"20px",marginTop:"2%",padding:"2%"}}>
                <h2 class=" font-weight-normal" style={{color:"black"}}>GİRİŞ</h2><hr></hr><br></br>

                <input 
                type="email"  
                placeholder="E-Mail Adresiniz" 
                style={{borderColor:"black"}} required 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={email} 
                onChange= {(e) => setEmail(e.target.value)}/>
                 
                 <div class="invalid-feedback" style={{fontSize:"13px",color:"black"}}>Geçerli bir e-posta adresi girilmelidir, örneğin; ornek@gmail.com</div><br></br>

                <input type="password" placeholder="Şifreniz" style={{borderColor:"black",marginTop:"3%"}} 
                value={password}
                onChange= {(e) => setPassword(e.target.value)} required/>                        

                <div class="checkbox mb-3" style={{color:"black",fontSize:"15px"}}>
                            <br></br><label>
                                <input type="checkbox" value="remember-me"/> Beni Hatırla
                            </label>
                        </div>
            

        <center><button className=" btn btn-dark" 
        style={{fontSize:"15px",width:"35%",fontFamily:"monospace"}} 
        type="submit">Giriş Yap</button></center>
        
        <br></br></div>
       
       
    </div>
 </form> 
 </div>   
</h1>
{error && <p style={{color:'red'}}> {error} </p> }
            {success && <p style={{color:'green'}}> {success} </p> }
            <p style={{marginBottom:"5%"}}>
                Hesabınız yok mu? <Link style={{color:"black"}} to="/kayit">Kayıt Ol!</Link>
            </p>
</center>
 
            
    );
}

export default Login;