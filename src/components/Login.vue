<template>
    <form>
        <h1>Login</h1>
        <div class="field">
            <p class="control has-icons-left has-icons-right">
                <input class="input" type="email" placeholder="Email" v-model="loginData.email">
                <span class="icon is-small is-left">
                </span>
                <span class="icon is-small is-right">
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control has-icons-left">
                <input class="input" type="password" placeholder="Password" v-model="loginData.password">
                <span class="icon is-small is-left">
                </span>
            </p>
        </div>
        <div class="field">
            <p class="control">
                <button class="button is-success" @click="signIn">
                    Login
                </button>
            </p>
        </div>
    </form>
</template>

<script>
import httpCommon from "@/http-common";
import router from "@/router";
import { RouterView } from "vue-router";
import jwt_decode from "jwt-decode"


const loginUrl = 'https://localhost:7205/api/Login'

export default {
    components: {
        RouterView
    },
    data() {
        return {
            loginData: {},
        }
    },
    methods: {
        signIn() {
            httpCommon.post(loginUrl, this.loginData)
                .then((response) => {
                    const token = response.data
                    const decoded = jwt_decode(token, { header: true })
                    sessionStorage.setItem("token", response.data)
                    this.$swal({
                        icon: 'success',
                        title: 'Exito',
                        text: 'Bienvenido',
                    });
                    router.push({ path: "/crud" })
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
    }
}

</script>

<style>
h2 {
    font-size: 24px;
    margin: 20px;
}

input[type=Email] {
    width: 50%;
    margin: 2px;
}

input[type=Password] {
    width: 50%;
    margin: 2px;
}

.search {
    margin: 20px;
}
</style>