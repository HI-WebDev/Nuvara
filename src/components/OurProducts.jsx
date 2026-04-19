import { useState } from 'react'
import Header from './helpers/Title'
import Arrows from './helpers/Arrows'
import MainProduct from './helpers/MainProduct'
import Button from './helpers/Button'
import pro1 from '../Assets/pro1.png'

const OurProducts = () => {
    const [isClicked, setClicked] = useState(false);

    const handleClicked = () => {
        setClicked(!isClicked)
    }

    return (
        <div className="ourProducts mt-5 mb-5">
            <div className="container">
                <Header title='Our Products' />
                <div className="d-flex flex-column flex-md-row justify-content-md-between align-items-center mt-3">
                    <h1 className="fs-3 fw-bold">Explore Our Products</h1>
                    <Arrows />
                </div>

                <div className="row mt-4 mt-lg-5 mb-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                        />
                    </div>
                </div>

                <div className={isClicked ? "row mb-5" : "row d-none mb-5"}>
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            bg='#00FF66'
                            display='d-inline'
                            discount='New'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                            DisColors='d-flex'
                            color1='#db4444'
                            color2='#000000'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            bg='#db4444'
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                            DisColors='d-flex'
                            color1='#db4444'
                            color2='#000000'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            bg='#db4444'
                            display='d-none'
                            discount='-40%'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                            DisColors='d-flex'
                            color1='#db4444'
                            color2='#000000'
                        />
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <MainProduct
                            img={pro1}
                            bg='#00FF66'
                            display='d-inline'
                            discount='New'
                            title='HAVIT HV-G92 Gamepad'
                            oneLine='d-flex'
                            price='120'
                            del='160'
                            dispDel='d-none'
                            rating='⭐⭐⭐⭐⭐'
                            count='88'
                            DisColors='d-flex'
                            color1='#db4444'
                            color2='#000000'
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <Button title={isClicked ? "View Less" : "View All Products"} bg='#db4444' funct={handleClicked} />
                </div>
            </div>
        </div>
    )
}

export default OurProducts
