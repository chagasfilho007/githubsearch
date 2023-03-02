<template>
  <b-container>
    <b-img center fluid src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Github logo"></b-img>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.name"
          placeholder="Pesquisar"
          required
        ></b-form-input>
      </b-form-group>

      
      <b-button @click="onSubmit" variant="primary">Pesquisar</b-button>
    </b-form>
  </b-container>
</template>

<script>
import {searchUsersByName} from '../services/github-api.js'

export default {
  name: 'AboutView',
  data() {
    return {
      form: {
        name: ''
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true
    }
  },
  methods: {
      onSubmit() {
        searchUsersByName(this.form.name).then(response => console.log(response.data))
      }
  }
}
</script>
