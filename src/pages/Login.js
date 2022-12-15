import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setUser} from "../store/auth";
import {useLocation, useNavigate} from "react-router-dom";

const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const [logininfo, setlogininfo] = useState({
        username : "",
        password : ""
    });
    const girisyap = (e) => {
        dispatch(setUser(logininfo));
        navigate(location.state?.return_url || "/app",{
            replace : true
        });
    }

    return (
        <div className="w-full flex flex-col items-center justify-center bg-hascoding w-full h-full gap-3">
            <h1 className="text-xl font-bold text-white">Giriş Yap</h1>
            <div className="flex flex-col gap-2">
                <input type="text" id="username" name="username" onChange={(e)=>{
                    setlogininfo({...logininfo, username : e.target.value});
                }} placeholder="Kullanıcı Adı" className="p-2 rounded-md"/>
                <input type="password" id="password" name="password" onChange={(e)=>{
                    setlogininfo({...logininfo, password : e.target.value});
                }} placeholder="Şifre" className="p-2 rounded-md"/>
            </div>
            <button className="bg-white p-2 rounded-md" onClick={girisyap}>Giriş yap</button>
            <div className="flex flex-col gap-2 text-white">
                Herhangi bir kullanıcı adı ve şifre ile giriş yapabilirsiniz.
            </div>
            <p className="text-2xl text-white"><span className="font-bold">./src/pages/Login.js</span> Dosyasını Değiştir.</p>
        </div>
    );
};

export default Login;
