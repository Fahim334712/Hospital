import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Departments.css';

const Departments = () => {
    const histr = useHistory();
    const handleThis = () => {
        histr.push('./home');
    }
    return (
        <div className="bodys">
            <h1 className="text-center fw-bold mt-4 mb-4 text-danger">All Department Here</h1>

            <div className="Flexes container">
                <div className="mt-5 again">
                    <div className="peta">
                        <h4 className=" text-center">Pedlatric</h4>
                        <small>Pediatrics is the branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18. The word “paediatrics” means “healer of children”; they are derived from two Greek words: (pais = child) and (iatros = doctor or healer).</small>
                    </div>
                    <div className="peta">
                        <h4 className=" text-center">Dental</h4>
                        <small>Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral cavity (the mouth), commonly in the dentition (developmenmaxillofacial (jaw and facial) area.</small>
                    </div>
                    <div className="peta">
                        <h4 className=" text-center">Physicians</h4>
                        <small>A physician (American English), medical practitioner (Commonwealth English), medical doctor, or simply doctor, is a professional who practices medicine, which is concerned with promoting, maintaining or restoring health through the study, diagnosis, prognosis and treatment of disease, injury.</small>
                    </div>
                    <div className="peta">
                        <h4 className=" text-center">NeuroSurgery</h4>
                        <small>A neurosurgeon is a physician who specializes in the diagnosis and surgical treatment of disorders of the central and peripheral nervous system including congenital anomalies, trauma, tumors, vascular disorders</small>
                    </div>
                </div>
                <div >
                    <img className="Img" src="./images/mg.jpg" alt="" />
                    <img className="Imgi" src="./images/nd.jpg" alt="" />
                </div>
            </div>
            <div onClick={handleThis} className="zzz"><Button className="mt-4 px-5 mb-4" variant="success">Back to home</Button></div>
        </div>
    );
};

export default Departments;