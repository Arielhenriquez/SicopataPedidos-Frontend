<script setup>
import CrudService from './service/CrudService';
import { ref } from 'vue';
import router from '@/router';
import { inject } from 'vue'


const categoryData = ref("");
const swal = inject('$swal')

const props = defineProps({
    isActive: Boolean,
    categoryId: Number,
    onCloseModal: Function
});


function update(categoryId, categoryData) {
    router.push('/categories');
    CrudService.updateCategory(categoryId, { name: categoryData })
        .then((response) => {
            swal('Categoria actualizada')
            console.log(response)
        })
        .catch((error) => {
            console.log(error);
        });

}

</script>

<template>
    <div class="modal" :class="props.isActive && 'is-active'">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="card update-card">
                <div class="card-content">
                    <div class="field">
                        <label for="name" class="label" type="text">Category Name:</label>
                        <div class="control">
                            <input type="text" class="input is-normal" placeholder="Inserte el nombre de la categoria"
                                v-model="categoryData">
                            <button class="button is-warning"
                                @click="update(props.categoryId, categoryData); $emit('updateModal', { id: props.categoryId, data: categoryData })">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="$emit('closeModal')"></button>
    </div>
</template>

<style>
.update-card {
    height: 200px
}
</style>
