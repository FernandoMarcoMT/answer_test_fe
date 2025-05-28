import { create } from 'zustand';

type User = {
  id: number;
  name: string;
};

type UserState = {
  users: User[];
  search: string;
  setUsers: (users: User[]) => void;
  setSearch: (search: string) => void;
};

export const useUserStore = create<UserState>((set) => ({
  users: [],
  search: '',
  setUsers: (users) => set({ users }),
  setSearch: (search) => set({ search }),
}));