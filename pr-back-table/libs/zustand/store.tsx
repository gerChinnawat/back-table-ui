import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { createKeySidebarSlice } from './slices/createKeySidebarSlice';
import { createTaskTakingDetailSlice } from './slices/createTaskTakingDetailSlice';
import { createTransactionSlice } from './slices/createTransactionSlice';
import { createLoginSlice } from './slices/loginSlice';

export const useStore = create(
    persist(
        (set, get) => ({
                ...createKeySidebarSlice(set),
                ...createTaskTakingDetailSlice(set),
                ...createTransactionSlice(set),
                ...createLoginSlice(set),
                }
            )
        ,
        {
            name: "back-table",
            storage: createJSONStorage(() => sessionStorage)
        },
    ),
);
