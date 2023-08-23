import {defineStore, acceptHMRUpdate} from 'pinia';
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc,
  updateDoc,
  query,
  orderBy,
} from 'firebase/firestore';
import {db} from '@/js/firebase';
import {uiid} from '@/utils/uiid';
// import {sleep} from '@/utils/sleep';

const notesCollectionRef = collection(db, 'notes');
const notesCollectionQuery = query(notesCollectionRef, orderBy('date', 'desc'));

export const useStoreNotes = defineStore('notes', {
  state: () => ({
    notes: [],
    notesLoaded: false,
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
      this.notesLoaded = true;

      onSnapshot(notesCollectionQuery, (querySnapshot) => {
        const notes = [];

        querySnapshot.forEach((doc) => {
          const note = {
            id: doc.id,
            content: doc.data().content,
            date: doc.data().date,
          };
          notes.push(note);
        });
        // await sleep(3000);
        this.notes = notes;
        this.notesLoaded = false;
      });
    },
    async add(content) {
      await addDoc(notesCollectionRef, {
        content,
        date: uiid(),
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
