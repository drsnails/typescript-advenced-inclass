// ---------------------- ENUMS ----------------------------------------------------
enum Color { Red, Green, Blue };
// console.log('Color.Red:', Color.Red)
// console.log('Color.Blue:', Color.Blue)

// Start from 1: 
enum Color1 { Red = 1, Green, Blue };
//  manually set the values
enum Color2 { Red = 1, Green = 2, Blue = 9 };

enum Month {
    January,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    October,
    November,
    December
}


formatDate(10)

function formatDate(month: Month) {
    if (month < Month.April && month > Month.February) {

    }
}