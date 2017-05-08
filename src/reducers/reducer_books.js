export default function(state=null, action=null) {
  switch(action.type) {
    case 'BOOK_REMOVED':
      let books = state;
      let newBooks = [];
      for(let i=0; i<books.length; i++) {
          if(books[i].title != action.book.title) {
            newBooks.push(books[i]);
          }
      }
      return newBooks;
    default:
      return [
        {title: 'Javascript: The Good Parts',  pages: 101},
        {title: 'Harry Potter', pages: 39},
        {title: 'The Dark Tower', pages: 85},
        {title: 'Eloquent Ruby', pages: 1}
      ];
  }
}
