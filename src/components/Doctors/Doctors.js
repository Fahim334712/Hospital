import React, { useEffect, useState } from 'react';
import LoadDoctors from '../LoadDoctors/LoadDoctors';
import './Doctors.css';


const Doctors = () => {
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setDatas(data));
    }, [])

    return (
        <div className="container">
            <h2 className="text-center">Our Experience Doctors Panel</h2>

            <div className="TheGrid">
                {
                    datas.map(data => <LoadDoctors key={data._id} data={data}></LoadDoctors>)
                }
            </div>

        </div>
    );
};

export default Doctors;