var dataUrl = './data/base.json';
new Vue({
    el: "#news_block",
    data: {
      items: []
    },
    mounted() {
      var self = this
      $.getJSON(dataUrl, function(data) {
        self.items = data.news;
      });
    }

})