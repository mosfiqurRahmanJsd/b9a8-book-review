


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
    }
}

export { getStoredRead, saveToRead };
