<script setup>
/*
  imports
*/
import {onMounted, onUnmounted, ref} from 'vue';
import {onClickOutside} from '@vueuse/core';
import {useStoreNotes} from '@/stores/storeNotes';

/*
    store
*/
const storeNotes = useStoreNotes();

/*
  props
*/
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: Number,
    required: true,
  },
});

/*
  state
*/
const modalRef = ref(null);

/*
  emits
*/
const emit = defineEmits(['update:modelValue']);

/*
  cancel clicked
*/

const closeModal = () => {
  emit('update:modelValue', false);
};

/*
  modal outside click
*/
onClickOutside(modalRef, closeModal);

/*
  delete clicked
*/
const deleteNote = () => {
  storeNotes.delete(props.noteId);
  closeModal();
};

/*
  keyboard control
*/

const handleKeyboard = (event) => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

onMounted(() => {
  document.addEventListener('keyup', handleKeyboard);
});

onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyboard);
});
</script>

<template>
  <div class="modal is-active p-4">
    <div class="modal-background"></div>
    <div class="modal-card" ref="modalRef">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note?</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Are you sure you want delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-flex-end">
        <button @click="closeModal" class="button">Cancel</button>
        <button @click="deleteNote" class="button is-danger">Delete</button>
      </footer>
    </div>
  </div>
</template>
