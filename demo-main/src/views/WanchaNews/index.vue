<script setup>
import WanchaNav from '@/components/WanchaNav/WanchaNav.vue'
import { getNewsList } from '@/api/news/index.js'
import { ref, onMounted } from 'vue'
import * as THREE from 'three'
import GLOBE from 'vanta/src/vanta.globe'
const total = ref(0)
const list = ref([])

const getListData = async () => {
  const { total: totalVal, rows: rowsVal } = await getNewsList()
  total.value = totalVal
  list.value = rowsVal
}

const jump = (index) => {
  console.log(index)
}
// 背景
let vantaRef = ref(null)
onMounted(() => {
  GLOBE({
    THREE: THREE,
    el: vantaRef.value,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x282828,
    color2: 0x1e00ff,
    backgroundColor: 0xddddfa,
    size: 1.6
  })
})

getListData()
</script>

<template>
  <div class="news-container" ref="vantaRef">
    <WanchaNav />
    <el-carousel indicator-position="outside" height="500px" type="card">
      <el-carousel-item v-for="(notice, index) in list" :key="index">
        <div class="block" @click="jump(index)">
          <img class="img" :src="notice.img" alt="" :title="notice.title" />
          <div class="title">
            {{ notice.title }}
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .news-container {
  padding-top: 30px;
  width: 100%;
  height: 140vh;
}
.notice {
  background-color: rgba(157, 160, 163, 0.5);
}
.el-carousel {
  /* margin-top:30px ; */
  padding: 30px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 900px;
  margin: 0;
  border-radius: 50px;
  width: 180px;
}

.el-carousel__item:nth-child(2n) {
  background-color: #677c99;
  border-radius: 50px;
  /* border: 5px rgb(8, 0, 65) solid; */
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
  border-radius: 50px;
  /* border: 5px rgb(8, 0, 65) solid; */
}

.pic {
  height: 1500px;
  background-color: gray;
}

.block {
  height: 100%;
  width: 100%;
  border-radius: 50px;
}
.img {
  width: 100%;
  height: 100%;
}
.outside{
  margin-top: 30px;
}
</style>
