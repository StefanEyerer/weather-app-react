import { useState } from "react";

function Search() {
  const [location, setLocation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation("");
  };

  return (
    <section>
      <form noValidate onSubmit={handleSubmit}>
        <label className="text-xl" htmlFor="location">
          Location:
        </label>
        <input
          className="form-input w-full rounded-md mt-1 mb-4 text-2xl text-gray-900"
          type="text"
          id="location"
          name="location"
          placeholder="Type in a location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <input
          className="w-full cursor-pointer rounded-md p-2 text-2xl bg-blue-900 disabled:bg-gray-900 disabled:text-gray-400"
          type="submit"
          value="Submit"
          disabled={!location}
        />
      </form>
    </section>
  );
}

export default Search;
