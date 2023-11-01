"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import "./Home.scss";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchSearchPosts();
  };

  const fetchSearchPosts = async () => {
    try {
      let res = await axios.get(
        `https://api.github.com/search/users?q=${searchQuery}`
      );
      let data = await res.data.items;
      setUsers(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSearchPosts();
  }, []);

  return (
    <div className="Home">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-3 outline-none border-2 rounded-md"
            type="text"
            placeholder="Search Users..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-[#333333] text-white py-2 rounded-md mt-5 hover:bg-white hover:text-[#333333] hover:transition-[0.3s] transition-[0.3s] border-2"
          >
            Search
          </button>
        </form>
        <div className="users">
          {users.map((ps) => (
            <div className="user" key={ps.id}>
              <img src={ps.avatar_url} alt="Error" />
              <h3 className="mx-[3.4rem] text-[1.5rem]">{ps.login}</h3>
              <Link href={`/`}>
                <button className="px-[1.4rem] py-[0.5rem] mx-[4.5rem] text-white my-5 bg-[#333333] border-2 text-800 hover:bg-white hover:border-2 hover:text-black transition-[0.3s] hover:transition-[0.3s]">
                  More
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
