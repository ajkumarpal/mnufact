

// Helper function to remove spaces and special characters from a string
function cleanKey(key) {
    return key.replace(/[^a-zA-Z0-9]/g, '');
}


// Function to calculate the median from an array
function calculateMedian(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    const mid = Math.floor(sortedArr.length / 2);
    return sortedArr.length % 2 === 0
      ? (sortedArr[mid - 1] + sortedArr[mid]) / 2
      : sortedArr[mid];
  }
  
  // Function to calculate the mode from an object of frequencies
  function calculateMode(obj) {
    let mode = null;
    let maxFrequency = 0;
  
    for (const key in obj) {
      if (obj[key] > maxFrequency) {
        mode = key;
        maxFrequency = obj[key];
      }
    }
  
    return parseFloat(mode); // Convert mode to a number
  }
  
  function createGamma(obj, roundUptoDecimalPlaces){
      return parseFloat(((Number(obj.Ash) * Number(obj.Hue)) / Number(obj.Magnesium)).toFixed(roundUptoDecimalPlaces));
  }


  export { cleanKey, calculateMedian, calculateMode, createGamma}