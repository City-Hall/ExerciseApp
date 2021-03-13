<template>
    <form @submit.prevent="TheOnlyWayICouldGetThisToWorkWasByPuttingInNonesence">
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
        <p class="control has-icons-left has-icons-right">
            <input class="input" type="text" placeholder="Handle"  v-model= "handle">
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
            <button class="button is-success"  @click="SignUp(name, handle, pass)">
            Sign Up
            </button>
        </p>
        </div>
    </form>
</template>

<script>
import { SignUp } from "../models/Session";
export default {
    data: () => ({
                name: '',
                handle: '',
                pass: '',
          }),
    methods: {
        SignUp(name, handle, pass){
            SignUp(name, handle, pass);
        }
    }
}
</script>
<script>
import { LogIn } from "../models/Session";
export default {
    data: () => ({
                name: '',
                handle: '',
                pass: '',
          }),
    methods: {
        LogIn(name, handle, pass){
            LogIn(name, handle, pass);
        }
    }
}
</script>
<style>
</style>