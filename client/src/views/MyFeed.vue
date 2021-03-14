<template>
  <div id="my-wall">
      <div class="columns">
          <div class="column is-one-quarter">
              <div class="content-item">
                  <FriendsShort />
              </div>
          </div>
          <div class="column">

              <div class="content-item">
                  <content-creation :newPost="newPost" @add="addPost" />
              </div>

              <div class="content-item" v-for="(post, i) in posts" :key="i">
                <ContentCard :post="post" @delete="deletePost(i)" />
              </div>
          </div>
          <div class="column is-one-quarter">
              <div class="content-item">
                <ContentCard :post="newPost" />
              </div>

          </div>
      </div>
  </div>
</template>

<script>
import Vue from "vue";
import ContentCard from "../components/ContentCard";
import ContentCreation from '../components/ContentCreation.vue';
import Session from '../models/Session';
import { GetMyFeed } from "../models/Posts";
//import { addPost } from "../models/Posts";
export default Vue.extend({
    data: ()=> ({
        newPost: {
            user: { }
        },
        posts: []
    }),
    mounted() {
        var posts = []
        var i;
for (i = 0; i < Session.user.friends.length; i++) {
  posts = posts.concat(GetMyFeed(i))
}
this.posts = posts;
    },
    components: {
        ContentCard,
        ContentCreation
    },
    methods: {
        addPost(){
            //addPost(this.newPost);
            this.posts.unshift(this.newPost);
            this.newPost = { user: {} }
        },
        deletePost(i){
            this.posts.splice(i, 1);
        }
    }
})
</script>

<style>
.content-item {
    margin-top: 10px;
    margin-bottom: 10px;
}
</style>