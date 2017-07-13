export function selectBook(book) {
    // selectBook is an ACTION CREATOR, it needs to return an action
    // an object with a type property (type + payload (optional))
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}