<template>
    <div class="search">
        <input type="text" class="input is-success" id="name" placeholder="Inserte el nombre de la categoria"
            v-model="categoryData.name">
        <input type="submit" class="button is-success" value="Agregar categoria" @click="createCategory">
    </div>
    <div>
        <h2>Datos de las Categorias: </h2>
    </div>
    <div class="card" v-for="Categories in allCategories" :key="Categories">

        <div class="card-content">
            <div class="content">{{ "Id: " + Categories.id + " Nombre: " + Categories.name }}
                <div>
                    <input type="submit" class="button is-danger" value="Borrar categoria"
                        @click="deleteCategory(Categories.id)">
                    <input type="submit" class="button is-warning" value="Actualizar categoria"
                        @click="updateCategory(Categories.id, true)">
                </div>
            </div>
        </div>
    </div>
    <CategoriesUpdate :categoryId="this.id" :isActive="this.isActive" @closeModal="handleCloseModal"
        @updateModal="handleUpdate" />
</template>

<script>
import CrudService from "./service/CrudService";
import CategoriesUpdate from "@/components/CategoriesUpdate"
export default {
    components: {
        CategoriesUpdate
    },
    data() {
        return {
            allCategories: [],
            categoryData: {},
            updated: "Se actualizo la categoria",
            deleted: "Se borro la categoria",
            isActive: false,
            id: 0,
        }
    },
    methods: {
        getAllCategories() {
            CrudService.getAll()
                .then((response) => {
                    this.allCategories = response.data
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
        createCategory() {
            CrudService.create(this.categoryData)
                .then((response) => {
                    this.categoryData = response.data.name
                    this.$swal({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Se agrego una categoria',
                    });
                    console.log(response.data.name);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        updateCategory(id, data) {
            this.id = id,
                this.isActive = data;

        },
        handleCloseModal(vale) {
            this.updateCategory(false);
        },
        handleUpdate(value) {
            value.id = this.id;
            console.log(value)
        },
        deleteCategory(id) {
            CrudService.delete(id)
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
        this.getAllCategories();
    },
}
</script>

<style>
.content {
    background-color: rgb(21, 107, 213);
    color: #fff;
    width: 50%;
    margin: auto;
    border-radius: 10px;
}
</style>