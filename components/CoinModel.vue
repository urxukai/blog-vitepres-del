<template>
  <div class="coin-f-container">
    <div v-for="(coinF, coinFI) in coinFinance" :key="coinF.label" class="cf-item" :style="{ background: genColor(colorList(coinFI), 0.05) }">
      <div class="label">{{ coinF.label }}</div>
      <div class="value" :style="{ color: colorList(coinFI) }">{{ coinF.value }}</div>
      <div class="sep-bar" :style="{ background: colorList(coinFI) }"></div>
    </div>
  </div>
</template>

<script setup name="CoinModel">
import { computed } from 'vue'
const props = defineProps(['coinFinance'])

const colorList = computed(() => {
  const colors = ['#5672cd', '#8e5cd9', '#30a46c', '#4122d7', '#524790', '#3d86be']
  return i => {
    return colors[i]
  }
})

const genColor = (color, opacity) => {
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 把颜色值变成小写
  if (reg.test(color)) {
    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
    if (color.length === 4) {
      var colorNew = '#'
      for (var i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
      }
      color = colorNew
    }
    // 处理六位的颜色值，转为RGB
    var colorChange = []
    for (let i = 1; i < 7; i += 2) {
      colorChange.push(parseInt('0x' + color.slice(i, i + 2)))
    }
    return 'rgba(' + colorChange.join(',') + ',' + opacity + ')'
  } else {
    return color
  }
}
</script>

<style scoped>
.coin-f-container {
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}
.cf-item {
  position: relative;
  width: 150px;
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}
.cf-item .sep-bar {
  position: absolute;
  left: -6px;
  top: 0;
  height: 64px;
  width: 4px;
}
.cf-item .label {
  margin-left: 10px;
  color: var(--vp-c-text-1);
  font-family: var(--vp-font-family-base);
  font-weight: 600;
  font-size: 13px;
}
.cf-item .value {
  margin-left: 10px;
  font-family: number;
  font-size: 22px;
  letter-spacing: 1px;
}
</style>
