import React from 'react';
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import brand1 from '../images/brand1.png'
import brand2 from '../images/brand2.png'
import brand3 from '../images/brand3.png'
import brand4 from '../images/brand4.png'
import brand5 from '../images/brand5.png'
import brand6 from '../images/brand6.png'


const Home = () => {
    return (
        <div>
                        {/*header*/}
            <header id="site-header" className="fixed-top">
                
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark stroke">
                <h1>
                    <a className="navbar-brand" href="index.html">
                    <span className="fa fa-diamond"></span>Study Course <span className="logo">Journey to success</span></a>
                </h1>

                {/* if logo is image enable this   
                    <a className="navbar-brand" href="#index.html">
                        <img src="image-path" alt="Your logo" title="Your logo" style="height:35px;" />
                    </a> */}
                <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                    data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                    <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mx-lg-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item @@about__active">
                        <a className="nav-link" href="about.html">About</a>
                    </li>
                    <li className="nav-item @@courses__active">
                        <a className="nav-link" href="courses.html">Courses</a>
                    </li>
                    <li className="nav-item @@contact__active">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    </ul>

                    {/*/search-right*/}
                    <div className="search-right">
                    <a href="#search" title="search"><span className="fa fa-search" aria-hidden="true"></span></a>
                    {/* search popup */}
                    <div id="search" className="pop-overlay">
                        <div className="popup">

                        <form action="error.html" method="GET" className="search-box">
                            <input type="search" placeholder="Search" name="search" required="required" autofocus="" />
                            <button type="submit" className="btn"><span className="fa fa-search" aria-hidden="true"></span></button>
                        </form>

                        </div>
                        <a className="close" href="#close">×</a>
                    </div>
                    {/* /search popup */}
                    </div>
                    <div className="top-quote mr-lg-2 text-center">
                    <a href="#login" className="btn login mr-2"><span className="fa fa-user"></span> login</a>
                    </div>
                </div>
                {/* toggle switch for light and dark theme */}
                <div className="mobile-position">
                    <nav className="navigation">
                    <div className="theme-switch-wrapper">
                        <label className="theme-switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div className="mode-container py-1">
                            <i className="gg-sun"></i>
                            <i className="gg-moon"></i>
                        </div>
                        </label>
                    </div>
                    </nav>
                </div>
                {/* //toggle switch for light and dark theme */}
                </nav>
            </div>
            </header>
            {/*/header*/}
            {/* main-slider */}
            {/*  */}
            <section className="w3l-main-slider" id="home">
                <div className="companies20-content">
                    <div className="owl-one owl-carousel owl-theme">
                        <div className="item">
                            <li>
                                <div className="slider-info banner-view bg bg2">
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg">
                                                <h5>50% Discount on all Popular Courses</h5>
                                                <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us</p>
                                                <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> Ready to
                                                    get started?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="item">
                            <li>
                                <div className="slider-info  banner-view banner-top1 bg bg2">
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg">
                                                <h5>Learn and Improve Yourself in Less Time </h5>
                                                <p className="mt-4 pr-lg-4">Our self improvement courses is very effective </p>
                                                <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> Ready to
                                                    get started?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="item">
                            <li>
                                <div className="slider-info banner-view banner-top2 bg bg2">
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg">
                                                <h5>Be More Productive to Be More Successful</h5>
                                                <p className="mt-4 pr-lg-4">Don't waste your time, check out our productive courses</p>
                                                <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> Ready to
                                                    get started?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                        <div className="item">
                            <li>
                                <div className="slider-info banner-view banner-top3 bg bg2">
                                    <div className="banner-info">
                                        <div className="container">
                                            <div className="banner-info-bg">
                                                <h5>Enhance your skills with best online courses</h5>
                                                <p className="mt-4 pr-lg-4">Take the first step to your journey to success with us</p>
                                                <a className="btn btn-style btn-primary mt-sm-5 mt-4 mr-2" href="about.html"> Ready to
                                                    get started?</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </div>
                    </div>
                </div>

                <div className="waveWrapper waveAnimation">
                    <svg viewBox="0 0 500 150" preserveAspectRatio="none">
                        <path d="M-5.07,73.52 C149.99,150.00 299.66,-102.13 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{stroke: "none"}}></path>
                    </svg>
                </div>
            </section>
            {/* /main-slider */}
            {/* middle */}
    
            <div className="middle py-5">
                <div className="container py-lg-5 py-md-4 py-2">
                    <div className="welcome-left text-center py-lg-4">
                        <h5 className="title-small mb-1">Start learning online</h5>
                        <h3 className="title-big">Enhance your skills with best online courses</h3>
                        <a href="#started" className="btn btn-style btn-outline-light mt-sm-5 mt-4 mr-2">Get started now</a>
                        <a href="contact.html" className="btn btn-style btn-primary mt-sm-5 mt-4">Contact Us</a>
                    </div>
                </div>
            </div>
            {/* //middle */}
            <section className="w3l-team py-5" id="team">
                <div className="call-w3 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="row main-cont-wthree-2">
                            <div className="col-lg-5 feature-grid-left">
                                <h5 className="title-small mb-1">Experienced professionals</h5>
                                <h3 className="title-big mb-4">Meet our teachers</h3>
                                <p className="text-para">Curabitur id gravida risus. Fusce eget ex fermentum, ultricies nisi ac sed,
                                    lacinia est.
                                    Quisque ut lectus consequat, venenatis eros et, commodo risus. Nullam sit amet laoreet elit.
                                    Suspendisse non magna a velit efficitur. </p>
                                <p className="mt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas ab qui impedit,
                                    libero illo
                                    quia sequi quibusdam iure. Error minus quod reprehenderit quae dolor velit soluta animi
                                    voluptate dicta enim? Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, provident!
                                </p>
                                <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">Discover More</a>
                            </div>
                            <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="box16">
                                            <a href="#url"><img src="team1.jpg" alt="" className="img-fluid radius-image" /></a>
                                            <div className="box-content">
                                                <h3 className="title"><a href="#url">James</a></h3>
                                                <span className="post">Director</span>
                                                <ul className="social">
                                                    <li>
                                                        <a href="#" className="facebook">
                                                            <span className="fa fa-facebook-f"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="twitter">
                                                            <span className="fa fa-twitter"></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mt-sm-0 mt-3">
                                        <div className="box16">
                                            <a href="#url"><img src="team2.jpg" alt="" className="img-fluid radius-image" /></a>
                                            <div className="box-content">
                                                <h3 className="title"><a href="#url">Victoria</a></h3>
                                                <span className="post">Managing Director</span>
                                                <ul className="social">
                                                    <li>
                                                        <a href="#" className="facebook">
                                                            <span className="fa fa-facebook-f"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="twitter">
                                                            <span className="fa fa-twitter"></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mt-lg-4 mt-3">
                                        <div className="box16">
                                            <a href="#url"><img src="team3.jpg" alt="" className="img-fluid radius-image" /></a>
                                            <div className="box-content">
                                                <h3 className="title"><a href="#url">Isabella</a></h3>
                                                <span className="post">Teacher</span>
                                                <ul className="social">
                                                    <li>
                                                        <a href="#" className="facebook">
                                                            <span className="fa fa-facebook-f"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="twitter">
                                                            <span className="fa fa-twitter"></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 mt-lg-4 mt-3">
                                        <div className="box16">
                                            <a href="#url"><img src="team4.jpg" alt="" className="img-fluid radius-image" /></a>
                                            <div className="box-content">
                                                <h3 className="title"><a href="#url">Elizabeth</a></h3>
                                                <span className="post">Teacher</span>
                                                <ul className="social">
                                                    <li>
                                                        <a href="#" className="facebook">
                                                            <span className="fa fa-facebook-f"></span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="twitter">
                                                            <span className="fa fa-twitter"></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           {/* testimonials */}
            <section className="w3l-testimonials" id="clients">
               {/* /grids */}
                <div className="cusrtomer-layout py-5">
                    <div className="container py-lg-4 py-md-3 pb-lg-0">

                        <h5 className="title-small text-center mb-1">Testimonials</h5>
                        <h3 className="title-big text-center mb-sm-5 mb-4">Happy Clients & Feedbacks</h3>
                       {/* /grids */}
                        <div className="testimonial-width">
                            <div id="owl-demo1" className="owl-two owl-carousel owl-theme">
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team1} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>John wilson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team2} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Julia sakura</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team3} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Roy Linderson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team4} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Mike Thyson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team2} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Laura gill</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team3} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Smith Johnson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team2} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Laura gill</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>Lorem ipsum dolor sit amet elit. Velit beatae
                                                    laudantium
                                                    voluptate rem ullam dolore nisi voluptatibus esse quasi, doloribus tempora.
                                                    Dolores molestias adipisci dolo amet!.</q>
                                            </blockquote>
                                            <div className="testi-des">
                                                <div className="test-img"><img src={team3} className="img-fluid"
                                                        alt="client-img" />
                                                </div>
                                                <div className="peopl align-self">
                                                    <h3>Smith Johnson</h3>
                                                    <p className="indentity">Student</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/* /grids */}
                </div>
               {/* //grids */}
            </section>
           {/* //testimonials */}
        
            <section class="w3l-clients py-5" id="clients">
                <div class="call-w3 py-md-4 py-2">
                    <div class="container">
                        <div class="company-logos text-center">
                            <div class="row logos">
                                <div class="col-lg-2 col-md-3 col-4">
                                    <img src={brand1} alt="" class="img-fluid" />
                                </div>
                                <div class="col-lg-2 col-md-3 col-4">
                                    <img src={brand2} alt="" class="img-fluid" />
                                </div>
                                <div class="col-lg-2 col-md-3 col-4">
                                    <img src={brand3} alt="" class="img-fluid" />
                                </div>
                                <div class="col-lg-2 col-md-3 col-4 mt-md-0 mt-4">
                                    <img src={brand4} alt="" class="img-fluid" />
                                </div>
                                <div class="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                    <img src={brand5} alt="" class="img-fluid" />
                                </div>
                                <div class="col-lg-2 col-md-3 col-4 mt-lg-0 mt-4">
                                    <img src={brand6} alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;