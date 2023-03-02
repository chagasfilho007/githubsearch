<template>
  <b-container>
    <b-row>
        <b-col cols="4">
            <div>
                <b-card
                    no-body
                    style="max-width: 20rem;"
                    :img-src="user.avatar_url"
                    img-height="300"
                    img-width="300"
                    img-alt="Image"
                    img-top>

                    <b-card-body>
                        <b-card-title>{{user.name}}</b-card-title>
                        <b-card-sub-title class="mb-2">{{user.login}}</b-card-sub-title>
                    </b-card-body>

                    <b-list-group flush>
                        <b-list-group-item v-if="user.company"><b-icon-briefcase-fill></b-icon-briefcase-fill> {{user.company}}</b-list-group-item>
                        <b-list-group-item v-if="user.location"><b-icon-pin-map-fill></b-icon-pin-map-fill> {{user.location}}</b-list-group-item>
                        <b-list-group-item v-if="user.public_repos"><b-icon-bucket-fill></b-icon-bucket-fill> {{user.public_repos}}</b-list-group-item>
                        <b-list-group-item v-if="user.followers"><b-icon-person-fill></b-icon-person-fill> {{user.followers}}</b-list-group-item>
                    </b-list-group>
                </b-card>
            </div>
        </b-col>
        <b-col cols="6">
            <div>
                <b-card v-for="repo in repos" :key="repo.id" class="mb-5">
                    <b-card-title><b-link :href="repo.html_url" target="blank">{{repo.name}}</b-link></b-card-title>
                    <b-card-text>{{repo.description}}</b-card-text>
                    <b-card-text><b-icon-star-fill></b-icon-star-fill> {{repo.stargazers_count}}</b-card-text>
                </b-card>
            </div>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {findUserByLogin, findReposByLogin} from '../services/github-api.js'

export default {
  name: 'UserView',
  data() {
    return {
      user: {},
      repos: []
    }
  },
  beforeCreate() {
    findUserByLogin(this.$route.query.name).then(response => {
        this.user = response.data
        findReposByLogin(this.$route.query.name).then(response => {
            this.repos = response.data
        })
    })
  }
}
</script>
