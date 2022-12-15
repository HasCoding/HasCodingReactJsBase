import PrivateRoute from "./components/PrivateRoute";
import HasCodingLayout from "./pages/HasCoding";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import About from "./pages/HasCoding/About";
import AppHome from "./pages/HasCoding/AppHome";


const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/auth/login',
        element: <Login/>
    },
    {
        path: '/auth/logout',
        element: <Logout/>
    },
    {
        path: '/app',
        element: <HasCodingLayout/>,
        auth:true,
        children: [
            {
                path: '',
                element: <AppHome/>
            },
            {
                path: 'about',
                element: <About/>
            }
        ]
    }
]

const authCheck = routes => routes.map(route => {
    if (route?.auth){
        route.element = <PrivateRoute>{route.element}</PrivateRoute>
    }

    if (route?.children){
        route.children = authCheck(route.children)
    }
    return route
})

export default authCheck(routes);
