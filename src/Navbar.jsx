// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import './style/index.css'
// function Navbar(){
//     const [open, setOpen] = useState(false)
//     return(
//         <>
//         <div className="nav" style={{height: '100px', display: 'flex', justifyContent: 'space-evenly', alignItems:'center', backgroundColor:'black'}}>
//             <div style={{height: '90px', width: '33.33%', display:'flex', justifyContent:'start', alignItems:'center',paddingLeft:'35px'}} className="box">
//                 <img src="https://cdn-icons-png.flaticon.com/128/5506/5506613.png" style={{height: '80px', width: '95px'}} alt="" />
//             </div>
           
            
            
//             <div  style={{height: '90px', width: '33.33%',  display:'flex', justifyContent:'space-evenly', alignItems:'center' }} className="box">
//                 <Link style={{color:'red', textDecoration:'none'}} to={'/'}>Home</Link>
//                 <Link style={{color:'red', textDecoration:'none'}} to={'/'}>About us</Link>
//                 <Link style={{color:'red', textDecoration:'none'}} to={'/'}>Contact</Link>
//             </div>
//             <div style={{height: '90px', width: '33.33%',  display:'flex', justifyContent:'space-evenly', alignItems:'center'}} className="box">
               
//                 <Link style={{color:'red', textDecoration:'none'}} to={'/login'}>Login</Link>
//             </div>
//        </div>
     
//         </>
//     )
// }
// export default Navbar;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/index.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5506/5506613.png"
            alt="logo"
          />
        </div>

        {/* ✅ Menu Icon */}
        <div className="menu-icon" onClick={() => setOpen(!open)}>
          {open ? '✖' : '☰'}
        </div>

        {/* ✅ Nav Links */}
        <div className={`links ${open ? 'open' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
