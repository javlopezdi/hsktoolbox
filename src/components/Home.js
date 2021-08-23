import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentRoute } from "../actions";

const Home = ({ setCurrentRoute }) => {
  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [setCurrentRoute]);
  return (
    <div className="bg-hero-pattern h-screen bg-cover bg-center font-sans text-richBlack">
      {/* Container */}
      <div className="w-max mx-auto h-full flex flex-col justify-center">
        <div>
          <h2 className="text-6xl font-semibold py-8">
            The best tools to practice for your HSK
          </h2>
        </div>
        <div>
          <h3 className="text-4xl py-8">
            Just Sign Up and start practicing, all your progress is saved!
          </h3>
        </div>
        <Link to="/signup" className="mb-32 w-max">
          <button className=" text-semiWhite rounded bg-blueCrayola py-3 px-5 text-2xl font-semibold transition duration-200 transform hover:-translate-y-0.5 hover:shadow-md">
            Start practicing!
          </button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentRoute: state.route.currentRoute };
};

export default connect(mapStateToProps, { setCurrentRoute })(Home);
