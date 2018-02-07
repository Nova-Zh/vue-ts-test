<template>
  <div id="app">
    <el-date-picker
      v-model="value"
      type="date"
      :pickerVisible="true"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script lang='ts'>
  import {Component, Vue, Prop, Watch} from 'vue-property-decorator'
  import {Action, Getter, namespace} from 'vuex-class'

  @Component({
    name: 'index',
    data() {
      return {
        value: ''
      }
    }
  })
  export default class index extends Vue {}
</script>

<style>

</style>
