import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import promotion from "/Food_Assets/assets/promotion/pro.png"

function Section4() {
  return (
    <>
     <section className='promotion_section '>
        <div className="container">
            <div className="row ">
                <div className="col lg-6 md-12 text-center mb-5 mb-lg-0">
                    <img src={promotion} alt="promotion"  className='img-fluid'/>
                </div>
                <div className="col lg-6 md-12 sm-12 px-6">
                    <h2>Nothing brings people together like a good burger</h2>
                    <p>Semper lacus cursus porta primis ligula risus tempus and
                 sagittis ipsum mauris lectus laoreet purus ipsum tempor enim
                ipsum porta justo integer ultrice aligula lectus aenean magna
                and pulvinar purus at pretium gravida</p>
                <ul>
                    <li>
                        <p>Fringilla risus, luctus mauris orci auctor purus euismod
                        pretium purus pretium ligula rutrum tempor sapien</p>
                    </li>
                    <li>
                        <p>Quaerat sodales sapien euismod purus blandit</p>
                    </li>
                    <li>
                        <p>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat
                        sodales sapien undo pretium a purus mauris</p>
                    </li>
                   
                </ul>
                </div>
            </div>
            
        </div> 

    </section>

    {/* paralax-scroll */}
    <section className='bg_parallax_scroll'>
        
    </section>
    </>
  
  )
}

export default Section4