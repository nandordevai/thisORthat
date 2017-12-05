<template>
  <div id="app">
    <h1>this<span class="or">OR</span>that</h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #474747;
  margin-top: 60px;
}

.or {
  color: #828282;
  transform: rotate(90deg);
  display: inline-block;
}

</style>
