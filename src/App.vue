<template>
  <div id="app">
    <div>
      <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="/">GitHub Search</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <router-view style="margin-top: 5%"/>
  </div>
</template>

<style>
  
</style>
