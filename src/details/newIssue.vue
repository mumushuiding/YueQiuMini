<template>
    <div id="app">
        <form id="form">
            <KInput label="主题" v-model="data.title" placeholder="标题十个字以内" :maxlength="10"/>
            <KInput label="填写日期" v-model="data.title" placeholder="如:2020-01-02 17:05"/>
            <KInput label="地点" v-model="data.title" placeholder="如:上海市闸北区"/>
            <KInput label="需要人数" v-model="data.title" placeholder="如：填写人数上限"/>
            <KInput label="说明" v-model="data.title" placeholder="有什么需要提醒大家的,限五十字" :maxlength="50"/>
        </form>
        <KButton type="primary" size="lg" @click="onSubmit">发布活动</KButton>
    </div>
</template>
<script>
export default {
  data() {
    return {
      data: {
        title: '',
        number: 0,
        date: null,
        address: '',
        description: ''
      }
    }
  },
  methods: {
    onsubmit() {

    }
  }
}
</script>
<style scoped>
#app{
    background-color: #fff;
}
</style>
