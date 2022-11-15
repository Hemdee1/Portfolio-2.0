import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../data";

const Home = () => {
  return (
    <motion.section
      className="flex w-full h-full items-center justify-between flex-col-reverse md:flex-row font-Poppins px-4"
      {...fadeUp}
    >
      <div className="flex-1 flex items-center justify-center text-center flex-col px-0 md:px-8 lg:px-16">
        <h2 className="title leading-relaxed">
          Hi 👋 I am <br />
          Muhyideen Olayemi
        </h2>
        <h3 className="text-lg md:text-xl xl:text-3xl mt-4 font-semibold text-darkblack">
          A Fullstack (MERN) Developer. 💻
        </h3>
        <div className=" mt-4">
          <span className="text-blue text-sm md:text-base">{"<help> "}</span>
          <span className="text-gray text-sm md:text-base">
            How can I help you?
          </span>
          <span className="text-blue text-sm md:text-base">{" </help>"}</span>
        </div>
        <div className="mt-4 flex flex-wrap justify-center items-center gap-8">
          <Link to="/about">
            <button className="btn">Explore More</button>
          </Link>
          <button className="btn">Open CV</button>
        </div>
      </div>
      <div className="md:flex-1 flex items-center justify-center rounded-lg p-4 w-[80%] max-h-[40rem] md:h-[80%] mt-8 md:mt-0 md:mr-4 overflow-hidden bg-fade-red my-shadow2 move">
        <img
          src="/images/world.png"
          alt="avatar"
          className="w-52 md:w-[25rem] 2xl:w-[35rem] h-52 md:h-[25rem] 2xl:h-[35rem] object-cover"
        />
      </div>
    </motion.section>
  );
};

export default Home;
