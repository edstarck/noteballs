import {defineStore, acceptHMRUpdate} from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from 'firebase/firestore';
import {db} from '@/js/firebase';
import {uiid} from '@/utils/uiid';

const notesCollectionRef = collection(db, 'notes');

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    notes: [],
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
    async get() {
      onSnapshot(notesCollectionRef, (querySnapshot) => {
        const notes = [];

        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
          };
          notes.push(note);
        });

        this.notes = notes;
      });
    },
    async add(content) {
      const id = uiid();

      await setDoc(doc(notesCollectionRef, id), {
        content,
      });
    },
    async delete(idToDelete) {
      await deleteDoc(doc(notesCollectionRef, idToDelete));
    },
    async update(id, content) {
      await updateDoc(doc(notesCollectionRef, id), {
        content,
      });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreNotes, import.meta.hot));
}
