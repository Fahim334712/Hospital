import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Services.css';

const Services = () => {
    const handle = useHistory();
    const handleHome = () => {
        handle.push('./home');
    }
    return (
        <div className="container">
            <h2 className="text-center fw-bold mt-4 mb-4 text-danger">We provide world class Services</h2>
            <section className="kj">
                <div>
                    <img className="mnl" src="./images/j.jpg" alt="" />
                </div>
                <div>
                    <h3 className="text-success">1.Imaging</h3>
                    <p><i class="fas fa-arrow-right"></i> Philips Inginia 3.0Tesla Digital MRI</p>
                    <p><i class="fas fa-arrow-right"></i> GE Light Speed 500 slice VCT (CT Scanner)</p>
                    <p><i class="fas fa-arrow-right"></i> GE Prodigy Oracle-Bone Densitometer(BMD)</p>
                    <p><i class="fas fa-arrow-right"></i> SIEMENS Lithotripsy (ESWL)</p>
                    <p><i class="fas fa-arrow-right"></i> Philips 12-Channel -ECG</p>
                    <p><i class="fas fa-arrow-right"></i> GE Marquette 12 Channel ECG(Computer Analyzed and  Interpreted)</p>

                </div>
            </section>
            <section className="kj">
                <div className="rt">
                    <h3 className="text-success">2.Pathology</h3>
                    <p><i class="fas fa-arrow-right"></i> Cobas 6000 (Full Automated Multibatch Biochemistry and Immunology Analyzer)</p>
                    <p><i class="fas fa-arrow-right"></i>BECKMAN Coulter Au 680 (Random Access Multibatch Chemistry Analyzer) (CT Scanner)</p>
                    <p><i class="fas fa-arrow-right"></i> Abbott-Architect i2000SR (Full Automated Random Access Immunology Analyzer)</p>
                    <p><i class="fas fa-arrow-right"></i> Microbiology</p>
                    <p><i class="fas fa-arrow-right"></i> Histopathology</p>
                    <p><i class="fas fa-arrow-right"></i> Molecular (PCR) Lab. (HBV-DNA)(HPV-DNA)(HCV-RNA)HCV-RNA Genotype), HLA-B27.</p>
                </div>
                <div>
                    <img className="mnl" src="./images/df.png" alt="" />
                </div>
            </section>
            <section className="kj">
                <div>
                    <img className="mnl" src="./images/ui.png" alt="" />
                </div>
                <div>
                    <h3 className="text-success">3.Pharmacy</h3>
                    <p>Popular Medicine corner is a well-known retailer of medicine in Bangladesh. We provide all kinds of life saving medicine, which are available in all branches of Popular Diagnostics Ltd. Our aim is to provide good medicine and best service quality to the patients.</p>
                </div>
            </section>
            <section className="kj">
                <div>
                    <h3 className="text-success">4.Cardiology</h3>
                    <p>The Bulgarian Society of Interventional Cardiology’s journal Interventional Cardiology Forum now boasts an improved publishing infrastructure after moving to the technologically advanced ARPHA Platform, developed by scholarly publisher and technology provider Pensoft. This is the second cardiology journal to move on to ARPHA, after Bulgarian Cardiology did so last year.</p>
                </div>
                <div>
                    <img className="mnl" src="./images/pl.png" alt="" />
                </div>
            </section>
            <div onClick={handleHome} className="zzz"><Button className="mt-4 mb-3 px-5" variant="success">Back To Home</Button></div>
        </div>
    );
};

export default Services;