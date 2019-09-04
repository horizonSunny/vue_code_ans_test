<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div>
      <!-- <button>hello world</button>
      <button>test</button> -->
      <router-link to="/hello"> goto hello</router-link>
      <router-link to="/test"> goto test</router-link>
      <!-- <router-link to="/hello"> goto children</router-link> -->
      <keep-alive include="Test">
        <router-view></router-view>
      </keep-alive>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
