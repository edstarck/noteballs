<template>
  <router-link :to="{ name: 'notes' }">notes</router-link> |
  <router-link :to="{ name: 'stats' }">stats</router-link>

  <router-view></router-view>
</template>
