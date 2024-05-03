import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createKeySidebarSlice } from './slices/createKeySidebarSlice';
import { createTaskTakingDetailSlice } from './slices/createTaskTakingDetailSlice';

export const useStore = create(
    persist(
        (set, get) => ({
                ...createKeySidebarSlice(set),
                ...createTaskTakingDetailSlice(set)
                }
            )
        ,
        {
            name: "back-table",
            storage: createJSONStorage(() => sessionStorage)
        },
    ),
);
