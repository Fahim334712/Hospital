import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="df">
            <section className="tger"  >
                <div className="ms bo">
                    <h1 className="fw-bolt bn">Get Better Care For<br /> Your <span className="text-danger">Health</span></h1>
                    <p className="nh">Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                    <button className="nah">Learn More.......</button>
                </div>
                <div>
                    <img className="Imgc" src="./images/h.png" alt="" />
                </div>

            </section>
            <h4 className="text-center gb mt-5 mb-4">Our Team</h4>
            <h1 className="text-center text-danger">Docter’s In The Medical Sciences</h1>
            <p className="text-center conatiner">Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>

        </div>
    );
};

export default Home;