import React from 'react';
import Hero from './Hero/Hero';
import FeaturedServices from './FeaturedServices/FeaturedServices';
import About from './About/About';
import Skills from './Skills/Skills';
import Counts from './Counts/Counts';
import Clients from './Clients/Clients';
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Portfolio from './Portfolio/Portfolio';
import Team from './Team/Team';
import Pricing from './Pricing/Pricing';
import Faq from './Faq/Faq';
import Contact from './Contact/Contact';
import ScrollTop from './ScrollTop/ScrollTop';

export default function Home({ mainData }) {
    const {
        featuredServices,
        skills,
        counters,
        clients,
        services,
        testimonials,
        portfolio,
        teams,
        pricing,
        faq,
        contact } = mainData;

    return (
        <>
            <Hero />
            <main>
                <FeaturedServices featuredServices={featuredServices} />
                <About />
                <Skills skills={skills}/>
                <Counts counters={counters}/>
                <Clients clients={clients}/>
                <Services services={services}/>
                <Testimonials testimonials={testimonials}/>
                <Portfolio portfolio={portfolio}/>
                <Team teams={teams}/>
                <Pricing pricing={pricing}/>
                <Faq faq={faq}/>
                <Contact contact={contact}/>
            </main>
            <ScrollTop />
        </>
    )
}
