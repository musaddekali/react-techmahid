import React from 'react';
import './Testimonials.css';
import SingleTestimonial from './SingleTestimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import testimonial1 from '../../../../images/testimonials/testimonials-1.jpg';
import testimonial2 from '../../../../images/testimonials/testimonials-2.jpg';
import testimonial3 from '../../../../images/testimonials/testimonials-3.jpg';
import testimonial4 from '../../../../images/testimonials/testimonials-4.jpg';
import testimonial5 from '../../../../images/testimonials/testimonials-5.jpg';

const responsive = {
    all: {
        breakpoint: {
            max: 3000,
            min: 0,
        },
        items: 1,
        slidesToSlide: 1
    }
}

const testimonialsData = [
    {
        id: 1,
        image: testimonial1,
        name: 'Mahid Ahmod',
        cat: 'CEO',
        desc: 'Lorem ipsum dolor sit,  accusamus praesentium nisi nemo modi accusantium quia, adipisci architecto! Iste provident recusandae sint neque deserunt odio, itaque officiis possimus.'
    },
    {
        id: 2,
        image: testimonial2,
        name: 'Mahdi alom',
        cat: 'product designer',
        desc: 'Lorem ipsum dolor sit,  nemo modi accusantium quia, adipisci architecto! Iste provident recusandae sint neque deserunt odio, itaque officiis possimus.'
    },
    {
        id: 3,
        image: testimonial3,
        name: 'Mujakkir',
        cat: 'web designer',
        desc: 'Lorem ipsum dolor sit,  accusamus praesentium nisi nemo modi accusantium quia, adipisci architecto! Iste provident recusandae sint nequeamus praesentium nisi nemo m deserunt odio, itaque officiis possimus.'
    },
    {
        id: 4,
        image: testimonial4,
        name: 'Jhon Doe',
        cat: 'web developer',
        desc: 'Lorem ipsum dolor sit,  ntium nisi nemo modi accusantium quia, adipisci architecto! Iste provident recusandae sint neque deserunt odio, itaque officiis possimus.'
    },
    {
        id: 5,
        image: testimonial5,
        name: 'Musaddek Ali',
        cat: 'software enginear',
        desc: 'Lorem ipsum dolor sit,  accusamus praesentium nisiit,  accusamus praesentium nisi nemo modi accusantium quia, adipisci architecto! Iste provident recusandae sint neque deserunt odio, itaque officiis possimus.'
    },
];

export default function Testimonials({testimonials}) {
    return (
        <section className="testimonials">
            <div data-aos="zoom-in" className="container">
                <div className="testimonials-carousel">
                    <Carousel
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={3000}
                        customTransition="all .5s"
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={['all']}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {
                            testimonials.map((testimonial) => {
                                return (
                                    <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </section>
    )
}
