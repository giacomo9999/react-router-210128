const SingleUserPage = (props) => {
  console.log("SingleUserPage: ", props);
  return (
    <div className="user-container">
      <h1>{props.name}</h1>
      <h2>ID:{props.match.params.userId}</h2>
    </div>
  );
};

export default SingleUserPage;
