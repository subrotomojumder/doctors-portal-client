import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import quote from '../../../assets/icons/quote.svg';
import Review from './Review';
import Slider from "react-slick";
import { useQuery } from '@tanstack/react-query';

const Testimonial = () => {
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/reviews`);
            const data = await res.json();
            return data;
        }
    })
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",  background: "green", padding: '1px', borderRadius: "3px"}}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block",  background: "green", padding: '1px', borderRadius: "3px"}}
            onClick={onClick}
          />
        );
      }
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-xl text-warning font-bold'>Testimonial</h4>
                    <h2 className='text-3xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
                </figure>
            </div>
            <div className='w-full overflow-hidden px-7'>
                <Slider {...settings}>
                    {
                        reviews.map(review => <Review
                            review={review}
                            key={review._id}
                        ></Review>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default Testimonial;