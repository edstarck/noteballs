<script setup>
import {ref} from 'vue';
import {onClickOutside} from '@vueuse/core';

/*
  state
*/
const showMobileNav = ref(false);
const navBarMenuRef = ref(null);
const navBarBurgerRef = ref(null);

/*
  mobile menu clicked
*/
function handleNavbarClicked() {
  showMobileNav.value = !showMobileNav.value;
}

/*
  mobile menu click outside to close
*/
onClickOutside(
  navBarMenuRef,
  () => {
    if (showMobileNav.value) {
      showMobileNav.value = false;
    }
  },
  {ignore: [navBarBurgerRef]}
);
</script>

<template>
  <nav class="navbar is-success" role="navigation" aria-label="main navigation">
    <div class="container is-max-desktop">
      <div class="navbar-brand">
        <div class="navbar-item is-size-4 is-family-monospace">
          <router-link class="has-text-white" :to="{name: 'notes'}"
            >Noteballs</router-link
          >
        </div>

        <a
          @click="handleNavbarClicked"
          role="button"
          class="navbar-burger"
          :class="{'is-active': showMobileNav}"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasic"
          ref="navBarBurgerRef"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"> </span>
        </a>
      </div>

      <div
        id="navbarBasic"
        class="navbar-menu"
        :class="{'is-active': showMobileNav}"
        ref="navBarMenuRef"
      >
        <div class="navbar-end">
          <router-link
            @click="handleNavbarClicked"
            active-class="is-active"
            :to="{name: 'notes'}"
            class="navbar-item"
          >
            Notes
          </router-link>
          <router-link
            @click="handleNavbarClicked"
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

<style scoped>
@media (max-width: 1023px) {
  .navbar-menu {
    position: absolute;
    width: 100%;
    left: 0;
  }
}
</style>
