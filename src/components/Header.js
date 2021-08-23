import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setIsDialogOpen } from "../actions";
import { signOut } from "../actions";

import Logo from "./svgs/Logo";
import SignInDialog from "./SignInDialog";

const Header = ({
  currentRoute,
  setIsDialogOpen,
  isSignedIn,
  signOut,
  selectedHsk,
}) => {
  const renderNavOptions = () => {
    if (!isSignedIn) {
      return (
        <div
          className={`${
            currentRoute === "/signup" ? "hidden" : "md:flex"
          } space-x-8 hidden`}
        >
          <button
            onClick={() => setIsDialogOpen(true)}
            className="font-semibold"
          >
            Sign In
          </button>

          <Link to="/signup">
            <button className="font-semibold">Sign Up</button>
          </Link>
        </div>
      );
    }
    return (
      <div
        className={`${
          currentRoute === "/signup" ? "hidden" : "md:flex"
        } space-x-8 hidden`}
      >
        <Link to={`/${selectedHsk}/progress`}>
          <button className="font-semibold">Progress</button>
        </Link>
        <Link to={`/${selectedHsk}/practice`}>
          <button className="font-semibold">Practice</button>
        </Link>
        <Link to="/usersettings">
          <button className="font-semibold">Settings</button>
        </Link>
        <button onClick={signOut} className="font-semibold">
          Sign Out
        </button>
      </div>
    );
  };

  const renderSignInDialog = () => {
    if (currentRoute !== "/signup") {
      return <SignInDialog />;
    }
    return null;
  };

  return (
    <React.Fragment>
      <nav
        className={`${
          currentRoute === "/signup" || currentRoute === "/"
            ? ""
            : "bg-semiWhite"
        } text-richBlack fixed justify-between w-full font-sans flex flex-row py-2 px-8 text-lg items-center z-20`}
      >
        {/* Logo */}
        <Link to="/">
          <button className="flex flex-row space-x-4 items-center font-bold">
            <Logo className="w-28 h-14" />
          </button>
        </Link>
        {/* Nav options */}
        {renderNavOptions()}
      </nav>
      {renderSignInDialog()}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    currentRoute: state.route.currentRoute,
    isSignedIn: state.auth.isSignedIn,
    selectedHsk: state.hsk.selectedHsk,
  };
};

export default connect(mapStateToProps, { setIsDialogOpen, signOut })(Header);
