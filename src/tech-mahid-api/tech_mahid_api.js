// icons
import {
    FaRegSmile,
    FaShoppingBag,
    FaHandsHelping,
    FaUsers,
    FaDribbble,
    FaFileAlt,
    FaTv,
    FaArchway,
    FaLocationArrow,
    FaEnvelope,
    FaPhone,
    FaTachometerAlt,
    FaGlobeAsia
} from 'react-icons/fa';
// images
import client1 from '../images/clients/client-1.png';
import client2 from '../images/clients/client-2.png';
import client3 from '../images/clients/client-3.png';
import client4 from '../images/clients/client-4.png';
import client5 from '../images/clients/client-5.png';
import client6 from '../images/clients/client-6.png';
import testimonial1 from '../images/testimonials/testimonials-1.jpg';
import testimonial2 from '../images/testimonials/testimonials-2.jpg';
import testimonial3 from '../images/testimonials/testimonials-3.jpg';
import testimonial4 from '../images/testimonials/testimonials-4.jpg';
import testimonial5 from '../images/testimonials/testimonials-5.jpg';
import portfolio1 from '../images/portfolio/portfolio-1.jpg';
import portfolio2 from '../images/portfolio/portfolio-2.jpg';
import portfolio3 from '../images/portfolio/portfolio-3.jpg';
import portfolio4 from '../images/portfolio/portfolio-4.jpg';
import portfolio5 from '../images/portfolio/portfolio-5.jpg';
import portfolio6 from '../images/portfolio/portfolio-6.jpg';
import portfolio7 from '../images/portfolio/portfolio-7.jpg';
import portfolio8 from '../images/portfolio/portfolio-8.jpg';
import portfolio9 from '../images/portfolio/portfolio-9.jpg';
import portfolioDetailsImg1 from '../images/portfolio/portfolio-details-1.jpg';
import portfolioDetailsImg2 from '../images/portfolio/portfolio-details-2.jpg';
import portfolioDetailsImg3 from '../images/portfolio/portfolio-details-3.jpg';
import team1 from '../images/team/team-1.jpg';
import team2 from '../images/team/team-2.jpg';
import team3 from '../images/team/team-3.jpg';
import team4 from '../images/team/team-4.jpg';
// api 
const techMahidApi = {
    featuredServices: [
        {
            id: 1,
            icon: <FaDribbble />,
            title: 'lorem ut perspiciatis',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste.'
        },
        {
            id: 2,
            icon: <FaFileAlt />,
            title: 'sed ut perspiciatis',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste.'
        },
        {
            id: 3,
            icon: <FaTachometerAlt />,
            title: 'met ut perspiciatis',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste.'
        },
        {
            id: 4,
            icon: <FaGlobeAsia />,
            title: 'eld ut perspiciatis',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, iste.'
        },
    ],
    skills: [
        {
            id: 1,
            skillName: 'html',
            progress: 95,
        },
        {
            id: 2,
            skillName: 'css',
            progress: 80,
        },
        {
            id: 3,
            skillName: 'javascript',
            progress: 85,
        },
        {
            id: 4,
            skillName: 'react',
            progress: 75,
        },
        {
            id: 5,
            skillName: 'scss',
            progress: 98,
        },
        {
            id: 6,
            skillName: 'bootstrap',
            progress: 92,
        },
        {
            id: 7,
            skillName: 'material-ui',
            progress: 88,
        },
        {
            id: 8,
            skillName: 'api',
            progress: 90,
        },
        {
            id: 9,
            skillName: 'git',
            progress: 88,
        },
        {
            id: 10,
            skillName: 'github',
            progress: 72,
        },
        {
            id: 11,
            skillName: 'jQuery',
            progress: 80,
        },
        {
            id: 12,
            skillName: 'plugins',
            progress: 90,
        },
    ],
    counters: [
        {
            icon: <FaRegSmile />,
            number: "458",
            info: "Happy Clients",
        },
        {
            icon: <FaShoppingBag />,
            number: "585",
            info: "Project",
        },
        {
            icon: <FaHandsHelping />,
            number: "1478",
            info: "Hours of support",
        },
        {
            icon: <FaUsers />,
            number: "50",
            info: "Hard workers",
        },
    ],
    clients: [
        {
            id: 1,
            image: client1,
        },
        {
            id: 2,
            image: client2,
        },
        {
            id: 3,
            image: client3,
        },
        {
            id: 4,
            image: client4,
        },
        {
            id: 5,
            image: client5,
        },
        {
            id: 6,
            image: client6,
        },
    ],
    services: [
        {
            id: 1,
            icon: <FaDribbble />,
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, facere.'
        },
        {
            id: 2,
            icon: <FaFileAlt />,
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, facere.'
        },
        {
            id: 3,
            icon: <FaTachometerAlt />,
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, facere.'
        },
        {
            id: 4,
            icon: <FaGlobeAsia />,
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, facere.'
        },
        {
            id: 5,
            icon: <FaTv />,
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, facere.'
        },
        {
            id: 6,
            icon: <FaArchway />,
            title: 'Lorem Ipsum',
            desc: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, facere.'
        },
    ],
    testimonials: [
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
    ],
    portfolio: [
        {
            id: 1,
            name: 'app1',
            category: 'app',
            image: portfolio1,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'application-1',
                    client: 'ASU company',
                    date: '21 May 2020',
                    url: 'www.example.com',
                },
                title: 'this is application portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },
        {
            id: 2,
            name: 'card2',
            category: 'card',
            image: portfolio2,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'card-2',
                    client: 'ASU company',
                    date: '25 May 2020',
                    url: 'www.example.com',
                },
                title: 'this is card portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },
        {
            id: 3,
            name: 'app2',
            category: 'app',
            image: portfolio3,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'application-2',
                    client: 'ASU company',
                    date: '11 Apr 2020',
                    url: 'www.example.com',
                },
                title: 'this is application portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse',
            }
        },

        {
            id: 4,
            name: 'web1',
            category: 'web',
            image: portfolio4,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'website-1',
                    client: 'ASU company',
                    date: '21 May 2020',
                    url: 'www.example.com',
                },
                title: 'this is website portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },

        {
            id: 5,
            name: 'app3',
            category: 'app',
            image: portfolio5,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'application-3',
                    client: 'ASU company',
                    date: '21 May 2020',
                    url: 'www.example.com',
                },
                title: 'this is application portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },
        {
            id: 6,
            name: 'web3',
            category: 'web',
            image: portfolio6,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'website-3',
                    client: 'Food company',
                    date: '1 Feb 2017',
                    url: 'www.example.com',
                },
                title: 'this is website portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },
        {
            id: 7,
            name: 'card1',
            category: 'card',
            image: portfolio7,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'card-1',
                    client: 'Bd company',
                    date: '10 Jan 2018',
                    url: 'www.example.com',
                },
                title: 'this is card portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },

        {
            id: 8,
            name: 'card3',
            category: 'card',
            image: portfolio8,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'card-3',
                    client: 'a4tech company',
                    date: '22 Dec 2020',
                    url: 'www.example.com',
                },
                title: 'this is an card portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },
        {
            id: 9,
            name: 'web2',
            category: 'web',
            image: portfolio9,
            details: {
                images: [portfolioDetailsImg1, portfolioDetailsImg2, portfolioDetailsImg3],
                info: {
                    category: 'website-1',
                    client: 'Tech company',
                    date: '25 May 2020',
                    url: 'www.example.com',
                },
                title: 'this is website portfolio detail',
                desc: 'Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.',
            }
        },
    ],
    teams: [
        {
            id: 1,
            name: 'Mahid Ahmod',
            image: team1,
            category: 'Web Developer'
        },
        {
            id: 2,
            name: 'Rahim Alom',
            image: team2,
            category: 'Web Designer'
        },
        {
            id: 3,
            name: 'Karim Ahmod',
            image: team3,
            category: 'Product Designer'
        },
        {
            id: 4,
            name: 'Rahul khan',
            image: team4,
            category: 'Data Structer'
        },
    ],
    pricing: [
        {
            id: 1,
            category: 'free',
            price: 0,
            features: [
                'Aida dere',
                'Nec feugiat nisl',
                'Nulla at volutpat dola',
                'Pharetra massa',
                'Massa ultricies mi',
            ]
        },
        {
            id: 2,
            category: 'business',
            price: 19,
            features: [
                'Aida dere',
                'Nec feugiat nisl',
                'Nulla at volutpat dola',
                'Pharetra massa',
                'Massa ultricies mi',
            ]
        },
        {
            id: 3,
            category: 'developer',
            price: 29,
            features: [
                'Aida dere',
                'Nec feugiat nisl',
                'Nulla at volutpat dola',
                'Pharetra massa',
                'Massa ultricies mi',
            ]
        },
        {
            id: 4,
            category: 'ultimate',
            price: 49,
            features: [
                'Aida dere',
                'Nec feugiat nisl',
                'Nulla at volutpat dola',
                'Pharetra massa',
                'Massa ultricies mi',
            ]
        },
    ],
    faq: [
        {
            id: 1,
            ques: 'a erat nam at lectusnon consectetur  urna duis?',
            ans: 'Tempus iaculis urna id volutpFeugiat pretium nibh ipsum consequat. anibh ipsum consequat. at lacus laoreet non curabitur gravida.t lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
        },
        {
            id: 2,
            ques: 'non consectetur a erat nam r a erat nam at lectus urna du at lectus urna duis?',
            ans: 'Feugiat pretium nibh ipsum consequat.pretium nibh ipsum consequat Tempus iaculis urna id volutpat lacus pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
        },
        {
            id: 3,
            ques: 'lectus urna duinon consectetur a erat nam at s?',
            ans: 'Kibh ipsum consequat. Tempus pretium nibh ipseugiat pretium um consequaretium nibh ipseugiat pretium um consequat. Tempus Tempust. Tempus Tempus pretium nibh ipseugiat pretium um consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
        },
        {
            id: 4,
            ques: 'erat namctetur a erat non consectetur a nam at lectus urna duis?',
            ans: 'Meugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
        },
    ],
    contact: [
        {
            id: 1,
            icon: <FaLocationArrow />,
            title: 'our address',
            address: 'A108 Adam Street, New York, NY 535022',
            type: 'address'
        },
        {
            id: 2,
            icon: <FaEnvelope />,
            title: 'email us',
            address: 'mahidahmod2@gmail.com',
            type: 'email'
        },
        {
            id: 3,
            icon: <FaPhone />,
            title: 'call us',
            address: '+1 5589 55488 55',
            type: 'number'
        },
    ],
};
    
export default techMahidApi;