//Utils folder for common utility functions

//Swaps two array element's places
export const swapArrayElements = (arr, firstIndex, secondIndex) => {
    const tempElement = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = tempElement;
    return arr;
}