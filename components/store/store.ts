import create from 'zustand';
import { persist } from 'zustand/middleware';

// Визначення типу для стору
type PageStore = {
  currentPage: number,
  setCurrentPage: (newPage: number) => void,
  favorites: CharacterCard[],
  addToFavorites: (character: CharacterCard) => void,
  removeFromFavorites: (character: CharacterCard) => void,
};


// Створення інстанції стору з синхронізацією Local Storage
const useCurrentStore = create<PageStore>()(
  persist(
    (set, get) => ({
        currentPage: 1, 
        setCurrentPage: (newPage) => set({ currentPage: newPage }),
        favorites: [],
        addToFavorites: (character) => {
            // Перевірка наявності об'єкта в списку перед додаванням
            if (!get().favorites.some((fav: CharacterCard) => fav.id === character.id)) {
              set((state) => ({ favorites: [...state.favorites, character] }));
            }
        },
        removeFromFavorites: (character) => {
          set((state) => ({
            // Видалення об'єкта зі списку обраних, залишаючи решту об'єктів
            favorites: state.favorites.filter((fav) => fav.id !== character.id),
          }))},
    }),
    {
      name: 'page-store', 
      getStorage: () => localStorage, 
    }
  )
);

export default useCurrentStore;
