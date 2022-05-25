<template>
    <div>
        <input type="text" class="input is-normal" id="id" placeholder="Ingresa el id de un usuario" v-model="id">
        <input type="text" class="input is-normal" id="name" placeholder="Inserte el nuevo email del un usuario"
            v-model="userData.email">
        <input type="password" class="input is-normal" id="name" placeholder="Inserte la nueva clave del usuario"
            v-model="userData.password">

    </div>
    <input type="submit" class="button is-warning" value="Actualizar usuario" @click="updateUser">

    <div>
        <input type="text" class="input is-normal" placeholder="Ingresa el id de un usuario" v-model="id">
        <input type="submit" class="button is-danger" value="Borrar usuario" @click="deleteUser">
    </div>

    <h2>Usuarios Registrados</h2>
    <div class="card" v-for="Users in allUsers" :key="Users">
        <div class="card-content"> {{ "Id: " + Users.id }}
            <div class="content">
                {{ "Email: " + Users.email }}
                {{ "Password: " + Users.password }}
            </div>
        </div>

    </div>
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