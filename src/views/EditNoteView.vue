<script setup>
import {ref} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import {useStoreNotes} from '@/stores/storeNotes';
import AddEditNote from '@/components/Notes/AddEditNote.vue';

/*
    router
*/
const route = useRoute();
const router = useRouter();

/*
    store
*/
const notesStore = useStoreNotes();

/*
    note
*/

const noteContent = ref('');
noteContent.value = notesStore.getNoteContent(route.params.id);

/*
  save clicked
*/

const handleSaveClicked = () => {
  notesStore.update(route.params.id, noteContent.value);
  router.push({name: 'notes'});
};
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
        @click="handleSaveClicked"
        :disabled="!noteContent"
        class="button is-link has-background-link"
      >
        Save Note
      </button>
    </template>
  </add-edit-note>
</template>
