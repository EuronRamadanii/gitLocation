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
    <!-- <h3>Ip Information </h3>
    <p> Ip : {{ myIp.ip }} </p>
    <p> City : {{ myIp.region_name }} </p>
    <p> City licence plates: {{ myIp.region_code }} </p>
    <p> Ip Type : {{ myIp.type }} </p>
    <p> Country : {{ myIp.country_name }} </p>
    <p> Zıp Code : {{ myIp.zip }} </p> -->


    <!-- <p> <img v-if="myIp.location" :src="myIp.location.country_flag" /></p> -->
  </div>
</template>
  
<script>
// import HelloWorld from './components/HelloWorld.vue'
import { getGeo } from 'geoplugin';


export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      myIp: {},
      // myAccesKey: '4f01e401ff025bf0b09342388bb26782'
      myAccesKey: 'bdc_1bf0c7dbf570468db43ecee7c8acf191	'
    }
  },
  created() {
    this.findMyIp();
    // this.fetchDataWithIp();
    this.test()
  },
  methods: {
    test() {
      getGeo()
        .then(response => console.log('rrrr', response)) // handle success
        .catch(error => console.log(error)) // handle error
        .then(() => { }); // always executed
    },


    // test() {
    //   this.$getLocation()
    //     .then(coordinates => {
    //       console.log(coordinates);
    //     });
    // },
    findMyIp() {
      // fetch('http://api.ipstack.com/check?access_key=' + this.myAccesKey)
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log('json', json)
      //     this.myIp = json;
      //   })
      // fetch('https://api.bigdatacloud.net/data/country-by-ip?ip=80.80.162.102&localityLanguage=en&key' + this.myAccesKey)
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log('json', json)
      //     this.myIp = json;
      //   })
      // fetch(`https://api.ip2location.com/v2/?ip=80.80.162.102&key={YOUR_API_KEY}&package=WS25`)
      //   .then(response => response.json())
      //   .then(json => {
      //     console.log('json', json)
      //     this.myIp = json;
      //   })
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