export const createLoginSlice = (set: any) => ({
    email: '',
    getUserEmail: (email: string) => set((state: any) => ({ ...state, email: email })),
});