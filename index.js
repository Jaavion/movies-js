
var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ['Wolf of Wall Street', 'Catch me if you can', 'Big Little Liars'],
      newMovie: "",
    };
  },
  methods: {
    addNewMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    }
  }
});