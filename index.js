//
// Arrays
//
// MDN: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
//

// Use console.log to check your answers
// Don't change this array directly

const bands = ["Muse", "System of a Down", "Chevelle", "Audioslave", "Rage Against The Machine", "Nuclear Power Trio"];

// 0. Set the len variable to the length of the bands array WITHOUT hard coding a number like "const len = 4"
const len = bands.length
console.log(len)
// 1. Using an index on the bands array, change the value of the
// thirdBand variable below to be the third band listed in the array
const thirdBand = bands[2]
console.log(thirdBand)
// 2. Replace the fourth band in the band array with Green Day
const fourthBand = 'Green Day'
console.log(fourthBand)
// 3. Remove the last band from the array and save them in lastBand below
const lastBand = bands.pop()
console.log(lastBand)

// 4. Remove the first band from the array and save them in firstBand below
const firstBand = bands.shift()
console.log(firstBand)
// 5. Add a band named Nightwish to the end of the bands array
bands.push('Nightwish')
console.log(bands)
// 6. Remove System of a Down from the bands array
const firstElement = bands.shift('System of a Down')
console.log(bands)
// 7. Add a band named Metallica to the beginning of the bands array
bands.unshift("Metallica")
console.log()
// 8. Use slice() to set firstTwoBands to the first two entries in the bands array
const firstTwoBands = bands.slice(0,2)
console.log(firstTwoBands)