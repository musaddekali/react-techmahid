import React, { createContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useHistory,
    useLocation,
} from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import PortfolioDetails from './component/pages/PortfolioDetails/PortfolioDetails';
import Topbar from './component/pages/Home/Topbar/Topbar';
import Navbar from './component/pages/Home/Navbar/Navbar';
import Footer from './component/pages/Home/Footer/Footer';
import techMahidApi from './tech-mahid-api/tech_mahid_api';
import Home from './component/pages/Home/Home';
import Preloader from './component/pages/Home/Preloader/Preloader';

// go to top of the page with reload or open this page.
function ScrollToTopOnMount() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

// if page is unknown 
const PageNotFound = () => {
    const history = useHistory();
    // page not found style 
    const pageNotFoundStyle = {
        display: 'grid',
        placeItems: 'center',
        height: '75vh',
        width: '100%',
    }
    return (
        <div style={pageNotFoundStyle} >
            <div className="container text-center">
                <h1>Opps, Page Not Found (404)</h1>
                <button onClick={history.goBack}>Go Back</button>
            </div>
        </div>
    )
}

// -------- Api Context for all component. This api data will go to all the component --------
export const techMahidApiContext = createContext();
techMahidApiContext.displayName = 'TechMahid';

//Main App
export default function App() {
    //All data (original)
    const [mainData, setMainData] = useState(techMahidApi);
    // portfolio details data
    const [portfolioDetails, setPortfolioDetails] = useState([]);
    // for topbar and navbar scrolling effect 
    const [isScrolled, setIsScrolled] = useState(false);
    // show preloader when page is not loaded 
    const [preloader, setPreloader] = useState(true);

    // for topbar and navbar scrolling effect 
    const checkScroll = () => {
        let scroll = window.scrollY;
        if (scroll > 100) {
            setIsScrolled(true);
        } else if (scroll <= 100) {
            setIsScrolled(false);
        }
    }

    useEffect(() => {
        // Scroll event for window
        window.addEventListener("scroll", checkScroll);
        return () => window.removeEventListener("scroll", checkScroll);
    }, []);

    useEffect(() => {
        // take parmition when leave from page 
        const handlePageCencel = (e) => {
            e.returnValue = 'Are you sure?'
        }
        window.addEventListener('beforeunload', handlePageCencel);
        return () => window.removeEventListener('beforeunload', handlePageCencel);
    }, []);

    useEffect(() => {
        // aos init 
        AOS.init({
            duration: 1000,
            once: true
        });
        // remove preloader when finished the page loading 
        setPreloader(false);
    }, []);

    // set data to portfolio-details page, which item clicked from portfolio item 
    const handlePortfolioDetails = (id) => {
        const portfolioDetailsItem = mainData.portfolio.filter((item) => item.id === id);
        setPortfolioDetails(portfolioDetailsItem);
    }

    return (
        <>
            {
                preloader ? <Preloader /> :
                    <techMahidApiContext.Provider value={{ mainData, handlePortfolioDetails: handlePortfolioDetails }}>
                        <Router basename="/react-techmahid">
                            <Topbar isScrolled={isScrolled} />
                            <Navbar isScrolled={isScrolled} />
                            <ScrollToTopOnMount />
                            <Switch>
                                <Route preserverScrollPosition={true} exact path='/'>
                                    <Home mainData={mainData} />
                                </Route>
                                <Route exact path='/portfolio-details'>
                                    <PortfolioDetails portfolioDetails={portfolioDetails} />
                                </Route>
                                <Route>
                                    <PageNotFound />
                                </Route>
                            </Switch>
                            <Footer />
                        </Router>
                    </techMahidApiContext.Provider>
            }
        </>
    )
}

