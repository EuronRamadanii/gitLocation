<!-- <template>
  <div id="app">
    <router-link to="/companyCH"> Company CH
      <Company_ch />
    </router-link>
    <router-link to="/companyFR"> Company FR
      <Company_fr />
    </router-link>
    <router-view></router-view>

  </div>
</template>

<script>
import Company_fr from './views/Company_FR.vue'
import Company_ch from './views/Company_CH.vue'

export default {
  name: 'App',
  components: {
    Company_fr,
    Company_ch
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
<template>
  <div>
    <h3>Ip Information </h3>
    <p> Ip : {{ myIp.ip }} </p>
    <p> City : {{ myIp.region_name }} </p>
    <p> City licence plates: {{ myIp.region_code }} </p>
    <p> Ip Type : {{ myIp.type }} </p>
    <p> Country : {{ myIp.country_name }} </p>
    <p> Zıp Code : {{ myIp.zip }} </p>
    <!-- <p> <img v-if="myIp.location" :src="myIp.location.country_flag" /></p> -->
  </div>
</template>
  
<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      myIp: {},
      myAccesKey: '4f01e401ff025bf0b09342388bb26782'
    }
  },
  created() {
    this.findMyIp();
    // this.fetchDataWithIp();
  },
  methods: {
    findMyIp() {
      fetch('http://api.ipstack.com/check?access_key=' + this.myAccesKey)
        .then(response => response.json())
        .then(json => {
          console.log('json', json)
          this.myIp = json;
        })
    },
    // fetchDataWithIp() {

    //   fetch('http://api.ipstack.com/134.201.250.155?access_key=' + this.myAccesKey)
    //     .then(response => response.json())
    //     .then(json => {
    //       console.log('test', json)
    //       //this.myIp=json;
    //     })
    // }
  }
}
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>