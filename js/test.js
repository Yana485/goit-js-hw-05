const books =
  [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", 
   author: "Tanith Lee", 
   rating: 7.94 
  },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;

const names = books
  .filter((book) => book.rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .toSorted((a,b) => a.localeCompare(b))
  ;
console.log(names);




//!реалізувати за допомогою .reduce()

// const printContactsInfo = ({ names, phones }) => {
//   const nameList = names.split(",");
//   const phoneList = phones.split(",");

//   const contactsDataArr = [];

//   nameList.forEach((value, i) => {
//     const contactsData = {
//       name: value,
//       phone: phoneList[i],
//     };

//     contactsDataArr.push(contactsData);
//   });

//   return contactsDataArr;
// };

//! реалізація
//*функція №1
const printContactsInfo = ({ names, phones }) => {   
  namesArray = names.split(",");
  phonesArray = phones.split(",");

  //*функція №2
  const result = namesArray.reduce((finalArray, currentValue, index) => {
    /*finalArray - акумулятор, проміжний результат. Той самий масив, куди треба вписати об'єкти
    currentValue - поточний елемент масиву, який перебирається
    index - індекс - в даному випадку індекс елементу масиву phonesArray*/

    //*тут створюється об'єкт. На кожній ітерації буде створюватися новий об'єкт і записуватися в масив - finalArray.push(obj);
    const obj = {
      name: currentValue,
      phone: phonesArray[index],
    }

    finalArray.push(obj);
    return finalArray; //* return функції №2
  }, []);

  return result; //* return функції №1. Цей return можна поставити перед namesArray.reduce (але тоді не треба задавати const result)
}
console.log(
  printContactsInfo({
    names: "Jacob,William,Solomon,Artemis",
    phones: "89001234567,89001112233,890055566377,890055566300",
  })
);