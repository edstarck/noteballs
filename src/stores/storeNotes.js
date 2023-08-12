import {defineStore, acceptHMRUpdate} from 'pinia';
import {uiid} from '../utils/uiid';

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    notes: [
      {
        id: 'id1',
        content:
          'Sit irure consectetur nostrud mollit cillum ipsum et. Ut elit eiusmod nulla incididunt ullamco ut Lorem exercitation amet deserunt enim. Ea qui officia non amet pariatur. Excepteur ea ex sunt in consequat fugiat deserunt.',
      },
      {
        id: 'id2',
        content:
          'Sit irure consectetur nostrud mollit cillum ipsum et. Ut elit eiusmod nulla incididunt ullamco ut Lorem exercitation amet deserunt enim. Ea qui officia non amet pariatur.',
      },
      {
        id: 'id3',
        content: 'Sit irure consectetur nostrud mollit cillum ipsum et.',
      },
    ],
  }),
  getters: {},
  actions: {
    add(id, content, callback) {
      this.notes.unshift({id: uiid(), content});
    },
    edit() {},
    delete(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
