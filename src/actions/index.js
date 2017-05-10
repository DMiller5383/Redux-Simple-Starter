export function selectBook(book) {
  //selectBook is an ActionCreator, it needs to return an action, an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}

export function removeBook(book) {

  return {
    type: 'BOOK_REMOVED',
    book: book
  }
}
