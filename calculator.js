var app = new Vue({
  el: "#app",
  data: function () {
    return {
      message: "Hello Vue!",
      number1: " ",
      number2: " ",
      number3: " ",
      product: " "
    };
  },
  methods: {
    computeProduct: function () {
      console.log('computing product...');
      console.log(parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3));
      this.product = (parseInt(this.number1) * parseInt(this.number2) * parseInt(this.number3));
    }
  }
});