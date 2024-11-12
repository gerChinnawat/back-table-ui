
export const convertToTestTaking = (testTakingItem: string) => {
    if (testTakingItem === 'm1_test') {
        return 'ม.1'
    } else if (testTakingItem === 'm2_test'){
        return 'ม.2'
    } else if (testTakingItem === 'm3_test'){
        return 'ม.3'
    } else if (testTakingItem === 'm4_test'){
        return 'ม.4'
    } else if (testTakingItem === 'm5_test'){
        return 'ม.5'
    } else if (testTakingItem === 'primary_test'){
        return 'ประถมฯ'
    }
};