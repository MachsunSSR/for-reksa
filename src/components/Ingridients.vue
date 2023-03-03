<template>
    <div>
      <h1> Welcome to Ingridients page </h1>
      <p>This is the page that opens on <strong>{{ $route.params.id }}</strong> route</p>
      <div v-for="item in listItems">
        <router-link :to="{ name: 'Meals', params: { id: item.idMeal }}">{{item.strMeal}}</router-link>
      </div>
    </div>
  </template>
  
<script>
export default {
  name: 'Ingridients',
  data () {
    return {
      listItems: []
    }
  },
  methods: {
    async getData() {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${this.$route.params.id}`);
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
  