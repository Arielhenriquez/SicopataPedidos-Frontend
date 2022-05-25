<template>
    <h2>Usuarios Registrados</h2>
    <table class="table is-fullwidth has-text-centered mt-5">
        <thead>
            <tr>
                <th class="has-text-centered">ID</th>
                <th class="has-text-centered">Email</th>
                <th class="has-text-centered">Password</th>
                <th class="has-text-centered">Delete</th>
            </tr>
        </thead>

        <tbody v-for="Users in allUsers" ::key="Users">
            <tr>
                <td>{{ Users.id }}</td>
                <td>{{ Users.email }}</td>
                <td>{{ Users.password }}</td>
                <td> <input type="submit" class="button is-danger" value="Borrar usuario" @click="deleteUser(Users.id)">
                </td>
            </tr>
        </tbody>
    </table>

    <div>
        <input type="text" class="input is-warning" id="id" placeholder="Ingresa el id de un usuario" v-model="id">
        <input type="text" class="input is-warning" id="name" placeholder="Inserte el nuevo email del un usuario"
            v-model="userData.email">
        <input type="password" class="input is-warning" placeholder="Inserte la nueva clave del usuario"
            v-model="userData.password">

    </div>
    <input type="submit" class="button is-warning" value="Actualizar usuario" @click="updateUser">
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
        deleteUser(id) {
            CrudUsers.deleteUser(id)
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
    mounted() {
        this.getAllUsers()
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