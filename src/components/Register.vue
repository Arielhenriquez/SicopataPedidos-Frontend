<template>
    <form>
        <h1>Register</h1>
        <div>
            <div class="field">
                <label class="label" for="email">Email</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-primary" type="email" id="email" v-model="userData.email">
                </div>
            </div>

            <div class="field">
                <label class="label" for="password">Password</label>
                <input class="input is-primary" type="password" id="password" v-model="userData.password">
            </div>

            <div class="field">
                <label class="label" for="wallet">Wallet</label>
                <input class="input is-primary" type="number" id="wallet" v-model="userData.wallet">
            </div>

            <!-- <div class="select is-primary">
                <select v-model="userData.isAdmin">
                    <option>Admin</option>
                    <option>Client</option>
                </select>
            </div> -->

            <input type="submit" class="button is-success" value="Agregar usuario" @click="insertUsers">
        </div>
    </form>

</template>

<script>

import CrudUsers from './service/CrudUsers'
export default {
    data() {
        return {
            allUsers: [],
            userData: {}
        }
    },
    methods: {
        insertUsers() {
            CrudUsers.insertUser(this.userData)
                .then((response) => {
                    this.userData = response.data.email
                    console.log(response)
                    this.$swal({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Se agrego un usuario',
                    });
                    router.push({ path: "/" })
                }).catch((error) => {
                    console.log(error)
                })
        },
       
    },
}

</script>

<style>
input[type=number] {
    width: 50%;
    margin: 2px;
}

h1 {
    font-weight: bold;
    font-size: 28px;
}
</style>