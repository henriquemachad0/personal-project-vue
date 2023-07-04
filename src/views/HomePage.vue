<template>
   <div class="home">
      <div class="products">

         <div v-for="(product, index) in this.products" :key="index" class="product">
            <div class="product-image" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
            <router-link :to="`${product.id}`">
               <h4>{{ product.title }}</h4>
            </router-link>
            <p class="price">R$ {{ product.price.toFixed(2) }}</p>
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

      .product {
         flex: 0 0 30%;
         box-sizing: border-box;
         box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
         border-radius: 3%;
         padding: 16px;
         margin: 8px;
         height: 320px;

         a {
            color: #000;
            text-decoration: none;
         }
      }

      .product-image {
         margin: 20px auto;
         width: 160px;
         height: 140px;
         background-size: contain;
         background-position: center;
         background-repeat: no-repeat;
      }

      h4 {
         margin: 22px auto;
         font-size: 12px;
         max-width: 60%;
         font-weight: normal;
      }
   }
}
</style>