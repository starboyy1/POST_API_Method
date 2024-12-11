import { useState } from "react";
import useFetch from "../hooks/UseFetch";
import Endpoints from "../axios/Endpoints";

const List = () => {
  const [input, setInput] = useState({
    title: "",
    type: "",
    id: "101",
  });

  const { isData, isError, isLoading, fetchData } = useFetch(
    Endpoints.posts
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(input); // Pass the input data directly to the fetchData function
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Service Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={input.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="type">Type</label>
        <input
          type="text"
          id="type"
          name="type"
          value={input.type}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {/* Display loading, error, or response data */}
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error: {isError}</p>}
      {isData && (
        <div>
          <h3>Data Submitted Successfully:</h3>
          <pre>{JSON.stringify(isData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default List;
