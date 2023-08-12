<script setup>
import {ref} from 'vue';
import Note from '@/components/Notes/Note.vue';
import {useStoreNotes} from '@/stores/storeNotes';
import {useMouse} from '../use/mouse';

// store
const storeNotes = useStoreNotes();

// composable
const {x, y} = useMouse();

const newNote = ref('');
const newNoteRef = ref(null);

/*
  add delete notes
*/

const addNote = () => {
  storeNotes.add(newNote.value);
  newNote.value = '';
  newNoteRef.value.focus();
};
</script>

<template>
  <p class="mb-4">Mouse position is at: {{ x }}, {{ y }}</p>

  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="newNote"
            class="textarea"
            placeholder="Add new note"
            ref="newNoteRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNote"
            :disabled="!newNote"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <Note v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>
