import React, { useState } from 'react';
import './Portfolio.css';
import PortfolioSingleItem from './PortfolioSingleItem';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

// all img will push here for portfolio lightbox view
let images = [];

// filter buttons
const FilterButtons = ({ categorys, filterPortfolio }) => {
    const [filterActive, setFilterActive] = useState({ current: 0 });
    const handleActive = (index) => {
        setFilterActive({ current: index });
    }
    return (
        <ul id="fortfolio-filter">
            {
                categorys.map((item, i) => {
                    return (
                        <li
                            key={i}
                            className={`${i === filterActive.current ? 'active' : ''}`}
                            onClick={() => { filterPortfolio(item); handleActive(i) }}
                        >
                            {item}
                        </li>
                    )
                })
            }
        </ul>
    )
}

// main portfolio 
export default function Portfolio({ portfolio }) {
    const [filteredPortfolio, setFilteredPortfolio] = useState(portfolio);

    const [lightbox, setLightbox] = useState({
        photoIndex: 0,
        isOpen: false,
    });

    const allCategorys = ['all', ...new Set(portfolio.map((item) => item.category))];
    // open current img for lightbox 
    const openThisImg = (index) => {
        setLightbox({ photoIndex: index, isOpen: true });
    }

    const filterPortfolio = (category) => {
        if (category === 'all') {
            setFilteredPortfolio(portfolio);
            return;
        }
        const filteredItem = portfolio.filter((item) => {
            return item.category === category;
        });
        setFilteredPortfolio(filteredItem);
    }

    const { photoIndex, isOpen } = lightbox;

    return (
        <>
            {
                isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setLightbox({ ...lightbox, isOpen: false })}
                        onMovePrevRequest={() =>
                            setLightbox(() => ({ ...lightbox, photoIndex: (photoIndex + images.length - 1) % images.length }))
                        }
                        onMoveNextRequest={() =>
                            setLightbox(() => ({ ...lightbox, photoIndex: (photoIndex + 1) % images.length }))
                        }
                    />
                )
            }
            <section id="portfolio" className="portfolio section-padding">
                <div data-aos="fade-up" className="container">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <h3>Check Our <span className="theme-secondary-text">Portfolio</span></h3>
                        <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12">
                            <FilterButtons categorys={allCategorys} filterPortfolio={filterPortfolio} />
                        </div>
                    </div>
                    <div className="row" data-aos="fade-up" data-aos-delay="200">
                        {
                            filteredPortfolio.map((portfolio,i) => {
                                // push all image from portfolio in line 8
                                images.push(portfolio.image);
                                return (
                                    <PortfolioSingleItem
                                        key={portfolio.id}
                                        portfolio={portfolio}
                                        openThisImg={openThisImg}
                                        index={i}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
