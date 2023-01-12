import React from 'react';
import Furman from '../../assets/Furman.png';
import UNC from '../../assets/UNC.png';


function About() {
  return (
    <section className="about ">
      <div className='card-body'>
      {/* <h1>Biography</h1>
      <br />
      <p>My name is Paul Todd, I am originally an Army brat and I have spent most of my life in Raleigh, 
      NC. </p>
      <p>I graduated from Cardinal Gibbons HighSchool in 2016 and attented Furman University to play Division 1 Baseball.</p> 
      <p>After finding development my junior year of university I fell in love.</p> <p>After completing my degree I worked as a chef before 
      deciding to take my passion to the next level through UNC.</p> */}
          <h2 className='edu'>Education</h2>
            <br />
          <div className='flex-row'>
           <div className='grid-container-profile'>
            <div className='grid-item'>
              <div className='title-uni align-items-center justify-content-center'>Furman University</div>
              <div className='title-concentration'>Information Technology focus Business December 2020</div>
                  </div>
              </div>
                <div className='grid-item'>
                <a href='https://www.furman.edu/' target='_blank'><img className='university-logo' src={Furman} /></a>
               </div>
              </div>

              <br />

                 <div className='flex-row'>
               <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University of North Carolina, Bootcamp</div>
                                        <div className='title-concentration'>Full Stack Development Certification January 2023</div>
                                    </div>
                                </div>
                                <div className='grid-item'>
                                        <a href='https://www.unc.edu/' target='_blank'><img className='university-logo' src={UNC} /></a>
                                    </div>
                                    </div>
                            </div>
    </section>
  );
}

export default About;
