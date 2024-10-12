// import React from 'react'
// import Slider from 'react-slick';
import { Slider } from 'react-slick';

const TestimonialsData = [
    {
        id: 1,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
        delay: 0.2,
    },
    {
        id: 2,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
        delay: 0.5,
    },
    {
        id: 3,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
        delay: 0.8,
    },
    {
        id: 4,
        name: "John Doe",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        img: "https://picsum.photos/101/101",
        delay: 1.1,
    },
];


const Testimonial = () => {
    const setting = {
        dots: true,
        arrow: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="py-14 mb-10">
            <div className="container">
                {/* header section */}
                <div className="space-y-6 p-6 text-center max-w-[600px] mx-auto">
                    <h1 className="uppercase font-semibold text-orange-600">OUR TESTIMONIALS</h1>
                    <p className="font-semibold text-3xl">What Our Students Say About Us</p>
                </div>

                {/* Testimonial card section */}
                <div>
                    <Slider {...setting}>
                        {
                            TestimonialsData.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div>
                                            {/* upper section */}
                                            {/* bottom section */}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
