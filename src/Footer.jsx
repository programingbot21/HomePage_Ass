import React from 'react'
import './style/footer.css'
function Footer(){
     return(
        <>
        <div className="foo">
            <h1 className='heading'>CONTACT US</h1> 
            {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>ALWAYS HERE AT LSJKJ</p> */}
            
                 <div className="pp"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>ALWAYS HERE AT LSJKJ</p></div>
            <div className="icon">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/cd/Facebook_logo_%28square%29.png" height={50} width={50} alt=""  />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png" height={50} width={50} alt="" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/768px-WhatsApp.svg.png?20220228223904" height={50} width={50} alt="" />
            </div>
       </div>
        </>
    )
}
export default Footer;