<template>
  <nav-bar />
  <div class="container is-max-desktop px-2 py-4">
    <router-view />
  </div>
</template>

<script setup>
/*
  imports
*/

import NavBar from '@/components/Layout/NavBar.vue';
import {useStoreNotes} from '@/stores/storeNotes';
import {onMounted} from 'vue';

/*
  store
*/
const storeNotes = useStoreNotes();

/*
  mounted
*/
onMounted(() => {
  storeNotes.get();
});
</script>

<style>
@import 'bulma/css/bulma.min.css';
</style>
