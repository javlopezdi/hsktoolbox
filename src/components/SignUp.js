import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setCurrentRoute } from "../actions";
import { setIsDialogOpen } from "../actions";
import { signUp } from "../actions";

import SignUpForm from "./SignUpForm";
import SignInDialog from "./SignInDialog";

const SignUp = ({ setCurrentRoute, setIsDialogOpen, signUp }) => {
  useEffect(() => {
    setCurrentRoute(window.location.pathname);
  }, [setCurrentRoute]);

  const onFormSubmit = (formValues) => {
    signUp();
  };

  return (
    <React.Fragment>
      <div className="grid grid-cols-2 h-screen font-sans">
        <div className="flex flex-col items-center justify-center">
          <div className="mx-auto w-72 px-5 py-8 shadow-lg">
            <h3 className="text-xl font-semibold pb-8">Sign Up</h3>
            <SignUpForm onFormSubmit={onFormSubmit} />
          </div>
          <div className="mx-auto w-72 px-4 py-8">
            <p>If you already have an account</p>
            <button
              onClick={() => setIsDialogOpen(true)}
              className="text-center text-blueCrayola"
            >
              Sign In
            </button>
          </div>
        </div>
        <div className="bg-signUp-pattern bg-cover bg-center m-3 rounded-xl">
          <div className="mx-auto w-max flex flex-col justify-center h-full">
            <div>
              <h2 className="text-semiWhite font-semibold text-center text-7xl flex flex-col">
                <span>Get Ready to</span>
                <span>Ace your HSK!</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <SignInDialog />
    </React.Fragment>
  );
};

export default connect(null, { setCurrentRoute, setIsDialogOpen, signUp })(
  SignUp
);
