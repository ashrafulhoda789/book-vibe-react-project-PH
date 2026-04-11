
const getAllReadListFromLocalDB = () => {
    const allReadList = localStorage.getItem('readList');
    // console.log(allReadList, "RL");

    if (allReadList) return JSON.parse(allReadList);

    return [];
}

const addReadListToLocalDB = (book) => {
    const allBooks = getAllReadListFromLocalDB();

    const isAlreadyExist = allBooks.find(bk => bk.bookId == book.bookId)
    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("readList", JSON.stringify(allBooks));
    }
}

const getAllWishListFromLocalDB = () => {
    const allWishList = localStorage.getItem('wishList');
    // console.log(allReadList, "RL");

    if (allWishList) return JSON.parse(allWishList);

    return [];
}

const addWishListToLocalDB = (book) => {
    const allBooks = getAllWishListFromLocalDB();

    const isAlreadyExist = allBooks.find(bk => bk.bookId == book.bookId)
    if (!isAlreadyExist) {
        allBooks.push(book);
        localStorage.setItem("wishList", JSON.stringify(allBooks));
    }
}



export { getAllReadListFromLocalDB, addReadListToLocalDB, addWishListToLocalDB, getAllWishListFromLocalDB }