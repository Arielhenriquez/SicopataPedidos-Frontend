<template>
    <form>
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

            <div class="select is-primary">
                <select v-model="userData.isAdmin">
                    <option>Admin</option>
                    <option>Client</option>
                </select>
            </div>

            <input type="submit" class="button is-success" value="Agregar usuario" @click="insertUsers">


        </div>


        <div>
            <input type="text" class="input is-normal" id="id" placeholder="Ingresa el id de un usuario" v-model="id">
            <input type="text" class="input is-normal" id="name" placeholder="Inserte el email de un usuario"
                v-model="userData.email">
            <input type="submit" class="button is-warning" value="Actualizar usuario" @click="updateUser">
        </div>

        <div>
            <input type="text" class="input is-normal" placeholder="Ingresa el id de un usuario" v-model="id">
            <input type="submit" class="button is-danger" value="Borrar usuario" @click="deleteUser">
        </div>
        <div class="all-categories" v-for="Users in allUsers" :key="Users">
            <div class="all-content">{{ "Email: " + Users.email }}
                <div>
                    {{ "Password: " + Users.password }}
                </div>

            </div>
        </div>
        <button v-on:click="getAllUsers" class="button is-link">Lista de Usuarios</button>
        <h2>Usuarios Registrados</h2>
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
        getAllUsers() {
            CrudUsers.getAllUsers()
                .then((response) => {
                    this.allUsers = response.data
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
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
                }).catch((error) => {
                    console.log(error)
                })
        },
        updateUser() {
            CrudUsers.updateUser(this.id, this.userData)
                .then((response) => {
                    this.$swal("Se actualizo el usuario")
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteUser() {
            CrudUsers.deleteUser(this.id)
                .then((response) => {
                    this.$swal({
                        icon: 'warning',
                        title: 'Borrado',
                        text: 'Se borro el usuario',
                    });
                    console.log(response)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
}

</script>

<style>
input[type=number] {
    width: 50%;
    margin: 2px;
}
</style>