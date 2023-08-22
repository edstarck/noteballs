<script setup>
/*
  imports
*/
import {reactive, computed} from 'vue';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue';

/*
  props
*/
const props = defineProps({
  note: {
    type: Object,
    required: true,
    default: () => {},
  },
});

/*
  emits
*/

const emit = defineEmits(['editClicked']);

/*
  character length
*/

const characterLength = computed(() => {
  const description =
      props.note.content.length > 1 ? 'characters' : 'character',
    length = props.note.content.length;
  return `${length} ${description}`;
});

/*
  modal
*/
const modals = reactive({
  deleteNote: false,
});

/*
  delete note
*/

const handleDeleteClicked = () => {
  modals.deleteNote = true;
};
</script>

<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small>{{ characterLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="{name: 'edit', params: {id: props.note.id}}"
        class="card-footer-item"
      >
        Edit
      </RouterLink>
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>

    <modal-delete-note
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :note-id="note.id"
    />
  </div>
</template>
