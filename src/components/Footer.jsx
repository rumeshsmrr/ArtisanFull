import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary011 p-8 rounded-t-lg w-screen">
      <motion.div
        className="container flex flex-col lg:flex-row items-start justify-start lg:justify-start lg:items-start"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Left Section */}
        <motion.div
          className="mb-1 lg:mb-0 w-fit flex flex-col items-start"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-3xl font-stylishBold text-white mb-4 text-start">
            Artisan Antique
          </h1>
          <p className="text-white mb-4 w-full lg:w-3/5 text-start">
            We believe that the perfect living space is a mixture of
            practicality and the nostalgic richness of the ancient art forms.
            Artisan Antique is ready to cater that mixture!
          </p>
        </motion.div>

        <motion.nav
          className="w-fit mb-8 md:mb-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ul className="flex flex-col w-full font-stylishBold text-nowrap justify-start md:justify-start md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            {[""].map((item, index) => (
              <motion.li
                key={index}
                className="cursor-pointer text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </motion.div>

      <motion.div
        className="container flex flex-col-reverse md:flex-row justify-start items-end mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full md:w-1/2 flex justify-start h-full items-end"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-sm text-white mt-3">
            Developed by WebMinds <br />
            Copyrights © 2024 ArtisanAntiques <br />
            All Rights reserved
          </p>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 h-full md:space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-full flex justify-start">
            <div className="mb-0">
              <h2 className="text-white font-stylishBold mb-4">Contact Us</h2>
              <p className="text-white">+94 (76) 586-64-93</p>
              <p className="text-white">admin@artisanantique.com</p>
            </div>
          </div>
          <div className="w-full flex justify-start">
            <div className="m-0">
              <h2 className="text-white font-stylishBold mb-4">Location</h2>
              <p className="text-white">
                Nawala,Koswatta <br />
                Colombo, Sri Lanka.
              </p>
            </div>

            <div className="flex flex-col justify-start">
              {/* <h2 className="text-white font-stylishBold mb-4">
                Languages
              </h2> */}
              {/* <div className="flex space-x-2 text-white">
                {["En", "Es", "Fr", "De", "Ru"].map((lang, index) => (
                  <motion.p
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {lang}
                  </motion.p>
                ))}
              </div> */}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
