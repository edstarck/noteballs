<script setup>
import {ref} from 'vue';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

/*
    note
*/

const noteContent = ref('');
</script>

<template>
  <div class="edit-note">
    <h1 class="mb-4">Edit note with an id of: {{ $route.params.id }}</h1>
  </div>
  <add-edit-note
    v-model="noteContent"
    label="Edit note"
    placeholder="Edit note"
    bgColor="link"
    ref="addEditNoteRef"
  >
    <template #buttons>
      <button
        @click="$router.push({name: 'notes'})"
        class="button is-link is-light mr-4"
      >
        Cancel
      </button>
      <button
        :disabled="!noteContent"
        class="button is-link has-background-link"
      >
        Save Note
      </button>
    </template>
  </add-edit-note>
</template>
