const SearchPage = (props) => {
  console.log("SearchPage: ", props);
  return (
    <div className="container-outer">
      <h1>Search Page</h1>
      <h2>{props.location.search}</h2>
    </div>
  );
};

export default SearchPage;
