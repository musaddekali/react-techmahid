import React, { useContext } from 'react';
import { FaPlus, FaLink } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { techMahidApiContext } from '../../../../App';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const PortfolioSingleItem = ({ portfolio, openThisImg, index }) => {
    const { id, name, category, image } = portfolio;
    const { handlePortfolioDetails } = useContext(techMahidApiContext);

    // tooltip elem 
    const previewTooltipText = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            Preview Portfolio
        </Tooltip>
    );
    const detailsTooltipText = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            See Details
        </Tooltip>
    );
    // end tooltip elm 

    return (
        <div className='col-lg-4 col-md-6 mb-4 overflow-hidden portfolio-item'>
            <img src={image} alt="portfolio" className="portfolio-img" />
            <ul className="portfolio-info">
                <li>
                    <h4>{name}</h4>
                    <p>{category}</p>
                </li>
                <li>
                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 160 }}
                        overlay={previewTooltipText}
                    >
                        <span
                            onClick={() => openThisImg(index)}
                            className='portfolio-link'
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                            <FaPlus />
                        </span>
                    </OverlayTrigger>

                    <OverlayTrigger
                        placement="bottom"
                        delay={{ show: 150, hide: 160 }}
                        overlay={detailsTooltipText}
                    >
                        <Link
                            onClick={() => handlePortfolioDetails(id)}
                            to='/portfolio-details'
                            className="portfolio-link"
                            data-bs-toggle="tooltip"
                            data-bs-placement="bottom"
                        >
                            <FaLink />
                        </Link>
                    </OverlayTrigger>

                </li>
            </ul>
        </div>
    )
}
export default PortfolioSingleItem;