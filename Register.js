import React, {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

   const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== passRepeat){
            setError("Şifreler eşleşmiyor, lütfen tekrar deneyiniz!");
            return;
        }


        try{

            const response = await axios.post('http://localhost:3001/kayit', {
                    email,
                    password
            });

            if(response.status === 200){
                setSuccess('Kaydınız başarıyla oluşturuldu. Lütfen giriş yapınız.');
                setEmail('');
                setPassword('');
                setPassRepeat('');
                setError('');

                setTimeout( () => 
                {
                navigate('/');
                },2000);

            }else{
                setError('Üzgünüz, kayıt oluşturmayla ilgili bir sorun oluştu, lütfen tekrar deneyiniz.');
            }


        }catch (err){
            setError('Üzgünüz, isteğinizle ilgili bir sorun oluştu, lütfen daha sonra tekrar deneyiniz.');
        } 
    }

    return (
        <>
             <center>

<h1 class="neonText">
    
<form onSubmit={handleSubmit}>
    <div class="row" name="kayitol" id="kayitol">
        <div>
        <div class="form-signin was-validated" novalidate style={{backgroundColor:"white",marginLeft:"30%",marginRight:"30%",width:"auto",borderRadius:"20px",marginTop:"2%",padding:"2%"}}>
                <h2 class=" font-weight-normal" style={{color:"black"}}>KAYIT</h2><hr></hr>

                <input 
                type="email" 
                placeholder="E-Mail Adresiniz" 
                style={{borderColor:"black"}} required 
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                value={email} 
                onChange= {(e) => setEmail(e.target.value)}/>
                
                <div class="invalid-feedback" style={{fontSize:"13px",color:"black"}}>Geçerli bir e-posta adresi girilmelidir, örneğin; ornek@gmail.com</div><br></br>

                <input 
                type="password" 
                placeholder="Şifreniz" 
                style={{borderColor:"black",marginTop:"3%"}} 
                value={password}
                onChange= {(e) => setPassword(e.target.value)}
                minLength = "6"
                required/>
                
                <div class="checkbox mb-3"></div>

                <input 
                type="password" 
                placeholder="Şifreniz (Tekrar)" 
                style={{borderColor:"black"}}
                required
                value={passRepeat}
                onChange= {(e) => setPassRepeat(e.target.value)}
                minLength = "6"/>
                
                <div class="invalid-feedback" style={{fontSize:"13px",color:"black"}}>Şifreler aynı ve en az 6 karakter olmalıdır, en az bir küçük harf, bir büyük harf, en az bir rakam ve en az bir sembol içermelidir.</div>
                
                <div class="checkbox mb-3" style={{color:"black",fontSize:"15px"}}>
                    <br></br><label>
                        <input type="checkbox" value="remember-me"/> Beni Hatırla
                    </label>
                </div> <button type="submit" className="w-8 btn btn-lg btn-dark mt-2"style={{fontSize:"15px",width:"35%",fontFamily:"monospace"}}>Hesap Oluştur</button>
            </div>
            
            
        </div>
    </div>
    


</form>

</h1>   
            {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}

            <p style={{margin:"2%" ,marginBottom:"6%"}}>Hesabınız var mı? <Link style={{color:"black"}} to="/">Giriş Yap</Link></p>
         
</center> 
        </>
    );
}

export default Register;