import { auth } from "../firebase";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen-body">
        <h1>Edit Profile</h1>
        <div className="profileScreen-info">
          <img
            src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
            alt=""
          />
          <div className="profileScreen-details">
            <h2>{user.email}</h2>
            <div className="profileScreen-plans">
              <h3>Plans</h3>

              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen-signOut"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
