<script setup>
import { updateCategory } from './service/CrudService';
import { ref } from 'vue';
import router from '@/router';

const categoryData = ref('');

const props = defineProps({
    isActive: Boolean,
    categoryId: Number,
    onCloseModal: Function
});

function update() {
    updateCategory(props.categoryId, { name: categoryData.value });
    router.go('/admin/categories');
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
                            <input type="text" class="input is-normal" id="name"
                                placeholder="Inserte el nombre de la categoria" v-model="categoryData.name">
                            <button class="button is-dark mt-3"
                                @click="update(); $emit('closeModal', { datos: 'blablabla' })">Update</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="modal-close is-large" aria-label="close"
            @click="$emit('closeModal', { datos: 'blablabla' })"></button>
    </div>
</template>

<style>
.update-card {
    height: 200px
}
</style>
