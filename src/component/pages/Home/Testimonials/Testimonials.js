import React from 'react';
import './Testimonials.css';
import SingleTestimonial from './SingleTestimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
