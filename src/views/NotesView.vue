<script setup>
/*
  imports
*/
import {ref} from 'vue';
import OneNote from '@/components/Notes/Note.vue';
import {useStoreNotes} from '@/stores/storeNotes';
import {useMouse} from '../use/mouse';
import AddEditNote from '@/components/Notes/AddEditNote.vue';
import {uiid} from '../utils/uiid';

// store
const storeNotes = useStoreNotes();

// composable
const {x, y} = useMouse();

//state
const newNote = ref('');
const addEditNoteRef = ref(null);
const id = uiid();

/*
  add delete notes
*/

const addNote = () => {
  storeNotes.add(id, newNote.value);
  newNote.value = '';
};
</script>

<template>
  <p class="mb-4">Mouse position is at: {{ x }}, {{ y }}</p>

  <div class="notes">
    <add-edit-note
      :modelValue="newNote"
      @update:modelValue="(newValue) => (newNote = newValue)"
      ref="addEditNoteRef"
      placeholder="Add a new note"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="!newNote"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </add-edit-note>
    <one-note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>
