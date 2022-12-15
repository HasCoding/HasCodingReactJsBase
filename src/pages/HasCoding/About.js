import React from 'react';
import {NavLink} from "react-router-dom";

const About = () => {

    const user = JSON.parse(localStorage.getItem("user"));


    return (
        <div className="w-full h-full justify-center items-center bg-hascoding flex flex-col gap-2">
            <div className="text-white">Uygulama Hakkında sayfası</div>
            <div className="text-white">Hoşgeldin <span className="font-bold">{user.username}</span></div>
            <img src="/logo.png" width="350px"/>
            <div className="flex flex-row gap-2">
                <NavLink className="text-white border-[1px] rounded-md p-1 cursor-pointer" to={"/app/"}>Ana Sayfa</NavLink>
                <NavLink className="text-red-200 border-[1px] border-red-600 rounded-md p-1 cursor-pointer" to={"/auth/logout"}>Çıkış Yap</NavLink>
            </div>
            <p className="text-2xl text-white"><span className="font-bold">./src/pages/HasCoding/About.js</span> Dosyasını Değiştir.</p>
        </div>
    );
};

export default About;
