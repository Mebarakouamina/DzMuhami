import React, { useState } from 'react';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import "./Hero.css";
import Matches from '../matches/matches';


const Hero = ({ clientId }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const searchData = {};

    if (name) {
      searchData.name = name;
    }

    if (location) {
      searchData.address = location;
    }

    if (specialty) {
      searchData.specialty = specialty;
    }

    console.log('Search Data:', searchData);

    const response = await fetch('http://127.0.0.1:8000/recherche', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchData),
    });

    const data = await response.json();
    console.log('Response from Backend:', data);

    // Mettez à jour les résultats de la recherche
    setSearchResults(data);
     console.log('Hero - searchResults:', data);
  };

  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <div className="orange-circle" />
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "ease-in",
                }}
              ></motion.h1>

              Find <br />
              Your ideal
              <br /> Partner
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>Your Legally in Pursuit of Justice: Expert Guidance,</span>
            <span> Compassionate Representation, and a Commitment to Your Rights</span>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flexCenter search-bar">
              <div class="type">
                <i class="fa-solid fa-house"></i>
                <input
                  type="text"
                  name="Full name"
                  id="Full name"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div class="localization">
                <input
                  type="text"
                  placeholder="Localization"
                  name="type"
                  id="type"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>

              <div className="Field">
                <i className="fa-solid fa-dollar-sign"></i>
                <input
                  type="text"
                  name="specialty"
                  id="specialty"
                  placeholder="Specialty"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </div>

              <button type="submit" className="buttn">
                Search
              </button>
            </div>
          </form>

          
          
  

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Winning case</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Satisfied Client </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Awards Winning</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./p4.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
      
      <Matches searchResults={searchResults}  />
          {console.log('itdou:', searchResults)}
          
    </section>
  );
};



export default Hero;