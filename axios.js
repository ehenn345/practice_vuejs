/* global axios, Vue */

var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      todos: []
    };
  },
  methods: {
    // ...
    loadTodos: function () {
      console.log('getting todos...')
      axios.get('https://jsonplaceholder.typicode.com/todos').then(response => {
        console.log(response.data);
        this.todos = response.data;
      });
    }
  }
});
