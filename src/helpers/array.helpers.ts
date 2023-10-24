export function clearArrayFromEmptyValues(arr: any[]): any[] {
    return arr.filter(el => !!el)
}
