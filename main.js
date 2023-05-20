function displayCurrentDate() {
    const currentDate = new Date();
    const day = currentDate.toLocaleString("en-us", { weekday: "long" });
    const date = currentDate.getDate();
    const month = currentDate.toLocaleString("en-us", { month: "long" });
    const year = currentDate.getFullYear();
    console.log(`Today is: ${day}, ${date} ${month} ${year}`);
  }
  
  async function addDays(date, numDays) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        date.setDate(date.getDate() + numDays);
        resolve(date);
      }, 1000);
    });
  
    const newDate = await promise;
    console.log(`New date is: ${newDate}`);
  }
  
  // קריאה לפונקציה displayCurrentDate
  displayCurrentDate();
  
  // יצירת אובייקט Date והוספת ימים
  const myDate = new Date();
  addDays(myDate, 10);



// 2 
  const library = {
    books: [
        { title: 'Book 1', author: 'Author 1' },
        { title: 'Book 2', author: 'Author 2' },
        { title: 'Book 3', author: 'Author 1' },
        { title: 'Book 4', author: 'Author 3' },
        { title: 'Book 5', author: 'Author 2' },
        { title: 'Book 6', author: 'Author 1' },
        { title: 'Book 7', author: 'Author 3' },
        { title: 'Book 8', author: 'Author 4' },
        { title: 'Book 9', author: 'Author 4' },
        { title: 'Book 10', author: 'Author 1' },
        { title: 'Book 11', author: 'Author 5' },
        { title: 'Book 12', author: 'Author 5' },
        { title: 'Book 13', author: 'Author 1' },
        { title: 'Book 14', author: 'Author 3' },
        { title: 'Book 15', author: 'Author 2' },],
    findBooksByAuthor: function(author) {
      const result = [];
      this.books.forEach(function(book) {
        if (book.author === author) {
          result.push(book.title);
        }
      });
      return result;
    }
  };
  
  const author = 'Author 1';
  // חיפוש המחבר לפי בחירה
  const booksByAuthor = library.findBooksByAuthor(author);
  console.log(`Books by ${author}:`, booksByAuthor);