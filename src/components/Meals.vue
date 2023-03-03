<template>
    <div>
      <h1> Welcome to Meals page </h1>
      <p>{{listItems.strInstructions}}</p>
    </div>
</template>

<script>
export default {
  name: 'Meals',
  data () {
    return {
      listItems: {}
    }
  },
  methods: {
    async getData() {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.$route.params.id}`);
      const finalRes = await res.json();
      console.log(finalRes.meals[0]);
      this.listItems = finalRes.meals[0];
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
  