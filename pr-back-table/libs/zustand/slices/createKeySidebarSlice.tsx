export const createKeySidebarSlice = (set: any) => ({
    key: '/dashboard',
    getKey: (newKey: string) => set((state: any) => ({ ...state, key: newKey })),
});