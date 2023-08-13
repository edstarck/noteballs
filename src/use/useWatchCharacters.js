import {watch} from 'vue';

export const useWatchCharacters = (valueToWatch, maxChars = 100) => {
  watch(valueToWatch, (newValue, oldValue) => {
    if (valueToWatch.value.length === maxChars) {
      alert(`Only ${maxChars} characters allowed gosh darnit!`);
    }
  });
};
