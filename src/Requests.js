const tmdbApiKey="8ceab73cadc8ff68f0273b471fc862a2";
let x = Math.floor((Math.random() * 10) + 1);
 const requests = {
 get:`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${x}&api_key=8ceab73cadc8ff68f0273b471fc862a2`,
 rated:`https://api.themoviedb.org/3/movie/top_rated?&api_key=8ceab73cadc8ff68f0273b471fc862a2`,
 action:`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1&vote_average.gte=5.5&with_genres=28&api_key=8ceab73cadc8ff68f0273b471fc862a2`,
 horror:`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1&vote_average.gte=5.5&with_genres=27&api_key=8ceab73cadc8ff68f0273b471fc862a2`,
 war:`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1&vote_average.gte=5.5&with_genres=10752&api_key=8ceab73cadc8ff68f0273b471fc862a2`,
 romance:`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1&vote_average.gte=5.5&with_genres=10749&api_key=8ceab73cadc8ff68f0273b471fc862a2`,
 fan:`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&language=en-US&page=1&vote_average.gte=5.5&with_genres=14&api_key=8ceab73cadc8ff68f0273b471fc862a2`,

};
export default requests
 