import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Profile = () => {
    const {user} = useAuth0();
    const {name, picture, email} = user;


    return (
        <div>
          <div className="profile-div">
            <div className="profile-picture-div">
              <img
                src={picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
              />
            </div>
            <div className="profile-name-div">
              <h2>{name}</h2>
              <p className="profile-email">{email}</p>
            </div>
          </div>

          {/* <div className="row">
            <pre className="col-12 text-light bg-dark p-4">
              {JSON.stringify(user, null, 2)}
            </pre>
          </div> */}
        </div>
      );
}