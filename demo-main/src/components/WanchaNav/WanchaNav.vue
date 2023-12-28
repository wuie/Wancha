<script setup lang="ts"></script>

<template>
  <div class="nav-container">
    <div class="logo"></div>
    <div class="nav-list">
      <div class="nav-item">
        <router-link to="/news">新闻</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/user">个人中心</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/fantasticColumn">精彩专栏</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/activity">活动</router-link>
      </div>
    </div>
    <div class="user-container"></div>
  </div>
</template>

<style lang="scss" scoped>
.nav-container {
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background: linear-gradient(to right, rgba(221, 221, 250, 0.3), rgba(233, 155, 240, 0.6));
  .nav-list {
    display: flex;
    flex: 1;
    .nav-item {
      margin-right: 25px !important;
      a {
        font-size: 18px;
        line-height: 50px;
        color: #1c1a1a;
        text-shadow: 0 0 3px #616161;
        text-decoration: none;
      }
    }
  }
}
</style>
