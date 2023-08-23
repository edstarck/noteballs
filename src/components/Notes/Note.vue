<script setup>
/*
  imports
*/
import {reactive, computed} from 'vue';
import ModalDeleteNote from '@/components/Notes/ModalDeleteNote.vue';
import {useDateFormat} from '@vueuse/core';

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
  formated date
*/
const dateFormatted = computed(() => {
  let date = new Date(parseInt(props.note.date));
  return useDateFormat(date, 'MM-DD-YYYY @ HH:mm').value;
});

/*
  emits
*/
const emit = defineEmits(['editClicked']);

/*
  character length
*/
const characterLength = computed(() => {
  if (!props.note.content.length) return false;

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
        <div class="columns is-mobile has-text-grey-light mt-2">
          <small class="column">{{ dateFormatted }}</small>
          <small class="column has-text-right">{{ characterLength }}</small>
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
