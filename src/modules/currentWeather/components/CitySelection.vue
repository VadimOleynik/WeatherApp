<template>
    <section>
        <h2>Для початку оберіть місто</h2>

        <select v-model="activeCity"
                @change="$emit('citySelection', activeCity)">
            <option v-for="city in citiesList"
                    :value="city"
                    :key="city.query">
                {{city.title}}
            </option>
        </select>
    </section>
</template>

<script>
  import Cities from '../models/Cities.js'

  export default {
    name: 'app',

    data () {
      return {
        citiesList: Cities.getList(),
        activeCity: null
      }
    },

    methods: {}
  }

</script>

<style>
</style>
