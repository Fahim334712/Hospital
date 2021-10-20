import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="container">
            <h2 className="text-center">Our Services</h2>
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
        </div>
    );
};

export default Services;