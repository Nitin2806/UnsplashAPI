/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback, useRef } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./Home.css";

const options = { root: null, rootMargin: "20px", threshold: 1.0 };

const Home = ({ navQuery }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [trigger, setTrigger] = useState(null);

  const client_id = "4mB0CC1xdwTfTQGjF1v1uO9vS2Z8ubzBPd4X0B86IEU"; //Upsplach key

  useEffect(() => {
    setTotalPages(1);
    setPage(1);
    setData([]);
  }, [navQuery]);

  useEffect(() => {
    const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${navQuery}&page=${page}`; //fetch url from upsplash api

    // console.log(fetchUrl);
    axios.get(fetchUrl).then((res) => {
      setData((state) => [...state, ...res.data.results]);
      setTotalPages(res.data.total_pages);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, navQuery]);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) setPage((state) => state + 1);
  };

  useEffect(() => {
    // console.log({ data });
  }, [data]);

  const observer = useRef(new IntersectionObserver(handleObserver, options));

  useEffect(() => {
    const currentObserver = observer.current;

    if (trigger) currentObserver.observe(trigger);

    return () => {
      if (trigger) currentObserver.unobserve(trigger);
    };
  }, [trigger]);

  return (
    <div>
      <div className="App flex">
        <div className="main flex">
          {data.map((data, key) => (
            <div className="container" key={key}>
              <img
                src={data.urls.small}
                className="image"
                alt={data.alt_description}
              />
            </div>
          ))}
        </div>
        {totalPages > page && (
          <div ref={setTrigger}>
            <p style={{ textAlign: "center" }}>
              <b>Loading...</b>
            </p>
          </div>
        )}
        {page > 1 && page >= totalPages && (
          <h2>Yay! You have scrolled it all.</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
// const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;
