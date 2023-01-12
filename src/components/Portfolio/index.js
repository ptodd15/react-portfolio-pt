import React from "react";
import USM from "../../assets/USM.png";
import MVCBlog from "../../assets/MVC.png";
import BohdeMarket from "../../assets/Bmarketplace.jpg";
import JATE from "../../assets/JATE.png";
import FinalProject from "../../assets/coming_soon.png";
import NoteTaker from "../../assets/NoteTaker.png";

function Portfolio() {
  // const projects = [
  //   {
  //     title: "USM",
  //     technologies: "MERN: MongoDB, Express, React, Node",
  //     image: "../../assets/profile_pic.jpg",
  //     app: "https://hartsfieldt.github.io/project1-sportsstats/",
  //     github: "https://github.com/hartsfieldt/project1-sportsstats",
  //   },
  //   {
  //     title: "Bohde Marketplace",
  //     technologies: "HTML/CSS/JS",
  //     image: {BohdeMarket},
  //     app: "https://bohde-marketplace.herokuapp.com/login",
  //     github: "https://github.com/MadelineRamos/Bohde-Marketplace",
  //   },
  //   {
  //     title: "Placebook",
  //     technologies: "HTML/CSS/JS/Server-Side API",
  //     image: {FinalProject},
  //     app: "https://github/com/ptodd15",
  //     github: "https://github/com/ptodd15",
  //   },
  //   {
  //     title: "JATE",
  //     technologies: "Full Stack Application: HTML/CSS/JS/SQL/Node/Express",
  //     image: {JATE},
  //     app: "https://pt-jate.herokuapp.com/",
  //     github: "https://github.com/ptodd15/JATE",
  //   },
  //   {
  //     title: "MVC Blog",
  //     technologies: "JS/Moment.js",
  //     image: {MVCBlog},
  //     app: "https://pt-mvc-blog.herokuapp.com/login",
  //     github: "https://github.com/ptodd15/MVC-Blog",
  //   },
  //   {
  //     title: "NoteTaker",
  //     technologies: "HTML/CSS/JS/Server-Side APIs",
  //     image: {NoteTaker},
  //     app: "https://pt-note-takr.herokuapp.com/",
  //     github: "https://github.com/ptodd15/note-taker",
  //   },
  // ];
  return (
    <section className="flex-row">
      <div className="row">
          <div className="container col d-flex justify-content-center">
            <div className="card bg-dark">
              <div className="">
                
                <img
              src={USM}
              alt="project snapshot"
              className="img-fluid"
            />
                
              </div>

              <div className="">
                <div className="content text-center">
                  <h3>USM</h3>
                  <a href="https://hartsfieldt.github.io/project1-sportsstats/" className="btn border-secondary m-1 p-1 bg-secondary ">
                    Application
                  </a>
                  <a href="https://github.com/hartsfieldt/project1-sportsstats" className="btn border-secondary m-1 p-1 bg-secondary">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row ">
          <div className="container col d-flex justify-content-center">
            <div className="card bg-dark">
              <div className="">
                
                <img
              src={BohdeMarket}
              alt="project snapshot"
              className="img-fluid"
            />            
              </div>
              <div className="">
                <div className="content text-center">
                  <h3>Bohde Marketplace</h3>
                  <a href="https://github.com/MadelineRamos/Bohde-Marketplace" className="btn border-secondary m-1 p-1 bg-secondary ">
                    Application
                  </a>
                  <a href="https://bohde-marketplace.herokuapp.com/login" className="btn border-secondary m-1 p-1 bg-secondary">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row ">
          <div className="container col d-flex justify-content-center">
            <div className="card bg-dark">
              <div className="">
                
                <img
              src={MVCBlog}
              alt="project snapshot"
              className="img-fluid"
            />
                
              </div>

              <div className="">
                <div className="content text-center">
                  <h3>MVC Blog</h3>
                  <a href="https://pt-mvc-blog.herokuapp.com/login" className="btn border-secondary m-1 p-1 bg-secondary ">
                    Application
                  </a>
                  <a href="https://github.com/ptodd15/MVC-Blog" className="btn border-secondary m-1 p-1 bg-secondary">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row ">
          <div className="container col d-flex justify-content-center">
            <div className="card bg-dark">
              <div className="">
                
                <img
              src={FinalProject}
              alt="project snapshot"
              className="img-fluid"
            />
                
              </div>

              <div className="">
                <div className="content text-center">
                  <h3>Placebook</h3>
                  <a href="https://github/com/ptodd15" className="btn border-secondary m-1 p-1 bg-secondary ">
                    Application
                  </a>
                  <a href="https://github/com/ptodd15" className="btn border-secondary m-1 p-1 bg-secondary">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row ">
          <div className="container col d-flex justify-content-center">
            <div className="card bg-dark">
              <div className="">
                
                <img
              src={JATE}
              alt="project snapshot"
              className="img-fluid"
            />
                
              </div>

              <div className="">
                <div className="content text-center">
                  <h3>JATE</h3>
                  <a href="https://pt-jate.herokuapp.com/" className="btn border-secondary m-1 p-1 bg-secondary ">
                    Application
                  </a>
                  <a href="https://github.com/ptodd15/JATE" className="btn border-secondary m-1 p-1 bg-secondary">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row ">
          <div className="container col d-flex justify-content-center">
            <div className="card bg-dark">
              <div className="">
                
                <img
              src={NoteTaker}
              alt="project snapshot"
              className="img-fluid"
            />
                
              </div>

              <div className="">
                <div className="content text-center">
                  <h3>NoteTaker</h3>
                  <a href="https://hartsfieldt.github.io/project1-sportsstats/" className="btn border-secondary m-1 p-1 bg-secondary ">
                    Application
                  </a>
                  <a href="https://hartsfieldt.github.io/project1-sportsstats/" className="btn border-secondary m-1 p-1 bg-secondary">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default Portfolio;



