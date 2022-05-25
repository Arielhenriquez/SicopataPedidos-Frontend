<template>
    <div>
        <h2>Datos de los productos: </h2>
    </div>
    <div class="card" v-for="Products in allProducts" :key="Products">
        <div class="card-content">
            <div class="content">{{ "Id: " + Products.id + " Nombre: " + Products.name }}
            </div>
        </div>
    </div>

    <div class="search">
        <input type="text" class="input is-normal" id="name" placeholder="Inserte el nombre del producto"
            v-model="productsData.name">
        <input type="submit" class="button is-success" value="Agregar producto" @click="createCategory">
    </div>
    <div>
        <input type="text" class="input is-normal" id="id" placeholder="Ingresa el id del producto" v-model="id">
        <input type="text" class="input is-normal" placeholder="Inserte el nombre del producto"
            v-model="productsData.name">
    </div>
    <input type="submit" class="button is-warning" value="Actualizar producto" @click="updateCategory">
    <div>
        <input type="text" class="input is-normal" id="id" placeholder="Ingresa el id del producto" v-model="id">
        <input type="submit" class="button is-danger" value="Borrar producto" @click="deleteCategory">
    </div>

</template>

<script>
import CrudProducts from "./service/CrudProducts";
export default {
    data() {
        return {
            allProducts: [],
            productsData: {},
            updated: "Se actualizo el producto",
            deleted: "Se borro el producto",
        }
    },
    methods: {
        getAllProducts() {
            CrudProducts.getAllProducts()
                .then((response) => {
                    this.allProducts = response.data
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        createCategory() {
            CrudProducts.createProduct(this.productsData)
                .then((response) => {
                    this.productsData = response.data.name
                    this.$swal({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Se agrego una producto',
                    });
                    console.log(response.data.name);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        updateCategory() {
            CrudProducts.updateProduct(this.id, this.productsData)
                .then((response) => {
                    this.$swal(this.updated)
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteCategory() {
            CrudProducts.deleteProduct(this.id)
                .then((response) => {
                    this.$swal({
                        icon: 'warning',
                        title: 'Borrado',
                        text: this.deleted,
                    });
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    mounted() {
        this.getAllProducts();
    },
}
</script>