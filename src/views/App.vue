<template>
<div id="app">
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</div>
</template>

<script lang='ts'>
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
  import {Action, Getter, namespace} from 'vuex-class'

  @Component({
    name: 'App'
  })
  export default class App extends Vue {}
</script>

<style>

</style>
