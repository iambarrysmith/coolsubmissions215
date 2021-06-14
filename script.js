Vue.component("codenames",{
  data:function(){
    return{
      flipped:false
    }
  },
  props: ["name","codename"],
  template: "<div v-on:click='flip'><h4 v-bind:class='{hide:flipped}'>{{name}}</h4><h4 v-bind:class='{hide:!flipped}'>{{codename}}</h4></div>",
  methods:{
    flip:function(){
      this.flipped=!this.flipped;
    }
  }
});

var array = new Vue({
  el:"#array",
  data:{
    codenames:[{
      name: "Protagonist", codename: "Joker"},{
        name: "Anne", codename: "Panther"},{
          name: "Ryuji", codename: "Skull"}]
        }
      });

var form = new Vue({
  el: "#form",
  data: {
    nameError: "",
    emailError: "",
    name: "",
    email: "",
    submit: "",
  },
  methods: {
    validate: function(){
      if(this.nameError == null && this.emailError == null){
        this.submit="Submitted!"
      }else{
        this.submit="Not Submitted."
      }
      }
    },
  watch: {
    name: function(name){
      if(this.name.length < 2){
        this.nameError = "Your name must be more than 2 characters to submit.";
      }else{
        this.nameError=null;
      }
      },
    email: function(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(email)){
        this.emailError=null;
      }else{
        this.emailError="Please enter a valid E-Mail Address."
      }
      }
  }
    });