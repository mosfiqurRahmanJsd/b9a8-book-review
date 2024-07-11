import { toast } from 'react-toastify';


const getStoredRead = () => {
    const storedReadCart = localStorage.getItem('read');
    if (storedReadCart) {
        return JSON.parse(storedReadCart);
    }
    return [];
}

const saveToRead = id => {
    const storedRead = getStoredRead();

    const exists = storedRead.find(bookId => bookId === id);
    if (!exists) {
        storedRead.push(id);
        localStorage.setItem('read', JSON.stringify(storedRead));
        toast.success('Book added to the read list!');
    } else {
        toast.info('Book is already in the read list.');
    }
}


const getStoredWishlist = () => {
    const sotredWishlistCart = localStorage.getItem('wishlist');
    if (sotredWishlistCart) {
        return JSON.parse(sotredWishlistCart);
    }
    return [];
}

const saveToWishlist = id => {
    const storedWishlist = getStoredWishlist()
    const exists = storedWishlist.find(bookId => bookId === id);
    if (!exists) {
        storedWishlist.push(id);
        localStorage.setItem('wishlist', JSON.stringify(storedWishlist));
        toast.success('Book added to the Wishlist!');
    } else {
        toast.info('Book is already in the Wishlist.');
    }
}

export { getStoredRead, saveToRead, getStoredWishlist, saveToWishlist };
