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
    <p> Capital : {{ getCountry.country.capital }} </p>
    <p> Iso Code : {{ getCountry.country.iso_code }} </p>
    <!-- <p> City licence plates: {{ myIp.region_code }} </p>
    <p> Ip Type : {{ myIp.type }} </p>
    <p> Country : {{ myIp.country_name }} </p>
    <p> Zıp Code : {{ myIp.zip }} </p> -->
    <input type="button" name="test" v-if="getCountry.country.iso_code == 'XK'" value="Kosovo"
      href="https://www.woodsama.com/" />
    <input v-else-if="getCountry.country.iso_code == 'AT'" type="text" href="https://www.digitbusiness.ch/"
      value="Austri" />
    <input v-else-if="getCountry.country.iso_code == 'CH'" type="text" href="https://www.digitbusiness.ch/"
      value="Zvicer" />
    <input v-else type="text" href="https://www.digitbusiness.ch/" value="Other Country" />


    <!-- <p> <img v-if="myIp.location" :src="myIp.location.country_flag" /></p> -->
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from 'vuex';


export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data() {
    return {
      myIp: {},
    }
  },
  mounted() {
    this.getCountries();
    console.log("tttt", this.test)
  },
  computed: {
    ...mapGetters(['getCountry']),
    // eslint-disable-next-line vue/return-in-computed-property
    test() {
      console.log('testtttt', this.getCountry)
    },
  },
  methods: {
    ...mapActions(['getCountries']),
    // fetch('https://api.geoapify.com/v1/ipinfo?apiKey=aaa92ff4b5aa451ca2924e913fa0552f', {
    //   method: 'GET'
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log('json', json)
    //     this.myIp = json;
    //   })
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