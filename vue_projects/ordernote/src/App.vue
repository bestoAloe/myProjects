<template>
  <router-view class="sidebar" name="SideBar"> <SideBar /> </router-view>
  <router-view class="header" name="HeaderPart"> <HeaderPart /> </router-view>
  <router-view class="contentmid" name="ContentMid"> <ContentMid /> </router-view>
</template>


<script setup>
import ContentMid from './components/layout/ContentMid.vue';
import  HeaderPart from './components/layout/HeaderPart.vue';
import SideBar from './components/layout/SideBar.vue';

</script>

<style scoped>

</style>
