import axios from 'axios';

async function SignOut(navigate){

    const id = sessionStorage.getItem("id");

    try{

        const response = await axios.post('http://localhost:3001/signout', 
                {id}
        );

        if(response.status === 200){
            sessionStorage.setItem("oturum", 0); 
            navigate("/")
        }else{
            alert('Şuan çıkış işleminiz gerçekleştirilemiyor, lütfen daha sonra tekrar deneyiniz.');
        }


    }catch (err){
        console.error(err);
    }

}
export default SignOut;