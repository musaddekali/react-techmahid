import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './ScrollTop.css';

export default function ScrollTop() {
    const [isShow, setIsShow] = useState(null);

    const checkScroll = () => {
        const scroll = window.pageYOffset;
        if (scroll > 300) {
            setIsShow(true);
        } else if (scroll <= 300) {
            setIsShow(false);
        }
    }

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        }
    },[]);

    return (
        <i
            onClick={scrollToTop}
            className={`scroll-top fadeIn ${isShow ? 'show' : ''}`}
        >
            <FaChevronUp />
        </i>
    )
}
