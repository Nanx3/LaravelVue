<template>
<div>
    <form v-on:submit.prevent="saveForm()">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="product.name">
        </div>
        <div class="form-group">
            <label for="description">Description</label>
            <input type="text" class="form-control" id="description" v-model="product.description">
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="text" class="form-control" id="price"  v-model="product.price">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>
</template>

<script>
let defaultProduct = {
                name: '',
                description: '',
                price: 0.0,
                image: 'https://via.placeholder.com/150'
            };
export default {
    name: 'FormComponent',
    props: {
        edit: {
            default: false
        },
        idProduct: {
            required: false
        }
    },
    data() {
        return {
            product: Object.assign({}, defaultProduct)
        }
    },
    mounted() {
        this.showProduct();
    },
    methods: {
        showProduct() {
            if(!this.idProduct) return false;
            axios.get('/api/products/' + this.idProduct).then((response) => {
               this.product = response.data.product
            })
        },
        newProduct() {
           axios.post('/api/products', this.product).then((response) => {
               this.$emit('add', response.data.product);
           })
        },
        editProduct() {
            axios.put('/api/products/' + this.idProduct, this.product).then((response) => {
               this.$router.push({name: 'indexProduct'});
           })
        },
        saveForm() {
            if (this.edit) {
                this.editProduct();
            } else {
                this.newProduct();
            }
        }
    }
}
</script>
