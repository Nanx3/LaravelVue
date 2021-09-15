<template>
    <div class="container my-4">
        <form-component :edit="true" :id-product="productId"></form-component>
    </div>
</template>

<script>
const FormComponent = () => import('./FormComponent.vue')
export default {
    name: 'editProduct',
    components: {
        FormComponent
    },
    computed: {
        productId(){
            return this.$route.params.id ? this.$route.params.id : null;
        }
    }
}
</script>

