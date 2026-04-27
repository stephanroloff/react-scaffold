import { useSearchParams } from "react-router";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams({n: "", sort: "asc"});
  const n = searchParams.get("n");
  const sort = searchParams.get("sort");
  return (
  <>
    <h1 className="text-4xl text-center font-bold p-20">Search {n} {sort}</h1>
    <input className="border-2 border-gray-400 rounded-md p-2 mx-auto block" type="text" placeholder="Search" value={n || ""} onChange={(e) => {
      setSearchParams({ n: e.target.value, sort: sort || "asc" });
    }} />
    <br />
    <select className="border-2 border-gray-400 rounded-md p-2 mx-auto block" value={sort || "asc"} onChange={(e) => {
      setSearchParams({ n: n || "", sort: e.target.value });
    }}>
      <option value="asc">Asc</option>
      <option value="desc">Desc</option>
    </select>
    </>
  );
}

export default Search;
