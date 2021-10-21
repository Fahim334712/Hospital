import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="as">
            <section className="we container">
                <div >
                    <h5 className="loo">Evergreen Health Care</h5>
                    <p>Sed ut perspiciatis unde om is nerror sit voluptatem accustium dolorem tium totam rem aperam eaque ipsa quae ab illose inntore veritatis</p>
                    <i className="fab fa-facebook lk"></i> &nbsp;
                    <i className="fab fa-linkedin-in lk"></i>&nbsp;
                    <i className="fab fa-twitter-square lk"></i>&nbsp;
                    <i className="fab fa-instagram lk"></i>
                </div>
                <div className="zx">
                    <h6 className="loo">Our links</h6>
                    <p><i class="fas fa-arrow-right"></i> About Us</p>
                    <p><i class="fas fa-arrow-right"></i> Services</p>
                    <p><i class="fas fa-arrow-right"></i> Doctors</p>
                    <p><i class="fas fa-arrow-right"></i> Department</p>
                </div>
                <div>
                    <h6 className="loo">Other links</h6>
                    <p><i class="fas fa-arrow-right"></i> Home</p>
                    <p><i class="fas fa-arrow-right"></i> Doctors</p>
                    <p><i class="fas fa-arrow-right"></i> Services</p>
                    <p><i class="fas fa-arrow-right"></i> Department</p>
                </div>
                <div>
                    <h6 className="loo">Contact Us</h6>
                    <p><i class="fas fa-phone"></i>1800-121-3637<br />
                        +91 555 234-8765</p>
                    <p><i class="fas fa-envelope-square"></i>info@example.com<br />
                        sale@example.com</p>
                    <p><i class="fas fa-search-location"></i>380 St Kilda Road, chittagong
                        VIC 3004, bangladesh</p>
                </div>
            </section>
            <p className="zx"><i class="fas fa-copyright"></i>copyright all rights reserved</p>
        </div>
    );
};

export default Footer;