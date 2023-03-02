<template>
  <b-container>
    <div v-for="user in users" :key="user.id">
        <b-card :img-src="user.avatar_url" img-height="50"
          img-width="50" img-alt="Card image" img-left class="mb-3">
            <b-card-text>
                <router-link :to="`/user?name=${user.login}`">{{user.login}}</router-link>
            </b-card-text>
        </b-card>
    </div>
  </b-container>
</template>

<script>
import {searchUsersByName} from '../services/github-api.js'

export default {
  name: 'UserListView',
  data() {
    return {
      users: []
    }
  },
  beforeCreate() {
    searchUsersByName(this.$route.query.name).then(response => {
        this.users = response.data.items
    })
  }
}
</script>
