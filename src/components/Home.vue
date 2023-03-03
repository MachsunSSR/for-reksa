/* eslint-disable */ 
<template>
  <div>
    <h1> Home page </h1>
    <p>This is the page that opens on <strong>/</strong> route</p>
    <div v-for="item in listItems">
      <router-link :to="'ingridients/'+ item.strIngredient.toLowerCase()">{{item.strIngredient}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      listItems: []
    }
  },
  methods: {
    async getData() {
      const res = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
      console.log(res)
      const finalRes = await res.json();
      console.log(finalRes.meals);
      this.listItems = finalRes.meals;
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
