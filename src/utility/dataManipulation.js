
import {data} from './data';
import { cleanKey, calculateMedian, calculateMode, createGamma} from './Helper';

const actionToBePerformed = ['Mean', 'Median', 'Mode'];
const uniqueKeys = new Set();
const roundUptoDecimalPlaces = 3;
// Initialize an object to store the results
const results = {};

// Calculate mean, median, and mode for each key
data.forEach(obj => {
    obj.Gamma = createGamma(obj, roundUptoDecimalPlaces);
    Object.keys(obj).forEach(key => {
        uniqueKeys.add(key);

        const cleanedKey = cleanKey(key);
        const value = parseFloat(obj[key]);

        // Calculate mean
        if (!results[`${cleanedKey}Mean`]) {
            results[`${cleanedKey}Mean`] = value;
        } else {
            results[`${cleanedKey}Mean`] += value;
        }

        // Calculate median
        if (!results[`${cleanedKey}Median`]) {
            results[`${cleanedKey}Median`] = [value];
        } else {
            results[`${cleanedKey}Median`].push(value);
        }

        // Calculate mode
        if (!results[`${cleanedKey}Mode`]) {
            results[`${cleanedKey}Mode`] = {};
        }
        results[`${cleanedKey}Mode`][value] = (results[`${cleanedKey}Mode`][value] || 0) + 1;
    });
});

const tableHeaderWithGamma = Array.from(uniqueKeys);

const tableHeaderWithoutGamma = tableHeaderWithGamma.filter((header) => header != "Gamma");

// Calculate the final mean, median, and mode for each key
Object.keys(results).forEach(key => {
  if (key.endsWith("Mean")) {
    results[key] = parseFloat((results[key] / data.length).toFixed(roundUptoDecimalPlaces))
  } else if (key.endsWith("Median")) {
    results[key] = parseFloat(calculateMedian(results[key]).toFixed(roundUptoDecimalPlaces));
  } else if (key.endsWith("Mode")) {
    results[key] = calculateMode(results[key]);
  }
});

const {...resultWithGamma} = results;


const {...resultWithoutGamma} = results;
delete resultWithoutGamma.GammaMean;
delete resultWithoutGamma.GammaMedian;
delete resultWithoutGamma.GammaMode;

export {
  actionToBePerformed,

  tableHeaderWithoutGamma,
  resultWithoutGamma,

  tableHeaderWithGamma,
  resultWithGamma
};
