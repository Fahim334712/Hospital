import React from 'react';
import './About.css';

const About = () => {
    return (
        <div>
            <h1 className="text-center mt-5 fw-bold gh"> About Us</h1>
            <section className="Gridi m-4">
                <div>
                    <img className="Img" src="./images/k.jpg" alt="" />
                </div>
                <div>
                    <p className="fw-bold text-danger">About Us </p><br />
                    <h1>We Are Specialize in Medical Diagnositics</h1><br />
                    <small>Nulla lacinia sapien a diam ullamcorper, sed congue leo vulputate. Phasellus et ante ultrices, sagittis purus vitae, sagittis quam. Quisque urna lectus, auctor quis tristique tincidunt, semper vel lectus. Mauris eget eleifend massa. Praesent ex felis, laoreet nec tellus in, laoreet commodo ipsum.</small>
                    <p className="mt-2"><i class="fas fa-arrow-right"></i> Pellentesque placerat, nisi congue vehicula efficitur.</p>
                    <p><i class="fas fa-arrow-right"></i> Pellentesque placerat, nisi congue vehicula efficitur.</p>
                    <p><i class="fas fa-arrow-right"></i> Phasellus mattis vitae magna in suscipit. Nam tristique posuere sem, mattis molestie est bibendum..</p>
                </div>

            </section>
        </div>
    );
};

export default About;