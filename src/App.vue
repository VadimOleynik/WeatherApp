<template>
    <div id="content">
        <Transition name="fade">
            <router-view :key="$route.fullPath"/>
        </Transition>
    </div>
</template>

<script>


  export default {
    name: 'app',
  }
</script>

<style lang="scss">
    @import "./assets/scss/app/main.scss";

    .fade-enter-active, .fade-leave-active {
        transition-property: opacity;
        transition-duration: .25s;
    }

    .fade-enter-active {
        transition-delay: .25s;
    }

    .fade-enter, .fade-leave-active {
        opacity: 0
    }
</style>
