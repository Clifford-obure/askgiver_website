/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import styles from "../../../styles/styles";

// import backgroundImage from "../../../assets/hero.jpg";
import backgroundImage from "../../../Assests/hero.jpg";

const Hero = () => {
  return (
    <div
      className={`relative min-h-[70vh] 800px:min-h-[80vh] w-full bg-no-repeat ${styles.noramlFlex}`}
      style={
        {
          // backgroundImage: `url(${backgroundImage})`,
        }
      }
    >
      <div className={`${styles.section} w-[90%] 800px:w-[60%]`}>
        <h1
          className={`text-[35px] leading-[1.2] 800px:text-[60px] text-[#121257] font-[600] capitalize`}
        >
          Best Donations And <br /> Create Your Community
        </h1>
        <p className="pt-5 text-[16px] font-[Poppins] font-[400] text-[#121257]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae,
          assumenda? Quisquam itaque <br /> exercitationem labore vel, dolore
          quidem asperiores, laudantium temporibus soluta optio consequatur{" "}
          <br /> aliquam deserunt officia. Dolorum saepe nulla provident.
        </p>
        <Link to="/donations" className="inline-block">
          <div className={`${styles.button} mt-5`}>
            <span className="text-[#fff] font-[Poppins] text-[18px]">
              Request Now
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
