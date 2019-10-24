<template>
    <div>
        <h1 class="title">Прогноз погоди на 5 днів</h1>

        <ul class="columns is-multiline is-variable is-2">
            <li v-for="(forecastItem, index) in forecastList"
                :key="'forecastItem' + index"
                class="column is-3 ">
                <div class="box">
                    <p class="title">{{forecastItem['dt_txt']}}</p>

                    <div class="card-content">
                        <p>{{forecastItem.weather[0].description}}</p>
                    </div>

                    <span :class="forecastItem.weather[0].icon"></span>

                    <p>{{forecastItem.main.temp}}</p>

                    <p>{{forecastItem.main.pressure}}</p>

                    <p>{{forecastItem.main.humidity}}</p>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
  import ajax from '@/axios-auth'

  export default {
    name: 'app',

    data () {
      return {
        forecastList: []
      }
    },

    methods: {
      getForecastData () {
        const apiConfing = {
          units: 'metric',
          q: 'Kyiv',
          lang: 'ua'
        };

        ajax('get', 'https://api.openweathermap.org/data/2.5/forecast', apiConfing)
          .then((response) => {
            const fetchedData = response.data

            this.forecastList = fetchedData.list
          })
      }
    },

    created () {
      this.getForecastData()
    }
  }

</script>

<style>
    .title {
        text-align: center;
    }
</style>
