import { useState } from "react";
import { Link } from "react-router-dom";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PersonIcon from "@material-ui/icons/Person";
import style from "./style.module.css";

const icon__selected__profile = {
  fontSize: "2rem",
  color: "#6d597a",
};

const icon__selected__feed = {
  fontSize: "2rem",
  color: "#e56b6f",
};

const icon__unselected = {
  fontSize: "2rem",
  color: "#EFD3D7",
};

const Navbar = () => {
  const [navbarState, setNavbarState] = useState("");

  return (
    <div className={style.navbar}>
      <div className={style.navbar_grid}>
        <div className={style.title}>
          <p className={style.text}>IMGnation</p>
        </div>
        <div className={style.profile}>
          <Link to="/profile">
            <div className={style.inlineBlock}>
              <div
                onClick={() => {
                  setNavbarState("profile");
                }}
                className={
                  navbarState === "profile"
                    ? style.iconBackground__selected__profile
                    : style.iconBackground__profile
                }
              >
                <div className={style.horizontal_center}>
                  <PersonIcon
                    style={
                      navbarState === "profile"
                        ? icon__selected__profile
                        : icon__unselected
                    }
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className={style.feed}>
          <Link to="/feed">
            <div className={style.inlineBlock}>
              <div
                onClick={() => {
                  setNavbarState("feed");
                }}
                className={
                  navbarState === "feed"
                    ? style.iconBackground__selected__feed
                    : style.iconBackground__feed
                }
              >
                <div className={style.horizontal_center}>
                  <PhotoLibraryIcon
                    style={
                      navbarState === "feed"
                        ? icon__selected__feed
                        : icon__unselected
                    }
                  />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
