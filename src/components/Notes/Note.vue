<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ props.noteData.content }}
        <div class="has-text-right has-text-grey-light">
          <small>{{ charactersLength }}</small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <a href="#" class="card-footer-item">Edit</a>
      <a @click.prevent="handleDeleteClicked" href="#" class="card-footer-item"
        >Delete</a
      >
    </footer>
  </div>
</template>

<script setup>
/*
    imports
*/
import {defineProps, computed, defineEmits} from 'vue';

/*
    props
*/

const props = defineProps({
  noteData: {
    type: Object,
    required: true,
  },
});

/*
    computed
*/

const charactersLength = computed(() => {
  const length = props.noteData.content.length;
  const description = length > 1 ? 'characters' : 'character';

  return `${length} ${description}`;
});

/*
    events
*/

const emit = defineEmits(['deleteClicked']);

/*
    methods
*/

const handleDeleteClicked = () => emit('deleteClicked', props.noteData.id);
</script>
