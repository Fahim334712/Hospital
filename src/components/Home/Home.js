import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Home.css';

const Home = () => {
    const history = useHistory();
    const hangle = useHistory();
    const rt = useHistory();
    const handleButton = () => {
        history.push('./services');
    }
    const handleDoctor = () => {
        hangle.push('./doctors');
    }
    const handlert = () => {
        rt.push('./about');
    }
    return (
        <div className="df">
            <section className="tger"  >
                <div className="ms bo">
                    <h1 className="fw-bolt bn"> Better Care For<br /> Your <span className="text-danger">Health</span></h1>
                    <p className="nh">Quisque leo augue, lobortis ac tellus nec, posuere ultricies nulla. Praesent massa odio, pellentesque in consectetur quis, volutpat sit amet erat.</p>
                    <button className="nah">Learn More.......</button>
                </div>
                <div>
                    <img className="Imgc" src="./images/h.png" alt="" />
                </div>

            </section>
            <section>
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
                        <div onClick={handlert} className="zzz"><Button className="mt-4 px-5" variant="success">More About....</Button></div>
                    </div>

                </section>
            </section>
            <h1 className="text-center mt-5 fw-bold gh"> Our Services</h1>
            <section className="eee container">
                <div className="cse">
                    <div>
                        <div>
                            <img className="vff" src="./images/j.jpg" alt="" />
                        </div>
                        <div>
                            <h5 className="zx text-danger">Imaging</h5>
                        </div>

                    </div>

                </div>
                <div className="eee">
                    <div className="cse">
                        <div>
                            <img className="vff" src="./images/df.png" alt="" />
                        </div>
                        <div>
                            <h5 className="zx text-danger">Pathology</h5>
                        </div>
                    </div>
                </div>
                <div className="eee">
                    <div className="cse">
                        <div>
                            <img className="vff" src="./images/ui.png" alt="" />
                        </div>
                        <div>
                            <h5 className="zx text-danger">Pharmacy</h5>
                        </div>
                    </div>
                </div>

            </section>
            <div onClick={handleButton} className="zzz"><Button className="mt-4 px-5" variant="success">See More Service</Button></div>
            <section>
                <h1 className="text-center mt-5 fw-bold gh"> Our Team</h1>
                <h1 className="text-center text-danger">Doctor’s In The Medical Sciences</h1>
                <p className="text-center conatiner">Fusce pharetra odio in urna laoreet laoreet. Aliquam erat volutpat. Phasellus nec ligula arcu. Aliquam eu urna pulvinar, iaculis ipsum in, porta massa.</p>
                <div className="tyu container">
                    <div className="fff">
                        <div><img className="vvv" src="./images/pic-1.jpg" alt="" /></div>
                        <div><h4 className="text-center">Dr.Willian henry</h4>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati provident ab error dicta impedit dolorum! Repellat nostrum exercitationem dolorum. Soluta reprehenderit eaque, similique maiores possimus expedita magni atque voluptatum ipsam!</p>
                        </div>
                    </div>
                    <div className="fff">
                        <div><img className="vvv" src="./images/pic-7.jpg" alt="" /></div>
                        <div><h4 className="text-center">Emily Enderson</h4>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati provident ab error dicta impedit dolorum! Repellat nostrum exercitationem dolorum. Soluta reprehenderit eaque, similique maiores possimus expedita magni atque voluptatum ipsam!</p></div>
                    </div>
                    <div className="fff">
                        <div><img className="vvv" src="./images/pic-3.jpg" alt="" /></div>
                        <div><h4 className="text-center">Dr.Alex Carry</h4>
                            <p className="m-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati provident ab error dicta impedit dolorum! Repellat nostrum exercitationem dolorum. Soluta reprehenderit eaque, similique maiores possimus expedita magni atque voluptatum ipsam!</p></div>
                    </div>
                </div>
                <div onClick={handleDoctor} className="zzz"><Button className="mt-4 px-5" variant="success">See All doctors</Button></div>
            </section>

        </div>
    );
};

export default Home;