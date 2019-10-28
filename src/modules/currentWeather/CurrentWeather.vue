<template>
    <main>
        <h1>Сервіс погоди</h1>

        <CitySelection @citySelection="citySelectionHandler"/>

        <section v-if="showWeather">
            <h2>Актуальна погода у місті {{activeCityObj.title}}</h2>

            <article>
                <p>
                    <span>{{weatherData}}</span>
                    <span>{{weatherData}}</span>
                </p>
            </article>
        </section>
    </main>
</template>

<script>
  import ajax from '@/axios-auth'
  import Weather from './models/Weather'

  import CitySelection from './components/CitySelection'

  export default {
    name: 'app',

    data () {
      return {
        weatherData: new Weather(),
        activeCityObj: null,
        showWeather: false,
      }
    },

    methods: {
      getWeatherData () {
        const apiConfing = {
          units: 'metric',
          q: this.activeCityObj.query,
          lang: 'ua'
        }

        ajax('get', 'https://api.openweathermap.org/data/2.5/weather', apiConfing)
          .then((response) => {
            this.weatherData = new Weather(response.data)
          })
          .then(()=>{
            this.showWeather = true;
          });
      },
      setActiveCity (activeCityObj) {
        this.activeCityObj = activeCityObj;
      },
      citySelectionHandler(cityObj) {
        this.setActiveCity(cityObj);
        this.getWeatherData ();
      }
    },

    components: {
      CitySelection
    }
  }

</script>

<style scoped>

</style>
