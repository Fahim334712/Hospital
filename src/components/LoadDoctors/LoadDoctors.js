
import './LoadDoctors.css';




const LoadDoctors = (props) => {
    const { name, picture, description } = props.data;


    return (
        <div>
            <div className="design">
                <div>
                    <img className="imgSizes" src={picture} alt="" />
                </div>
                <div className="TheLeft">
                    <h6 className="text">Name : {name};</h6>
                    <p className="text-center">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default LoadDoctors;