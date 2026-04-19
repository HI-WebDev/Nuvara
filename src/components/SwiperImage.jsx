import jbl from '../Assets/jbl product.png'
// import headphones from '../assets/images/hadphone.jpg'
// import earpods from '../assets/images/earpods.jpg'
import Button from './helpers/Button';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';


const SwiperImage = () => {
    //flash date
    const calculateTimeLeft = () => {
        const targetDate = new Date("2026-7-30").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="d-none d-lg-block swiperImage mt-5 mb-5">
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{ delay: 2500, disableOnInteraction: false, }}
                    pagination={{ clickable: true, }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="image w-100 position-relative">
                            <img src={jbl} className='img-fluid position-relative' alt="jbl baf" />
                            <h1 className='categories fs-5 position-absolute text-capitalize'>categories</h1>
                            <div className='center position-absolute d-flex flex-column'>
                                <h1 className='col- desc '>Enhance Your Music <br /> Experience</h1>
                                <ul className='d-flex list-unstyled mt-4 '>
                                    <li className='days me-4 d-flex justify-content-center align-items-center flex-column'>
                                        <span className='fs-6 mb-0'>{timeLeft.days}</span>
                                        days
                                    </li>
                                    <li className='hours me-4 d-flex justify-content-center align-items-center flex-column'>
                                        <span className='fs-6 mb-0'>{timeLeft.hours}</span>
                                        hours
                                    </li>
                                    <li className='minutes me-4 d-flex justify-content-center align-items-center flex-column'>
                                        <span className='fs-6 mb-0'>{timeLeft.minutes}</span>
                                        minutes
                                    </li>
                                    <li className='seconds me-4 d-flex justify-content-center align-items-center flex-column'>
                                        <span className='fs-6 mb-0'>{timeLeft.seconds}</span>
                                        seconds
                                    </li>
                                </ul>
                            </div>

                            <div className="butt position-absolute">
                                <Button title='Buy Now!' bg='#00FF66' />
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                            <div className="image w-100 ">
                                <img src={headphones} className='img-fluid' alt="headphones" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image img-fluid">
                                <img src={earpods} className='img-fluid' alt="earpods" />
                            </div>
                        </SwiperSlide> */}

                </Swiper>
            </div>

        </div>
    )
}

export default SwiperImage
