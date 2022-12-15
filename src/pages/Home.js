import React from 'react';
import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div className="bg-hascoding text-white items-center flex flex-col w-full h-full justify-center">
            <div className="w-1/2 flex flex-col items-center justify-center gap-2">
                <h1 className="text-5xl font-bold">HasCoding ReactJS Base</h1>
                <img src="/logo.png" alt="HasCoding Logo" width="350px"/>
                <p className="text-2xl"><span className="font-bold">./src/pages/Home.js</span> Dosyasını Değiştir.</p>
                <NavLink to={"/app"} className="bg-white text-black p-2 rounded-md">Uygulamaya Git</NavLink>
            </div>
        </div>
    );
};

export default Home;
