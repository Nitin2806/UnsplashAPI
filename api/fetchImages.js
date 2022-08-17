
const fetchImages = (page,query) => {
  return new Promise((resolve, reject) => {
    let images = [];
    let total_pages;
    let total_results;
   
    get(url.fetchUrl(page,query))
      .then((response) => {
        images = response.data.results;
        total_pages = response.data.total_pages;
        total_results = response.data.total_results;
      })
      .then(() => {
        if (total_results === 0) {
          resolve({
            total_results: 0,
            total_pages: 0,
            results: [],
          });
        } else if (total_pages === 1) {
          resolve({
            total_results: total_results,
            total_pages: total_pages,
            results: movies,
          });
        } else {
          total_pages = total_pages < pageToFetch ? total_pages : pageToFetch;

          getAll(
            Array.from({ length: total_pages }, (_, i) =>
              url.ALLPOPULRAR_SERIES(i + 1)
            )
          )
            .then((results) => {
              movies = [];
              results.forEach((result) => {
                movies = [...movies, ...result.data.results];
              });
            })
            .then(() => {
              resolve({
                total_results: movies.length,
                total_pages: total_pages,
                results: movies,
              });
            });
        }
      });
  });
};

export fetchImages