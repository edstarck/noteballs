<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">Noteballs</div>

        <a
          @click.prevent="showMobileMenu = !showMobileMenu"
          :class="{'is-active': showMobileMenu}"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"> </span>
        </a>
      </div>

      <div
        id="navbarBasic"
        :class="{'is-active': showMobileMenu}"
        class="navbar-menu"
      >
        <div class="navbar-end">
          <router-link
            active-class="is-active"
            :to="{name: 'notes'}"
            class="navbar-item"
          >
            Notes
          </router-link>
          <router-link
            active-class="is-active"
            :to="{name: 'stats'}"
            class="navbar-item"
          >
            Stats
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
/*
    imports
*/

import {ref} from 'vue';
/*
    mobile nav
*/

const showMobileMenu = ref(false);
</script>

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 100%;
    left: 0;
  }
}
</style>
