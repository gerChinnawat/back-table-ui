
export const createTaskTakingDetailSlice = (set: any) => ({
    modalOpen: false,
    getModalOpen: (newValue: boolean) => set((state: any) => ({ ...state, modalOpen: newValue })),
    studentDetail: {
        student_id: 0,
        prename: "",
        name: "",
        surname: "",
        classNo: 0,
        roomNo: 0,
    },
    getStudentDetail: (newValue: any) => set((state: any) => ({ ...state, studentDetail: newValue })),
    taskTakingDetail: {
        taskName: "",
        deadLine: null,
    },
    getTaskTakingDetail: (newValue: any) => set((state: any) => ({ ...state, taskTakingDetail: newValue })),
    editeTaskTaking: {
        taskTakingId: "",
        picture: null,
        comment: "",
        isActive: false,
    },
    getEditeTaskTaking: (newValue: any) => set((state: any) => ({ ...state, editeTaskTaking: newValue })),
});