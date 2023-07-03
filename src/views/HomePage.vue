<template>
   <div class="home">
      <div class="products">
         <div v-for="(product, index) in this.products" :key="index" class="product">
            <div class="product-image" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
            <h4>{{ product.title }}</h4>
         </div>
      </div>
   </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
   name: 'HomePage',
   data() {
      return {

      }
   },

   computed:
      mapState([
         'products'
      ]),
}
</script>

<style lang="scss">
.home {
   .products {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
   }
}
</style>