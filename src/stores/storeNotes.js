import {defineStore, acceptHMRUpdate} from 'pinia';

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    notes: [
      {
        id: 9,
        content:
          'Sit irure consectetur nostrud mollit cillum ipsum et. Ut elit eiusmod nulla incididunt ullamco ut Lorem exercitation amet deserunt enim. Ea qui officia non amet pariatur. Excepteur ea ex sunt in consequat fugiat deserunt.',
      },
      {
        id: 10,
        content:
          'Sit irure consectetur nostrud mollit cillum ipsum et. Ut elit eiusmod nulla incididunt ullamco ut Lorem exercitation amet deserunt enim. Ea qui officia non amet pariatur.',
      },
      {
        id: 11,
        content: 'Sit irure consectetur nostrud mollit cillum ipsum et.',
      },
    ],
  }),
  getters: {
    getNoteContent: (state) => (id) => {
      const note = state.notes.find((note) => {
        return note.id == id;
      });

      return note.content;
    },
    totalNotesCount: (state) => {
      return state.notes.length;
    },
    totalCharactersCount: (state) => {
      return state.notes.reduce(
        (count, note) => count + note.content.length,
        0
      );
    },
  },
  actions: {
    add(id, content) {
      this.notes.unshift({id, content});
    },
    update(id, content) {
      const index = this.notes.findIndex((note) => note.id == id);
      this.notes[index].content = content;
    },
    delete(id) {
      this.notes = this.notes.filter((note) => note.id !== id);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
