<template>
    <div class="product-image" :style="{ backgroundImage: 'url(' + product.image + ')' }"></div>
    <h4>{{ product.title }}</h4>
    <p class="price">R$ {{ product.price.toFixed(2) }}</p>
    <div></div>
</template>

<script>
import { mapState } from 'vuex';
import { useRoute } from 'vue-router'
import store from '@/store/index.js';

export default {
    name: 'ProductPage',
    data() {
        return {
            product: {
                category: "",
                description: "",
                id: 0,
                image: "",
                price: 0,
                title: ""
            }
        }
    },
    computed:
        mapState([
            'products'
        ]),

    beforeMount() {
        const route = useRoute()
        const id = route.params.id
        this.product = store.state.products.filter(product => product.id == id)[0]
    }

}

</script>

<style lang="scss">
.product-image {
    margin: 20px auto;
    width: 275px;
    height: 550px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
}

h4 {
    margin: 22px auto;
    font-size: 12px;
    max-width: 60%;
    font-weight: normal;
    z-index: 1;
}
</style>