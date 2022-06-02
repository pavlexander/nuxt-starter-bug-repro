<template>
  <div class="page-container">
    <h1>List of items</h1>
    <div class="card" v-for="post of data" :key="post._path">
      <!--        <div>{{ post }}</div>-->
      <div class="card-header">
        <NuxtLink :to="post._path">Open</NuxtLink>
      </div>
      <div class="card-body">
        <ContentRenderer :value="post"/>
      </div>
      <div class="card-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  async setup() {
    const posts = ref([]);
    const {data} = await useAsyncData('blog', () => {
      return queryContent('/').find()
    })

    return {
      posts,
      data
    }
  }
};
</script>

<style>
</style>