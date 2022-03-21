<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <h1>England: Premier League</h1>
      </div>
      <div class="content">
        <div class="game" v-for="game in orderedData" v-bind:key="game">
          <p>{{game.start_date}} {{game.status}} {{game.par[1].name}} {{game.par[1].res}}-{{game.par[2].res}} {{game.par[2].name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import getData from "./composables/getData";

export default {
  data: () => {
    return {
      orderedData: []
    };
  },
  mounted(){
    getData('https://enet-test.s3.eu-west-1.amazonaws.com/data_structure.json').then(data => {
       Object.entries(data.data).forEach(el => {
         this.orderedData.push(el[1]);
       })
    });
    console.log(this.orderedData)
  },
  methods: {
    formatData(data) {
      /*
          Formats the widget's data
      */
    },
  }
}
</script>

<style>
body{
  margin: 0;
}
.container{
  display: grid;
  justify-content: center;
}

.wrapper{
  align-self: center;
  justify-self: center;
}

.header{
  background-color: #D9D9D9;
}
</style>
