<script setup>
/*
  imports
*/
import {computed} from 'vue';

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

const emit = defineEmits(['deleteClicked', 'editClicked']);

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
  handle delete clicked
*/

const handleDeleteClicked = () => {
  emit('deleteClicked', props.note.id);
};
/*
  handle edit clicked
*/

const handleEditClicked = () => {
  emit('editClicked', props.note.content);
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
      <a @click.prevent="handleEditClicked" href="#" class="card-footer-item"
        >Edit</a
      >
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>
