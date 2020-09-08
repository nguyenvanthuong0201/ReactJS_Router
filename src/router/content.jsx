import React from 'react';
import Home from '../components/Home'
import About from '../components/About'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'
import Product from '../components/Product';
import Login from '../components/Login';


const routes=[
    {
        path:"/",
        exact:true,
        main:()=> <Home/>
    },
    {
        path:"/about",
        exact:false,
        main:()=> <About/>
    },
    {
        path:"/contact",
        exact:false,
        main:()=> <Contact/>
    },
    {
        path:"/sanPham",
        exact:false,
        main:({match})=> <Product match={match}/>

    },

    {
        path:"/login",
        exact:false,
        main:()=> <Login/>
    },
    {           // 404 phải  đặt dưới cùng 
        path:"",
        exact:false,
        main:()=> <NotFound/>
    },


]
export default routes