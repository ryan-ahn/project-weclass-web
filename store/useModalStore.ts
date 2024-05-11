import { ref } from 'vue';
import { defineStore } from 'pinia';

const useDataStore = defineStore('data', () => {
  // state
  const isOpen = ref<boolean>(false);
  // set state
  const setOpen = () => {
    isOpen.value = true;
  };
  return {
    isOpen,
    setOpen,
  };
});

export default useDataStore;
