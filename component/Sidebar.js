    import SignOut from '../functions/SignOut.js';
    import { Link ,useNavigate } from "react-router-dom";
    import React, { useState } from 'react';
    import '../style.css';
    import { BsBellFill } from "react-icons/bs";
    import { FaPaste } from "react-icons/fa";
    import { FaHome } from "react-icons/fa";
    import { CgPhone } from "react-icons/cg";
    import { TfiAngleDoubleRight } from "react-icons/tfi";
    import { MdContentPasteSearch } from "react-icons/md";
    import { MdOutlineContentPasteGo } from "react-icons/md";
    import { FaSignOutAlt } from "react-icons/fa";
    import { RiLockPasswordFill } from "react-icons/ri";
    import {  useEffect } from 'react';


function Sidebar(props){   
        const navigate = useNavigate();

        const [isOpen, setIsOpen] = useState(false);
    
        const toggleSidebar = () => {
          setIsOpen(!isOpen);
        }
    
        const [count, setCount] = useState(30);
          
        useEffect(() => {
          const timer =
            count > 0 && setInterval(() => setCount(count - 1), 86400000);
          return () => clearInterval(timer);
        }, [count]);
    return(
        <>
             
               <div className={`sidebar bg-dark  ${isOpen ? 'open' : ''}` }>
               
                   <ul className="nav flex-column mb-auto" style={{textAlign:"end"}}>
                   <li style={{color:"white",  borderBottom: "none"}}><button type="button" className="btn btn-dark" style={{fontSize: "20px"}} onClick={toggleSidebar}><TfiAngleDoubleRight/></button></li>
                       
                        <li className="nav-item">
                            <Link className={`nav-link ${props.anasayfa_active} ${props.anasayfa_disable}`} 
                                    aria-current="page" 
                                    style={{color:"slategray"}} to="/portal/Anasayfa"
                                    >Anasayfa<FaHome style={{fontSize: "20px", marginLeft:"25px"}}/></Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className={`nav-link ${props.form_active} ${props.form_disable}`} 
                                    aria-current="page" 
                                    style={{color:"slategray"}} to="/portal/BasvuruFormu"
                                    >Başvurular<FaPaste style={{fontSize: "20px" , marginLeft:"25px"}}/></Link>
                        </li>
                      
                        <li className="nav-item">
                            <Link className={`nav-link ${props.gor_active} ${props.gor_disable}`} 
                                    aria-current="page" 
                                    style={{color:"slategray"}} to="/portal/BasvuruGoruntule"
                                    >Başvurularım<MdContentPasteSearch style={{fontSize: "20px" , marginLeft:"25px"}}/></Link>
                        </li>

                        <li className="nav-item">
                            <Link className={`nav-link ${props.gor_active} ${props.gor_disable}`} 
                                    aria-current="page" 
                                    style={{color:"slategray"}} to="/portal/BasvuruGuncelle"
                                    >Başvuru Güncelle<MdOutlineContentPasteGo style={{fontSize: "20px" , marginLeft:"15px"}}/></Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className={`nav-link ${props.duyurular_active} ${props.duyurular_disable}`} 
                                    aria-current="page" 
                                    style={{color:"slategray"}} to="/portal/Duyurular"
                                    >Duyurular<BsBellFill style={{fontSize: "20px" , marginLeft:"25px"}}/></Link>
                        </li>
                       
                        <li className="nav-item">
                            <Link className={`nav-link ${props.iletisim_active} ${props.iletisim_disable}`} 
                                    aria-current="page" 
                                    style={{color:"slategray"}} to="/portal/Iletisim"
                                    >
                                        İletişim<CgPhone style={{fontSize: "20px", marginLeft:"25px"}}/></Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${props.sifre_active} ${props.iletisim_disable}`} 
                                    aria-current="page" 
                                    style={{color:"slategray"}} to="/portal/password"
                                    >
                                        Şifre Güncelle<RiLockPasswordFill style={{fontSize: "20px", marginLeft:"15px"}}/></Link>
                        </li>

                        <ul className="mb-5 ms-0">
                             <li style={{color:"white"}}>
                                <a className="dropdown-item" href="#" onClick={() => SignOut(navigate)}>Çıkış Yap<FaSignOutAlt style={{fontSize:"20px",marginLeft:"14%",marginRight:"9%"}}/></a>
                             </li>
                       
                        </ul> 
                      </ul>
                 </div>
        </>
    );


}

export default Sidebar;