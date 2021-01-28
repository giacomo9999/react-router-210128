import { Link, Route } from "react-router-dom";
import SingleUserPage from "./SingleUserPage";

const UsersPage = (props) => {
  const userData = [
    { id: 1, name: "Param" },
    { id: 2, name: "Vennila" },
    { id: 3, name: "Afrin" },
  ];

  console.log("UsersPage Props:", props);

  const userDataList = userData.map((entry) => (
    <div className="user-container" key={entry.id}>
      <h2 style={{ color: "black" }}>{entry.name}</h2>
      <Link to={props.match.url + "/" + entry.id}>Click for more info</Link>
    </div>
  ));

  return (
    <div className="container-inner">
      <h1>Users</h1>
      {userDataList}
      <Route
        path={props.match.url + "/:userId"}
        render={(props) => (
          <SingleUserPage
            {...props}
            name={userData[Number(props.match.params.userId)-1].name}
          />
        )}
      />
    </div>
  );
};

export default UsersPage;
