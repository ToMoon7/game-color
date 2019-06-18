var app = new Vue({
  el: '#app',
  data: {
    colors: []
  },
  created: function(){
  	this.colors = COLOR_DATA;
  	new ClipboardJS('.color-item');
  }
})
