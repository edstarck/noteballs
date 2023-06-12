<template>
  <div class="notes">
    <div class="card has-background-success-dark p-4 mb-5">
      <div class="field">
        <div class="control">
          <textarea
            v-model="noteContent"
            class="textarea"
            placeholder="Add a new note"
            ref="noteContentRef"
          ></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button
            @click="addNewNote"
            :disabled="!noteContent"
            class="button is-link has-background-success"
          >
            Add New Note
          </button>
        </div>
      </div>
    </div>

    <note-item
      v-for="note in notes"
      :key="note.id"
      :note-data="note"
      @deleteClicked="onDeleteNote"
    />
  </div>
</template>

<script setup>
/*
  imports
*/

import {ref, computed} from 'vue';
import NoteItem from '@/components/Notes/Note.vue';

/*
  notes
*/

const noteContent = ref('');
const noteContentRef = ref(null);
const notes = ref([
  {
    id: 'id1',
    content:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ad quae repellendus exercitationem praesentium. Recusandae quod voluptates iure quia, eligendi exercitationem praesentium animi commodi! Veritatis exercitationem ea adipisci molestias aliquid?',
  },
  {
    id: 'id2',
    content: 'This is a shoter noter! Woo!',
  },
]);

/*
  computed
*/

const notesIdx = computed(() => notes.value.length);

/*
  methods
*/

const addNewNote = () => {
  let note = {
    id: `id${notesIdx.value + 1}`,
    content: noteContent.value,
  };

  notes.value.unshift(note);
  noteContent.value = '';
  noteContentRef.value.focus();
};

const onDeleteNote = (idToDelete) => {
  notes.value = notes.value.filter((note) => note.id !== idToDelete);
};
</script>
