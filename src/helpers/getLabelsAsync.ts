
// This function mocks a simple synchronous API to fetch the label list by keyword.
// Example:
//  const val = getLabels('C');
//  console.log(val);
function getLabels(keyword: string) {
    const allLabels = ['NextActions', 'Someday_Actions', 'Costco', 'Alexa'];
    const result = allLabels
        .filter(function(x) {
            return x.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
        });

    console.log(result)
    return result;
}

// This function mocks the asynchronous API to fetch the label list by keyword.
// Example:
//  getLabelsAsync('C').then(function(val) {
//     console.log(val);
//  })
export function getLabelsAsync(keyword: string):Promise<string[]> {
    const result = getLabels(keyword);
    const delay = Math.random() * 800 + 200; // delay 200~1000ms
    return new Promise(function(resolve) {
        setTimeout(resolve, delay, result);
    });
}