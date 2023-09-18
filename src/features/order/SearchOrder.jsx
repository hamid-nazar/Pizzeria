import { useState } from "react";

import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) {
      return;
    }

    navigate(`/order/${query}`);

    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        placeholder="Search order#"
        onChange={(e) => setQuery(e.target.value)}
        className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400
        w-28 sm:focus:w-72 transition-all duration-300 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 sm:w-64 "
      />
    </form>
  );
}

export default SearchOrder;
