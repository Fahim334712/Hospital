import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import LoadDoctors from '../LoadDoctors/LoadDoctors';
import './Doctors.css';


const Doctors = () => {
    const hanglaa = useHistory();

    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])
    const handlemn = () => {
        hanglaa.push('./home');
    }
    return (
        <div className="container mb-4">
            <h2 className="text-center text-danger fw-bold mt-4 mb-4">Our Experience Doctors Panel</h2>

            <div className="TheGrid">
                {
                    datas.map(data => <LoadDoctors key={data._id} data={data}></LoadDoctors>)
                }
            </div>
            <div onClick={handlemn} className="zzz"><Button className="mt-4 px-5" variant="success">Go to home</Button></div>

        </div>
    );
};

export default Doctors;