var dataUrl = './data/countries.json';
new Vue({
    el: '#country__checkbox',
    data: {
      show: false,
      changed: false,
      countries: []
    },
    mounted() {
        var self = this
        $.getJSON(dataUrl, function(data) {
          self.countries = data.countries;
        });
      },
    methods:{
        showList(){
            this.show = !this.show;
        },
        changeClass(){
            this.changed = !this.changed;
        }
    }
  })