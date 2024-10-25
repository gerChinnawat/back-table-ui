
export const createTransactionSlice = (set: any) => ({
    editedTransaction: (newValue: any) => set((state: any) => ({ 
        ...state,
        transaction: {
            ...state.transaction,
            status: newValue.status,
            remark: newValue.remark,
            isVerify: newValue.status === 'success' ? true : false,
        }
    })),
    getTransaction: (newValue: any) => set((state: any) => ({
        ...state,
        transaction: {
            ...newValue
        }
    })),
    transaction: {
        transactionId: '',
        prefix: '',
        firstname: '',
        lastname: '',
        school_name: '',
        city: '',
        phone_number: '',
        total_fee: '',
        image_ref: '',
        isVerify: false,
        createdAt: '',
        updatedAt: '',
        status: '',
        remark: '',
    },
});