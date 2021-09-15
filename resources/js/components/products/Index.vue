<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="offset-md-3 col-md-6">
                    <h3>Add new product</h3>
                    <form-component @add="addProduct"></form-component>
                </div>
            </div>
        </div>

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="product in products" :key="product.id">
                        <div class="card mb-4 shadow-sm">
                        <img class="card-img-top" :src="product.image">
                        <div class="card-body">
                            <h3>{{ product.name }}</h3>
                            <p class="card-text">{{ product.description }}</p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <router-link class="btn btn-sm btn-outline-secondary" :to='{name: "editProduct", params: {id: product.id}}'>Edit</router-link>
                                <button @click="deleteProduct(product.id)" type="button" class="btn btn-sm btn-outline-secondary">Delete</button>
                            </div>
                            <small class="text-muted">{{ product.price }}   Euros</small>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const FormComponent = () => import ('./FormComponent.vue');
export default {
    name: 'indexProducts',
    components: {
        FormComponent
    },
    data() {
        return {
            products: [
               /* {
                    id: 1,
                    name: 'Product 1',
                    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                    price: 20,
                    image: 'https://via.placeholder.com/150'
                },
                                {
                    id: 2,
                    name: 'Product 2',
                    description: 'This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.',
                    price: 10,
                    image: 'https://via.placeholder.com/150'
                }*/
            ]
        }
    },
    mounted() {
        this.showProducts();
    },
    methods: {
        addProduct(product) {
            this.products.push(product);
        },
         deleteProduct(productId) {
            axios.delete('/api/products/' + productId).then((response) => {
                 let pos = this.products.map(function(product) { return product.id }).indexOf(productId);
                 this.products.splice(pos, 1);
            })
        },
        showProducts() {
             axios.get('/api/products').then((response) => {
                 this.products = response.data.products
            })
        }
    }
}
</script>
