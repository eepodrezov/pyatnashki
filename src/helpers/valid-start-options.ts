export type ValidOption = {
    value: string,
    result: number | 'fail'
}

export const validStartOptions = [
    { value: '123456789AFB0EDC', result: 'fail' },
    { value: 'F2345678A0BE91CD', result: 'fail' },
    { value: '123456789ABCDEF0', result: 0 },
    { value: '1234067859ACDEBF', result: 5 },
    { value: '5134207896ACDEBF', result: 8 },
    { value: '16245A3709C8DEBF', result: 10 },
    { value: '1723068459ACDEBF', result: 13 },
    { value: '12345678A0BE9FCD', result: 19 },
    { value: '51247308A6BE9FCD', result: 27 },
    { value: 'F2345678A0BE91DC', result: 33 },
    { value: '75123804A6BE9FCD', result: 35 },
    { value: '75AB2C416D389F0E', result: 45 },
    { value: '04582E1DF79BCA36', result: 48 },
    { value: 'FE169B4C0A73D852', result: 52 },
    { value: 'D79F2E8A45106C3B', result: 55 },
    { value: 'DBE87A2C91F65034', result: 58 },
    { value: 'BAC0F478E19623D5', result: 61 },
] as ValidOption[]