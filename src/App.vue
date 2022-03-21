<template>
  <div class="container">
    <div class="wrapper">
      <div class="header">
        <h1>England: Premier League</h1>
      </div>
      <div class="content">
        <div class="game">
          <p>16:00 Finished Brighton 2-1 Leicester</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      orderedData: []
    };
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
  background-color: red;
  justify-content: center;
}

.wrapper{
  align-self: center;
  justify-self: center;
  width: 550px;
  height: 550px;
  background-color: blue;
}

.header{
  background-color: #D9D9D9;
}
</style>
