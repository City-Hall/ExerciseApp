<template>
    <article class="panel is-success">
        <p class="panel-heading">
            Friends
        </p>
        <p class="panel-tabs">
            <a class="is-active">All</a>
        </p>
        <div class="field">
        <p class="control">
            <button class="button is-success is-centered">
            Add Friend
            </button>
        </p>
        </div>
        <div class="panel-block">
            <p class="control has-icons-left">
            <input class="input is-primary" type="text" placeholder="Handle" v-model="handle">
            <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            </p>
        </div>
        <a class="panel-block is-active" v-for="(x, i) in friends" :key= i>
            <span class="panel-icon">
            <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{x.name}}
        </a>
        </article>
</template>

<script>
import { GetUser } from "../models/Users";
export default {
    data: () => ({
                name: '',
                handle: '',
                friends: [
                    {name: 'Andrew', handle: '@Andrew'}
                ],
          }),
    methods: {
        GetUser(handle){
            GetUser(handle);
        }
    }
}
</script>

<style>
</style>