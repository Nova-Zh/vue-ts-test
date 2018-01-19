<template>
<div id="app">
  <transition name="fade" mode="out-in">
    <el-date-picker
      v-model="value1"
      type="date"
      :pickerVisible="true"
      placeholder="选择日期">
    </el-date-picker>
  </transition>
</div>
</template>

<script lang='ts'>
export default {
  data () {
    return {
      value1: ''
    }
  },
  mounted () {}
}
</script>

<style>

</style>
