<template>
  <div id="app">
   <keep-alive>
     <router-view/></keep-alive>
   <div class="bottomNav">
      <router-link class="nav-item"
      v-for="(i,index) in list"
      :key="index"
      :to="i.path">
          <div class="icon">
          <font-awesome-icon :icon="i.icon" color="green" size="2x"/>
          </div>
          <div class="text">{{i.name}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      list: [
        {
          name: '首页',
          path: 'index',
          icon: 'home',
        },
        {
          name: '去发布',
          path: 'newIssue',
          icon: 'plus-circle',
        },
        {
          name: '我的',
          path: 'test2',
          icon: 'child'
        }
      ]
    }
  },
})
</script>

<style lang="less">
@import "./example.less";

.homeIcon{
    position: absolute;
    z-index: 2;
}
</style>
<style scoped>
#app{
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color:0xFFF3F4F6;
}
.bottomNav{
  position: absolute;
  bottom: 0px;
  height: 60px;
  display: flex;
  width: 100%;
  background-color: 0xFFFDFFFE;
}
.nav-item{
  flex: 1;
  background-color: white;
  height: 100%;
}
 .nav-item:link,.nav-item:visited{
  background-color: white;
  color: black;
}
/*
.nav-item:hover,.nav-item:active{
  color: white;
  background-color: #C8C6C6;
} */
.nav-item .icon{
  height: 45%;
  text-align: center;
  padding-top: 5px;
  padding-bottom: 5px;
  justify-content: center;
  /* background-color: hotpink; */
}
.nav-item .text{
  text-align: center;
  font: 0.8em sans-seri;
  color: grey;
  /* background-color: indigo; */
}
/* .nav-item .text:link{
  color:yellow;
} */

</style>
