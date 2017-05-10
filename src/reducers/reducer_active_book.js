//State argument is not application state, only the state
//this reducer is responsible for.
export default function(state=null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      console.log(state);
      return action.payload;
    case 'BOOK_REMOVED':
      if(state.title == action.book.title) {
        return null;
      }
  }
  return state;
}
