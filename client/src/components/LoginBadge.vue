<template>
    <div>

        <div class="buttons" v-if="!Session.user">
            <router-link to="/SignUp" class="button is-light">
                Sign Up
                </router-link>
            <router-link to="/LogIn" class="button is-light">
                Log In
                </router-link>
        </div>
        <div v-else>
            Hello {{this.Session.user.name}}
            (<a @click="logout">
                Log out
            </a>)
        </div>
    </div>
</template>

<script>
import Session from "../models/Session";
export default {
    data(){
        return {
            Session
        }
    },
    methods: {
        logout(){
            this.Session.user = null
        },
    }
}
</script>

<style>
</style>