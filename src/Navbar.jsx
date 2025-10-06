import React from 'react'
import { Link } from 'react-router-dom';
import './style/index.css'
function Navbar(){
    return(
        <>
        <div className="nav" style={{height: '100px', display: 'flex', justifyContent: 'space-evenly', alignItems:'center', backgroundColor:'navy'}}>
            <div style={{height: '90px', width: '33.33%', display:'flex', justifyContent:'start', alignItems:'center',paddingLeft:'35px'}} className="box">
                <img src="https://cdn-icons-png.flaticon.com/128/5506/5506613.png" style={{height: '80px', width: '95px'}} alt="" />
            </div>
            <div style={{height: '90px', width: '33.33%',  display:'flex', justifyContent:'space-evenly', alignItems:'center' }} className="box">
                <Link style={{color:'red', textDecoration:'none'}} to={'/'}>Home</Link>
                <Link style={{color:'red', textDecoration:'none'}} to={'/'}>About us</Link>
                <Link style={{color:'red', textDecoration:'none'}} to={'/'}>Contact</Link>
            </div>
            <div style={{height: '90px', width: '33.33%',  display:'flex', justifyContent:'space-evenly', alignItems:'center'}} className="box">
               
                <Link style={{color:'red', textDecoration:'none'}} to={'/login'}>Login</Link>
            </div>
       
        </div>
        </>
    )
}
export default Navbar;