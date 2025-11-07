import React from "react";
import {
  useLoaderData,
  useNavigate,
  useNavigation,
  useParams,
} from "react-router";

const UserDataDetails = () => {
  const navigate = useNavigate();
  const user2 = useLoaderData();
  const params = useParams();
  const Navigation = useNavigation();
  console.log(params);
  return (
    <div>
      <h1>User Name : {user2.name} </h1>
      <p>User Website : {params.email} </p>
      <button onClick={() => navigate("/")}>Go Back</button>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default UserDataDetails;
