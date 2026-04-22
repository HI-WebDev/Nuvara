import {RiInstagramLine, RiTwitterLine, RiLinkedinLine } from "react-icons/ri";

const EmployerCard = ({ img, alt, title, desc }) => {
    return (
        <div className="CardEmployer">
            <div className="card">
                <img src={img} className="card-img-top m-auto bg-light" alt={alt} />
                <div className="card-body ps-0">
                    <h5 className="card-title fw-bold">{title}</h5>
                    <p className="card-text text-black-50 fw-bold mb-1">{desc}</p>
                    <div className="icons d-flex align-items-center ">
                        <a href="#" className="me-3 fs-4 text-black"><RiInstagramLine /></a>
                        <a href="#" className="me-3 fs-4 text-black"><RiLinkedinLine /></a>
                        <a href="#" className="fs-4 text-black"><RiTwitterLine /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployerCard
