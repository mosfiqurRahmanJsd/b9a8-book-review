
import { toast } from 'react-toastify';

// get the stored read list from localStorage
const getStoredRead = () => {
    const storedReadCart = localStorage.getItem('read');
    if (storedReadCart) {
        return JSON.parse(storedReadCart);
    }
    return [];
}

//  get the stored wishlist from localStorage
const getStoredWishlist = () => {
    const storedWishlistCart = localStorage.getItem('wishlist');
    if (storedWishlistCart) {
        return JSON.parse(storedWishlistCart);
    }
    return [];
}

// save a book to the read list
const saveToRead = id => {
    const storedRead = getStoredRead();

    // check if the book is in the read list
    const existsInRead = storedRead.find(bookId => bookId === id);
    if (!existsInRead) {
        // add the book to the read list
        storedRead.push(id);
        localStorage.setItem('read', JSON.stringify(storedRead));
        toast.success('Book added to the read list!');

    } else {
        toast.info('Book is already in the read list.');
    }
}

// save a book to the wishlist
const saveToWishlist = id => {
    const storedWishlist = getStoredWishlist();
    const storedRead = getStoredRead();

    // check if the book is in the read list
    const isInReadList = storedRead.find(bookId => bookId === id);
    if (isInReadList) {
        toast.error('Book is already read and cannot be added to the wishlist.');
        return;
    }

    // check if the book is already in the wishlist
    const existsInWishlist = storedWishlist.find(bookId => bookId === id);
    if (!existsInWishlist) {
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
        toast.success('Book added to the Wishlist!');
    } else {
        toast.info('Book is already in the Wishlist.');
    }
}

export { getStoredRead, saveToRead, getStoredWishlist, saveToWishlist };
