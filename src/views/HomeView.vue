<template>
  <b-container >
    <b-img center fluid height="250" width="250" :src="require('../assets/github_logo.png')" alt="Github logo" class="mb-5"></b-img>
    <b-form class="text-center" @submit.prevent="onSubmit">
        <b-input-group
          size="lg"
          class="mb-3">
          <b-form-input v-model="form.name" placeholder="Pesquisar"></b-form-input>
          <b-input-group-append>
            <b-button size="sm" text="Button" @click="onSubmit">
              <b-icon-search></b-icon-search>
            </b-button>
          </b-input-group-append>
        </b-input-group>
    </b-form>
  </b-container>
</template>

<script>
import router from '../router'

export default {
  name: 'HomeView',
  data() {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
      onSubmit() {
        router.push({path: 'users', query: { name: this.form.name }})
      }
  }
}
</script>
