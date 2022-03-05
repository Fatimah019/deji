import React from "react";
import { useLocation } from "react-router-dom";

const SingleUser = () => {
  const location = useLocation();

  return (
    <div>
      <h1>User Profile</h1>
      <div>
        <h3>{location?.state?.name}</h3>
        <p>{location?.state?.username}</p>
        <p>{location?.state?.phone}</p>
        <a href={`https://${location?.state?.website}`}>
          {location?.state?.website}
        </a>
      </div>

      <h1>Address</h1>
      <div>
        <h3>{location?.state?.address?.city}</h3>
        <p>{location?.state?.address?.street}</p>
        <p>{location?.state?.address?.suite}</p>
        <p>{location?.state?.address?.zipcode}</p>
        <p>
          {location?.state?.address?.geo?.lat},
          {location?.state?.address?.geo?.lng}
        </p>
      </div>

      <h1>Company</h1>
      <div>
        <h3>{location?.state?.company?.bs}</h3>
        <p>{location?.state?.company?.name}</p>
        <p>{location?.state?.company?.catchPhrase}</p>
        <p></p>
      </div>
    </div>
  );
};

export default SingleUser;
