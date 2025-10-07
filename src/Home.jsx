import React from 'react'
import './style/home.css'
function Home(){
    return(
        <div className="parr">
         <div className="ban">
                <img className='bban' src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </div>
        <div className='par'>
           
            <div className="card">
                <img className='cardimg' src="https://plus.unsplash.com/premium_photo-1684769160411-ab16f414d1bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW50ZXJ2aWV3fGVufDB8fDB8fHww" height={100}  width={120} alt="images"  />
                <div className="context">
                    <h3>Class Mate</h3>
                    <p>This English speaking class</p>
                </div>
                <div className="btn">
                    <button className='btt'>Button </button>
                </div>
            </div>
             <div className="card">
                <img className='cardimg' src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={100}  width={120} alt="images"  />
                <div className="context">
                    <h3>Class Mate</h3>
                    <p>This English speaking class</p>
                </div>
                <div className="btn">
                    <button className='btt'>Button </button>
                </div>
            </div>
             <div className="card">
                <img className='cardimg' src="https://media.gettyimages.com/id/2193881663/photo/elementary-school-classroom-on-long-island.jpg?s=612x612&w=gi&k=20&c=-Byt2tbJu8GgLcoodGKurusUm90CVk4IXhfY3ePfV94=" height={100}  width={120} alt="images"  />
                <div className="context">
                    <h3>Class Mate</h3>
                    <p>This English speaking class</p>
                </div>
                <div className="btn">
                    <button className='btt'>Button </button>
                </div>
            </div>
             <div className="card">
                <img className='cardimg' src="https://media.gettyimages.com/id/2172874650/photo/fun-happy-and-excited-teacher-talking-to-students-in-school-classroom-with-group-of-learning.jpg?s=612x612&w=0&k=20&c=0FqeAqX4nglMgvVsdN2koa9bprlWVbi6TPbA35TgDV0=" height={100}  width={120} alt="images"  />
                <div className="context">
                    <h3>Class Mate</h3>
                    <p>This English speaking class</p>
                </div>
                <div className="btn">
                    <button className='btt'>Button </button>
                </div>
            </div>
        </div>
      </div>
    )
}
export default Home