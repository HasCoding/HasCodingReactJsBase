import React from 'react';
import {Outlet} from "react-router-dom";
import {Helmet} from "react-helmet";


const HasCodingLayout = () => {
    return (
        <>
            <Helmet>
                <title>HasCoding React</title>
            </Helmet>
            <Outlet/>
        </>
    );
};

export default HasCodingLayout;
