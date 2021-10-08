import React from 'react';
import './Footer.css';
import NewsLetter from './NewsLetter';
import FooterTop from './FooterTop';
import CopyRight from './CopyRight';

export default function Footer() {
    return (
        <footer className="footer">
            <NewsLetter />
            <FooterTop />
            <CopyRight />
        </footer>
    )
}
