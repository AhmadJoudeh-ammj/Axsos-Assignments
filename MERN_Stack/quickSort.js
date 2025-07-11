
// Hoare’s partitioning selects a pivot (typically the first element), 
// then reorders the array so that all values less than the pivot come before it,
//  and all values greater than the pivot come after it.
function hoarePartition(arr, low, high) {
    var pivot = arr[low];
    var i = low - 1;
    var j = high + 1;

    while (true) {
        // Move i to the right
        i = i + 1;
        while (arr[i] < pivot) {
            i = i + 1;
        }

        // Move j to the left
        j = j - 1;
        while (arr[j] > pivot) {
            j = j - 1;
        }

        // If pointers cross, return partition index
        if (i >= j) {
            return j;
        }

        // Swap arr[i] and arr[j]
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}

function quicksort(arr, low, high) {
    if (low < high) {
        var pivotIndex = hoarePartition(arr, low, high);
        quicksort(arr, low, pivotIndex);
        quicksort(arr, pivotIndex + 1, high);
    }
}