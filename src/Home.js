/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useCallback } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import "./Home.css";

const Home = (navquery) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState(" ");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const client_id = "4mB0CC1xdwTfTQGjF1v1uO9vS2Z8ubzBPd4X0B86IEU"; //Upsplach key
  const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`; //fetch url from upsplash api

  const fetchImages = useCallback(() => {
    axios
      .get(fetchUrl, {
        headers: {},
      })
      .then((response) => {
        console.log(response);
        setData([...data, ...response.data.results]);
      }, setHasMore(false))

      .catch((error) => {
        console.log(error);
      });
    setPage(page + 1);
  }, [data, fetchUrl, page]);

  useEffect(() => {
    fetchImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    setQuery(navquery.navquery);
  }, [navquery.navquery]);

  console.log("this is query", data);

  return (
    <div>
      <div className="App flex">
        <InfiniteScroll
          dataLength={data.length}
          next={fetchImages}
          hasMore={hasMore}
          loader={<p>Load more...</p>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
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
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Home;
// const fetchUrl = `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${query}&page=${page}`;
