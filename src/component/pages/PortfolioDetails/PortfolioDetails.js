import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './PortfolioDetails.css';
import Carousel from 'react-multi-carousel';

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

// Breadcrumbs 
const Breadcrumbs = () => {
    const history = useHistory();

    return (
        <section className="breadcrumbs">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h2>Portfolio Details</h2>
                    </div>
                    <div className="col-md-6 d-flex justify-content-lg-end">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link
                                to='/#portfolio'
                                onClick={(e) => { e.preventDefault(); history.goBack() }}
                            >
                                Portfolio
                            </Link></li>
                            <li>Portfolio Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

// PortfolioDetails
export default function PortfolioDetails({ portfolioDetails }) {
    return (
        <>
            <Breadcrumbs />
            {
                portfolioDetails.map((item) => {
                    const { details } = item;
                    const { images, info, title, desc } = details;
                    const { category, client, date, url } = info;
                    return (
                        <section key={item.id} className="portfolio-details">
                            <div className="container">
                                <div className="portfolio-details-container">
                                    <div className="portfolio-details-carousel">
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
                                                images.map((img, i) => <img key={i} src={img} className="img-fluid" alt="portfolio-details-img" />)
                                            }
                                        </Carousel>
                                    </div>
                                    <div className="portfolio-details-info">
                                        <h3>Project information</h3>
                                        <hr />
                                        <ul>
                                            <li><strong>Category:</strong> {category}</li>
                                            <li><strong>Client:</strong> {client}</li>
                                            <li><strong>Project date:</strong> {date}</li>
                                            <li><strong>Project URL:</strong> <a href="/">{url}</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="portfolio-details-desc">
                                    <h2>{title}</h2>
                                    <p>{desc}</p>
                                </div>
                            </div>
                        </section>
                    )

                })
            }
        </>
    )
}
