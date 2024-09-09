import { create } from "zustand";
import { persist } from "zustand/middleware";

const useUsersVerification = create(
  persist(
    (set, get) => ({
      users: [], 
      addUser: (newUser) => set(() => ({ users: [newUser, ...get().users] })),
    }),
    {
      name: "users_storage", 
      getStorage: () => localStorage, 
    }
  )
);

export default useUsersVerification;
