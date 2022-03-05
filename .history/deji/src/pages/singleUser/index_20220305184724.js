/**
 * @description Import needed libraries to display data on user page
 * @author By Deji Adebayo
 */
//Begin Import statement
import React from "react";
import { useLocation } from "react-router-dom";
import Card from "../../components/Cards";
import "./style.css"; //End import statement.

/**
 * 
 * @returns user details
 * @description: This page shows a single user when the view user button is clicked from the main user(landing page)
 * 
 */
const SingleUser = () => {
  const location = useLocation();

  return (
    <div className="single-user">
      <div className="user-card">
        <h1>User Profile</h1>
        <Card>
          <h3>Name: {location?.state?.name}</h3>
          <p>Username: {location?.state?.username}</p>
          <p>Phone: {location?.state?.phone}</p>
          <a href={`https://${location?.state?.website}`}>
            {location?.state?.website}
          </a>
        </Card>
      </div>

      <div className="user-card">
        <h1>Address</h1>
        <Card>
          <h3>City: {location?.state?.address?.city}</h3>
          <p>Street: {location?.state?.address?.street}</p>
          <p>Suite: {location?.state?.address?.suite}</p>
          <p>Zipcode: {location?.state?.address?.zipcode}</p>
          <p>
            GEO:
            {location?.state?.address?.geo?.lat},
            {location?.state?.address?.geo?.lng}
          </p>
        </Card>
      </div>
      <div className="user-card">
        <h1>Company</h1>
        <Card>
          <h3>BS: {location?.state?.company?.bs}</h3>
          <p>Name: {location?.state?.company?.name}</p>
          <p>CatchPhrase: {location?.state?.company?.catchPhrase}</p>
          <p></p>
        </Card>
      </div>
    </div>
  );
};

export default SingleUser;
