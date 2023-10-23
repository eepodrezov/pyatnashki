
export function filterArrayFromEmpty(arr: any[]): any[] {
 return arr.filter(el => !!el)
}
