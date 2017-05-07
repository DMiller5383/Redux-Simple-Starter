export default function(state=null, action=null) {
  switch(action.type) {
    case 'BOOK_REMOVED':
      let books = [
        {title: 'Javascript: The Good Parts',  pages: 101},
        {title: 'Harry Potter', pages: 39},
        {title: 'The Dark Tower', pages: 85},
        {title: 'Eloquent Ruby', pages: 1}
      ];

      return books.map((book)=>{
        if(book.title != action.book.title) {
          return book;
        }
      });


      default:
        return [
          {title: 'Javascript: The Good Parts',  pages: 101},
          {title: 'Harry Potter', pages: 39},
          {title: 'The Dark Tower', pages: 85},
          {title: 'Eloquent Ruby', pages: 1}
        ];
  }
}
