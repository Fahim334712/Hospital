
import './LoadDoctors.css';




const LoadDoctors = (props) => {
    const { name, picture } = props.data;


    return (
        <div>
            <div className="design">
                <div>
                    <img className="imgSizes" src={picture} alt="" />
                </div>
                <div className="TheLeft">
                    <h6 className="text">Name : {name};</h6>

                </div>
            </div>
        </div>
    );
};

export default LoadDoctors;