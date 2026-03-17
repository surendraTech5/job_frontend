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
        <Wrapper
  ref={heroRef}
  className="relative overflow-hidden flex items-center justify-center text-center text-white"
>
  {/* Background Image */}
  <img
    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80"
    alt="Global Recruitment"
    className="absolute inset-0 w-full h-full object-cover"
  />

  <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-blue-900/85 to-blue-800/90"></div>

  <div className="relative z-10 max-w-5xl px-6 py-24">
    <div className="inline-flex items-center gap-2 bg-blue-700/30 backdrop-blur-md px-6 py-2 rounded-full border border-blue-400/30 mb-6">
      <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
      <span className="text-sm tracking-wide">
        Trusted Global Recruitment Partner
      </span>
    </div>
    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
      Connecting Global Talent with <br />
      <span className="text-blue-400">Leading Companies</span>
    </h1>
    <p className="text-lg md:text-xl text-blue-100 mb-6">
      Helping businesses hire skilled professionals across India,
      United States, United Kingdom, and UAE.
    </p>
    <p className="text-blue-200 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
      <strong className="text-white">Prisha Solutions</strong> is a trusted recruitment and staffing partner connecting top talent with leading organizations. 
      We help companies hire smarter and professionals build meaningful global careers.
    </p>

    <div className="flex flex-wrap justify-center gap-5">
      <Link
        to="/all-jobs"
        className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-xl font-semibold shadow-xl transition transform hover:scale-105"
      >
        <FaBriefcase className="inline mr-2" />
        Hire Talent
      </Link>

      <Link
        to="/register"
        className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 rounded-xl font-semibold transition"
      >
        <FaUserTie className="inline mr-2" />
        Submit Resume
      </Link>

      <Link
        to="/login"
        className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-xl font-semibold shadow-xl transition transform hover:scale-105"
      >
        <FaHandshake className="inline mr-2" />
        Partner With Us
      </Link>
    </div>

  </div>
        </Wrapper>
        {/* About Us - section */}
        <section className="relative py-28 px-6 bg-white overflow-hidden">
  <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
  <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-100 rounded-full blur-3xl opacity-40"></div>
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        About <span className="text-blue-600">Prisha Solutions</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        A trusted recruitment and staffing partner connecting exceptional talent 
        with forward-thinking organizations worldwide.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <FaUsers className="text-3xl text-blue-600" />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Who We Are
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Prisha Solutions specializes in sourcing high-quality professionals 
          across multiple industries, helping organizations build strong and 
          future-ready teams.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          We focus on delivering strategic hiring solutions that ensure the 
          right talent meets the right opportunity.
        </p>
      </div>
      <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
        <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <FaCheckCircle className="text-3xl text-green-600" />
        </div>

        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Mission
        </h3>

        <p className="text-gray-600 leading-relaxed">
          To simplify recruitment by providing efficient, reliable, and 
          results-driven staffing solutions that help companies scale with confidence.
        </p>
      </div>
      <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
        <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
          <FaGlobe className="text-3xl text-purple-600" />
        </div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
          Our Vision
        </h3>
        <p className="text-gray-600 leading-relaxed">
          To become a globally recognized recruitment partner known for trust, 
          excellence, and long-term workforce transformation.
        </p>
      </div>
    </div>
  </div>
</section>
            {/* Our Services - section */}
<section className="services py-28 px-6 bg-gray-50 relative overflow-hidden">
  
  <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-5xl font-bold text-gray-900 mb-6">
        Our <span className="text-blue-600">Services</span>
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-500 mx-auto mb-6 rounded-full"></div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Comprehensive recruitment and staffing solutions designed to help
        organizations build high-performing teams with confidence.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
        <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-300">
          <FaBriefcase className="text-3xl text-blue-600 group-hover:text-white transition" />
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Permanent Staffing
        </h3>

        <p className="text-gray-600 leading-relaxed">
          We help organizations hire full-time professionals who align with
          long-term business goals, culture, and performance expectations.
        </p>
      </div>
      <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
        <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-all duration-300">
          <FaHandshake className="text-3xl text-green-600 group-hover:text-white transition" />
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Contract Staffing
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Flexible staffing solutions tailored for project-based roles,
          seasonal demand, and short-term workforce requirements.
        </p>
      </div>
      <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
        <div className="w-16 h-16 bg-purple-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all duration-300">
          <FaSearch className="text-3xl text-purple-600 group-hover:text-white transition" />
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Executive Search
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Strategic search services to identify and recruit senior leaders
          and highly specialized professionals for critical positions.
        </p>
      </div>
      <div className="group bg-white p-10 rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
        <div className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all duration-300">
          <FaBuilding className="text-3xl text-orange-600 group-hover:text-white transition" />
        </div>

        <h3 className="text-2xl font-semibold mb-4 text-gray-900">
          Recruitment Consulting
        </h3>

        <p className="text-gray-600 leading-relaxed">
          Expert guidance to optimize hiring strategies, streamline
          recruitment processes, and improve talent acquisition outcomes.
        </p>
      </div>

    </div>
  </div>
</section>
            {/* Industries We Serve - section */}
<section className="industries py-28 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
        Industries <span className="text-blue-600">We Serve</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Delivering specialized recruitment expertise across diverse industries,
        ensuring the right talent powers your business growth.
      </p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        "Information Technology",
        "Engineering",
        "Manufacturing",
        "Finance & Banking",
        "Healthcare",
        "Aerospace & Defense",
        "Consulting & Professional Services"
      ].map((industry, index) => (
        <div
          key={index}
          className="group bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-1 h-10 bg-blue-600 rounded-full group-hover:h-14 transition-all duration-300"></div>

            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition">
              {industry}
            </h3>

          </div>
        </div>
      ))}
    </div>
  </div>
</section>
            {/* Global Hiring Locations - section */}
<section className="locations py-28 bg-gray-50 text-center">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Global <span className="text-blue-600">Hiring Locations</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We provide recruitment solutions across multiple international markets,
        connecting organizations with exceptional global talent.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          flag: "🇮🇳",
          name: "India",
          desc: "Emerging tech hub with world-class talent",
          gradient: "from-blue-100 via-blue-50 to-white"
        },
        {
          flag: "🇺🇸",
          name: "United States",
          desc: "Global innovation and leadership market",
          gradient: "from-red-100 via-red-50 to-white"
        },
        {
          flag: "🇬🇧",
          name: "United Kingdom",
          desc: "Established global business center",
          gradient: "from-green-100 via-green-50 to-white"
        },
        {
          flag: "🇦🇪",
          name: "UAE",
          desc: "Rapidly growing international hub",
          gradient: "from-yellow-100 via-yellow-50 to-white"
        }
      ].map((location, index) => (
        <div
          key={index}
          className={`group bg-gradient-to-br ${location.gradient} p-10 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3`}
        >
          <div className="text-6xl mb-5">{location.flag}</div>

          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            {location.name}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {location.desc}
          </p>
        </div>
      ))}

    </div>
    <div className="mt-16">
      <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
        We help companies connect with skilled professionals from diverse
        talent pools across these regions, ensuring the right fit for
        long-term business success.
      </p>
    </div>

  </div>
</section>
            {/* Why Choose Prisha Solutions */}
<section className="why-choose py-28 bg-gray-100">
  <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
    <div className="text-center mb-20">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        Why Choose <span className="text-blue-600">Prisha Solutions</span>
      </h2>

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Experience the difference with our proven recruitment expertise,
        global reach, and commitment to delivering exceptional talent solutions.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

      {[
        {
          icon: <FaGlobe className="text-3xl text-blue-600" />,
          title: "Global Talent Network",
          desc: "Access to a vast network of pre-screened, qualified candidates worldwide."
        },
        {
          icon: <FaCheckCircle className="text-3xl text-green-600" />,
          title: "Fast & Efficient",
          desc: "Streamlined hiring process that reduces time-to-hire and operational costs."
        },
        {
          icon: <FaUsers className="text-3xl text-purple-600" />,
          title: "Pre-screened Candidates",
          desc: "Carefully vetted professionals ready to contribute from day one."
        },
        {
          icon: <FaBriefcase className="text-3xl text-orange-600" />,
          title: "Industry Expertise",
          desc: "Deep cross-sector knowledge ensuring precise talent matching."
        },
        {
          icon: <FaHandshake className="text-3xl text-red-600" />,
          title: "Transparent Process",
          desc: "Clear communication and ethical recruitment practices at every stage."
        },
        {
          icon: <FaBuilding className="text-3xl text-teal-600" />,
          title: "Proven Track Record",
          desc: "Successful placements across global markets and diverse industries."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="group bg-white p-10 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300"
        >
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition">
            {item.icon}
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>
            {/* for-employers and for-candidates sections */}
<section className="relative py-24 bg-gradient-to-br from-white via-blue-50 to-indigo-50 overflow-hidden">
  <div className="absolute top-[-120px] right-[-100px] w-[350px] h-[350px] bg-blue-400/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-150px] left-[-120px] w-[400px] h-[400px] bg-indigo-400/20 rounded-full blur-3xl"></div>
  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div>
        <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-5 shadow-sm">
          For Employers
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
          Hire the Right Talent <br />
          <span className="text-blue-600">With Confidence</span>
        </h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
         Finding the right talent is critical for business success. Prisha Solutions helps organizations identify and hire skilled professionals quickly and efficiently.
        </p>
        <div className="space-y-6">
          {[
            {
              icon: <FaSearch />,
              title: "Candidate Sourcing",
              desc: "Extensive database and active networking to find the best matches.",
              bg: "bg-blue-600",
            },
            {
              icon: <FaCheckCircle />,
              title: "Resume Screening",
              desc: "Thorough evaluation to ensure quality candidates.",
              bg: "bg-green-600",
            },
            {
              icon: <FaUsers />,
              title: "Interview Coordination",
              desc: "Seamless scheduling and facilitation of interviews.",
              bg: "bg-purple-600",
            },
            {
              icon: <FaHandshake />,
              title: "Hiring Support",
              desc: "End-to-end assistance through the complete hiring process.",
              bg: "bg-orange-600",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 group p-3 rounded-xl hover:bg-white hover:shadow-md transition duration-300"
            >
              <div className={`w-10 h-10 ${item.bg} text-white rounded-xl flex items-center justify-center text-sm shadow-sm group-hover:scale-105 transition`}>
                {item.icon}
              </div>
              <div>
                <h4 className="font-semibold text-base text-gray-900">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-sm mt-1">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80"
            alt="Team collaboration"
            className="rounded-2xl shadow-xl w-full object-cover group-hover:scale-105 transition duration-500"
          />
        </div>
        <div className="absolute -bottom-6 -left-6 bg-white/85 backdrop-blur-lg border border-white/40 p-5 rounded-2xl shadow-xl w-44">
          <h4 className="text-2xl font-bold text-blue-600 mb-1">5000+</h4>
          <p className="text-gray-700 text-sm font-medium">
            Successful Placements
          </p>
        </div>

      </div>

    </div>
  </div>
</section>
            {/* for-candidates section */}
           <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">

  {/* Decorative Blurs */}
  <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-green-300/20 rounded-full blur-3xl"></div>
  <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-emerald-300/20 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

      {/* LEFT IMAGE */}
      <div className="order-2 lg:order-1 relative group">
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1000&q=80"
          alt="Professional success" 
          className="rounded-2xl shadow-xl w-full object-cover group-hover:scale-105 transition duration-500"
        />

        {/* Soft Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-green-900/10 to-transparent"></div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="order-1 lg:order-2">

        <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-xs font-semibold mb-5 shadow-sm">
          Career Growth Starts Here
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Find Your Next <span className="text-green-600">Career Opportunity</span>
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We connect talented professionals with leading companies across industries. 
          Your dream job is closer than you think.
        </p>

        {/* Glass Offer Card */}
        <div className="backdrop-blur-lg bg-white/80 border border-white/50 p-6 rounded-2xl shadow-lg mb-8">

          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            What We Offer:
          </h4>

          <ul className="space-y-4">
            {[
              "Personalized job matching",
              "Career guidance and expert advice",
              "Interview preparation support",
              "Salary negotiation assistance",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">
                  ✓
                </div>
                <span className="text-gray-700 text-sm">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-gray-700 text-base leading-relaxed">
          Submit your resume and our recruitment experts will connect you with 
          opportunities aligned with your skills and long-term goals.
        </p>

      </div>
    </div>
  </div>
</section>
            {/* founder section */}
        <section className="relative py-16 bg-gradient-to-b from-white via-gray-50 to-white">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        Meet Our Founder
      </h2>
      <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="relative flex justify-center">
        <div className="relative">
          
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
            alt="Prakhar Gupta - Founder"
            className="rounded-2xl shadow-lg w-full max-w-sm object-cover"
          />

          <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-3 rounded-xl shadow-md">
            <FaUserTie className="text-lg" />
          </div>

        </div>
      </div>
      <div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Prakhar Gupta
        </h3>

        <p className="text-base text-blue-600 font-semibold mb-4">
          Founder – Prisha Solutions
        </p>

        <p className="text-base text-gray-600 mb-4 leading-relaxed">
          Prakhar Gupta founded Prisha Solutions with the vision of helping organizations 
          hire the right talent while helping professionals grow in their careers.
        </p>

        <p className="text-base text-gray-600 mb-6 leading-relaxed">
          With strong expertise in recruitment and talent sourcing, he focuses on delivering reliable staffing solutions to companies across India, US, UK, and UAE.
        </p>
        <div className="bg-white border-l-4 border-blue-600 p-5 rounded-xl shadow-sm">
          <p className="text-gray-800 italic text-sm leading-relaxed">
            "Our mission is to bridge the gap between exceptional talent and world-class opportunities, creating win-win situations for both employers and job seekers"
          </p>
        </div>

      </div>
    </div>
  </div>
</section>
            {/* contact */}
           <section className="py-16 bg-blue-700 text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get In Touch
      </h2>
      <p className="text-lg text-blue-100 max-w-2xl mx-auto">
        Ready to transform your hiring process? Let's connect and discuss your recruitment needs..
      </p>
    </div>
    <div className="
      bg-gradient-to-br from-white via-blue-50 to-indigo-50
      text-gray-800 
      rounded-3xl 
      shadow-2xl 
      border border-blue-100
      p-8 md:p-12
      transition-all duration-300
      hover:shadow-3xl
    ">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        <div className="text-center md:text-left md:border-r md:pr-10 border-blue-100">

          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Prisha Solutions
          </h3>

          <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">
            Founder
          </p>

          <p className="font-semibold text-blue-700 text-lg">
            Prakhar Gupta
          </p>

          <div className="mt-4 w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto md:mx-0"></div>

        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 group">

          <div className="
            w-12 h-12 
            bg-gradient-to-br from-blue-100 to-indigo-100
            text-blue-700 
            rounded-xl 
            flex items-center justify-center
            transition-all duration-300
            group-hover:scale-110
          ">
            <FaPhone />
          </div>

          <div>
            <p className="text-sm text-gray-500">Phone</p>
            <p className="font-semibold text-gray-800">
              +91 9927590907
            </p>
          </div>

        </div>
        <div className="flex items-center justify-center md:justify-start gap-4 group">

          <div className="
            w-12 h-12 
            bg-gradient-to-br from-blue-100 to-indigo-100
            text-blue-700 
            rounded-xl 
            flex items-center justify-center
            transition-all duration-300
            group-hover:scale-110
          ">
            <FaEnvelope />
          </div>

          <div>
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold text-gray-800 break-all">
              prakhar0987gupta@gmail.com
            </p>
          </div>

        </div>

      </div>
      <div className="mt-10 pt-6 border-t border-blue-100 text-center">
        <p className="text-sm text-gray-600">
          Serving clients across India, US, UK, and UAE with trusted recruitment solutions.
        </p>
      </div>

    </div>

  </div>

</section>
        </>
    );
};

export default Landing;
