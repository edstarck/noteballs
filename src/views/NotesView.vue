<script setup>
import {ref} from 'vue';
import Note from '@/components/Notes/Note.vue';

const newNote = ref('');
let notes = ref([
  {
    id: 'id1',
    content:
      'Sit irure consectetur nostrud mollit cillum ipsum et. Ut elit eiusmod nulla incididunt ullamco ut Lorem exercitation amet deserunt enim. Ea qui officia non amet pariatur. Excepteur ea ex sunt in consequat fugiat deserunt.',
  },
  {
    id: 'id2',
    content:
      'Sit irure consectetur nostrud mollit cillum ipsum et. Ut elit eiusmod nulla incididunt ullamco ut Lorem exercitation amet deserunt enim. Ea qui officia non amet pariatur. Excepteur ea ex sunt in consequat fugiat deserunt.',
  },
  {
    id: 'id3',
    content: 'Sit irure consectetur nostrud mollit cillum ipsum et.',
  },
]);
const newNoteRef = ref(null);

const addNote = () => {
  const currentDate = new Date().getTime(),
    id = currentDate.toString(),
    note = {id, content: newNote.value};

  notes.value.unshift(note);

  newNote.value = '';

  newNoteRef.value.focus();
};

/*

*/

const deleteNote = (id) => {
  notes.value = notes.value.filter((note) => note.id !== id);
};
const editNote = (content) => {
  newNote.value = content;
};
</script>

<template>
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

    <Note
      v-for="note in notes"
      :key="note.id"
      :note="note"
      @deleteClicked="deleteNote"
      @editClicked="editNote"
    />
  </div>
</template>
