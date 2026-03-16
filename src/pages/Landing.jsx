import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import { FaUsers, FaHandshake, FaSearch, FaBriefcase, FaGlobe, FaCheckCircle, FaBuilding, FaUserTie, FaPhone, FaEnvelope } from "react-icons/fa";
import Navbar from "../components/shared/Navbar";

const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef}>
                <div className="hero-content">
                    <div className="text-content">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                            Connecting Global Talent with <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Leading Companies</span>
                        </h1>
                        <p className="text-lg text-gray-600 mb-4">
                            Helping businesses hire skilled professionals across India, United States, United Kingdom, and UAE.
                        </p>
                        <p className="text-gray-700 mb-8">
                            Prisha Solutions is a trusted recruitment and staffing partner specializing in sourcing top talent for companies across multiple industries. We help organizations hire faster and smarter while helping professionals find meaningful career opportunities worldwide.
                        </p>
                        <div className="btn-grp flex flex-col sm:flex-row gap-4">
                            <Link className="btn bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" to="/all-jobs">
                                <FaBriefcase className="inline mr-2" /> Hire Talent
                            </Link>
                            <Link className="btn bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" to="/register">
                                <FaUserTie className="inline mr-2" /> Submit Resume
                            </Link>
                            <Link className="btn bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg" to="/login">
                                <FaHandshake className="inline mr-2" /> Partner With Us
                            </Link>
                        </div>
                    </div>
                    <div className="placeholder">
                        <img 
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                            alt="Global Recruitment" 
                            className="rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </Wrapper>
            <section className="about-us py-20 px-8 bg-gradient-to-br from-blue-50 to-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">About Us</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">Building bridges between exceptional talent and world-class organizations</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaUsers className="text-3xl text-blue-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Who We Are</h3>
                            <p className="text-gray-700 leading-relaxed">Prisha Solutions is a global recruitment and staffing firm dedicated to helping organizations build strong teams and helping professionals find the right career opportunities.</p>
                            <p className="text-gray-700 leading-relaxed mt-4">We specialize in identifying highly skilled professionals and connecting them with companies that value talent, innovation, and growth.</p>
                            <p className="text-gray-700 leading-relaxed mt-4">Our goal is to simplify hiring by providing reliable and efficient recruitment solutions for businesses worldwide.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-3xl text-green-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Mission</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">To connect talented professionals with organizations where they can grow and create value.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaGlobe className="text-3xl text-purple-600" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Vision</h3>
                            <p className="text-gray-700 text-lg leading-relaxed">To become a trusted global recruitment partner for companies across multiple industries.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="services py-20 px-8 bg-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">Comprehensive recruitment solutions tailored to your business needs</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
                                <FaBriefcase className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Permanent Staffing</h3>
                            <p className="text-gray-700 leading-relaxed">We help organizations hire full-time professionals who align with their long-term goals and company culture.</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors">
                                <FaHandshake className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Contract Staffing</h3>
                            <p className="text-gray-700 leading-relaxed">Flexible staffing solutions for project-based roles and short-term hiring needs.</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-600 transition-colors">
                                <FaSearch className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Executive Search</h3>
                            <p className="text-gray-700 leading-relaxed">We assist organizations in hiring senior leaders and specialized professionals for critical roles.</p>
                        </div>
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                            <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-600 transition-colors">
                                <FaBuilding className="text-3xl text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-gray-900">Recruitment Consulting</h3>
                            <p className="text-gray-700 leading-relaxed">Helping businesses improve hiring strategies and recruitment processes.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="industries py-20 px-8 bg-gradient-to-br from-gray-50 to-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">Delivering exceptional recruitment solutions across diverse sectors</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {[
                            "Information Technology",
                            "Engineering",
                            "Manufacturing",
                            "Finance & Banking",
                            "Healthcare",
                            "Aerospace & Defense",
                            "Consulting & Professional Services"
                        ].map((industry, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry}</h3>
                                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="locations py-20 px-8 bg-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Global Hiring Locations</h2>
                    <p className="text-xl text-gray-600 mb-8">We provide recruitment services across multiple international markets.</p>
                    <p className="text-lg text-gray-700 mb-16">Our key hiring regions include:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-6xl mb-4">🇮🇳</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">India</h3>
                            <p className="text-gray-700">Emerging tech hub with world-class talent</p>
                        </div>
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-6xl mb-4">🇺🇸</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">United States</h3>
                            <p className="text-gray-700">Innovation capital with diverse opportunities</p>
                        </div>
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-6xl mb-4">🇬🇧</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">United Kingdom</h3>
                            <p className="text-gray-700">Historic business center with global reach</p>
                        </div>
                        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="text-6xl mb-4">🇦🇪</div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">UAE</h3>
                            <p className="text-gray-700">Dynamic market with growing opportunities</p>
                        </div>
                    </div>
                    <p className="text-lg text-gray-700 mt-12 max-w-4xl mx-auto">We help companies connect with talented professionals from diverse talent pools across these regions, ensuring the perfect match for your organizational needs.</p>
                </div>
            </section>
            <section className="why-choose py-20 px-8 bg-gradient-to-br from-blue-50 to-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Prisha Solutions</h2>
                    <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">Experience the difference with our proven recruitment expertise</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaGlobe className="text-3xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Global Talent Network</h3>
                            <p className="text-gray-700">Access to a vast network of pre-screened, qualified candidates worldwide</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaCheckCircle className="text-3xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Fast & Efficient</h3>
                            <p className="text-gray-700">Streamlined hiring process that saves time and reduces costs</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaUsers className="text-3xl text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Pre-screened Candidates</h3>
                            <p className="text-gray-700">Thoroughly vetted professionals ready to contribute from day one</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaBriefcase className="text-3xl text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Industry Expertise</h3>
                            <p className="text-gray-700">Deep knowledge across multiple sectors for precise matching</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaHandshake className="text-3xl text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Transparent Process</h3>
                            <p className="text-gray-700">Clear communication and honest recruitment practices</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <FaBuilding className="text-3xl text-teal-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-900">Proven Track Record</h3>
                            <p className="text-gray-700">Years of successful placements across global markets</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="for-employers py-20 px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">For Employers</h2>
                            <h3 className="text-3xl font-semibold text-blue-600 mb-6">Hire the Right Talent</h3>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                Finding the right talent is critical for business success. Prisha Solutions helps organizations identify and hire skilled professionals quickly and efficiently.
                            </p>
                            <div className="space-y-4 mb-8">
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <FaSearch className="text-blue-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Candidate Sourcing</h4>
                                        <p className="text-gray-700">Extensive database and active networking to find the best matches</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <FaCheckCircle className="text-green-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Resume Screening</h4>
                                        <p className="text-gray-700">Thorough evaluation to ensure quality candidates</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <FaUsers className="text-purple-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Interview Coordination</h4>
                                        <p className="text-gray-700">Seamless scheduling and facilitation of interviews</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                                        <FaHandshake className="text-orange-600" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Hiring Support</h4>
                                        <p className="text-gray-700">End-to-end assistance through the complete hiring process</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Team collaboration" 
                                className="rounded-2xl shadow-2xl w-full"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-2xl shadow-xl">
                                <h4 className="text-xl font-bold mb-2">5000+</h4>
                                <p className="text-sm">Successful Placements</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="for-candidates py-20 px-8 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <img 
                                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                                alt="Professional success" 
                                className="rounded-2xl shadow-2xl w-full"
                            />
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">For Candidates</h2>
                            <h3 className="text-3xl font-semibold text-green-600 mb-6">Find Your Next Career Opportunity</h3>
                            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                                We connect professionals with leading companies across multiple industries and locations. Your dream job is just a click away.
                            </p>
                            <div className="bg-white p-6 rounded-xl shadow-lg mb-8">
                                <h4 className="text-xl font-semibold text-gray-900 mb-4">What We Offer:</h4>
                                <ul className="space-y-3">
                                    <li className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-3" />
                                        <span className="text-gray-700">Personalized job matching</span>
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-3" />
                                        <span className="text-gray-700">Career guidance and advice</span>
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-3" />
                                        <span className="text-gray-700">Interview preparation support</span>
                                    </li>
                                    <li className="flex items-center">
                                        <FaCheckCircle className="text-green-500 mr-3" />
                                        <span className="text-gray-700">Salary negotiation assistance</span>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 text-lg">
                                Submit your resume and our recruitment team will match you with opportunities that align with your skills and career goals.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="founder py-20 px-8 bg-white text-center">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl font-bold text-gray-900 mb-16">Meet Our Founder</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                                alt="Prakhar Gupta - Founder" 
                                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-full shadow-xl">
                                <FaUserTie className="text-2xl" />
                            </div>
                        </div>
                        <div className="text-left">
                            <h3 className="text-3xl font-bold text-gray-900 mb-4">Prakhar Gupta</h3>
                            <p className="text-xl text-blue-600 font-semibold mb-6">Founder – Prisha Solutions</p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                Prakhar Gupta founded Prisha Solutions with the vision of helping organizations hire the right talent while helping professionals grow in their careers.
                            </p>
                            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                                With strong expertise in recruitment and talent sourcing, he focuses on delivering reliable staffing solutions to companies across India, US, UK, and UAE.
                            </p>
                            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl">
                                <p className="text-gray-800 font-medium italic">
                                    "Our mission is to bridge the gap between exceptional talent and world-class opportunities, creating win-win situations for both employers and job seekers."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact py-20 px-8 bg-gradient-to-br from-blue-600 to-blue-800 text-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-8">Get In Touch</h2>
                    <p className="text-xl mb-12 opacity-90">Ready to transform your hiring process? Let's connect and discuss your recruitment needs.</p>
                    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                        <h3 className="text-2xl font-bold mb-6">Prisha Solutions</h3>
                        <p className="text-lg mb-4">Founder: <span className="font-semibold">Prakhar Gupta</span></p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
                            <div className="flex items-center">
                                <FaPhone className="text-2xl mr-3" />
                                <span className="text-lg">+91 9927590907</span>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-2xl mr-3" />
                                <span className="text-lg">prakhar0987gupta@gmail.com</span>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-white border-opacity-20">
                            <p className="text-sm opacity-75">Serving clients globally with excellence in recruitment</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
