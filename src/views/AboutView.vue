<template>
  <div class="about">
    <CategoriesCrud></CategoriesCrud>

  </div>
</template>

<script>
import CategoriesCrud from "@/components/CategoriesCrud.vue";

export default {
  components: {
    CategoriesCrud
  },
}
</script>

<style>
input[type=text] {
  width: 50%;
  margin: 2px;
}
</style>