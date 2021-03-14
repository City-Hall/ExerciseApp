<template>
    <form @submit.prevent="TheOnlyWayICouldGetThisToWorkWasWithAnErrorPleaseIgnoreIt">
        <div class="field">
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Name" v-model= "name">
            <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control has-icons-left">
            <input class="input" type="password" placeholder="Password"  v-model= "pass">
            <span class="icon is-small is-left">
            <i class="fas fa-lock"></i>
            </span>
        </p>
        </div>
        <div class="field">
        <p class="control">
            <button class="button is-success" @click="LogInCred(name, pass)">
            Log In
            </button>
        </p>
        </div>
    </form>
</template>

<script>
import { LogInCred } from "../models/Session";
export default {
    data: () => ({
                name: '',
                pass: '',
          }),
    methods: {
        LogInCred(name, pass){
            LogInCred(name, pass);
        }
    }
}
</script>
<style>
</style>