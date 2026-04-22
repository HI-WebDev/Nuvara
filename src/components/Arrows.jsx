import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Arrows = () => {
    return (
        <>
            <div className="arrow d-flex ">
                <span className="me-3 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                <span className=" d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
            </div>
        </>
    )
}

export default Arrows
