var dataUrl = './data/spheres.json';

new Vue({
    el: '#sphere__checkbox',
    data: {
      show: false,
      changed: false,
      spheres: []
    },
    mounted() {
        var self = this
        $.getJSON(dataUrl, function(data) {
          self.spheres = data.spheres;
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