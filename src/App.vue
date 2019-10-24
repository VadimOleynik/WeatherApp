<template>
    <div id="content">
        <router-view :key="$route.fullPath"/>
    </div>
</template>

<script>


  export default {
    name: 'app',
  }
</script>

<style>

</style>
