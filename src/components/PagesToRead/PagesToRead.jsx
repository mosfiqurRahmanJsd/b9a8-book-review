import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";
import { getStoredRead } from "../../utility/localstorage";

const PagesToRead = () => {
    const storedRead = getStoredRead();

    // Assuming you have a function to get the book details by id
    const getBookDetailsById = (id) => {
        return { name: `Book ${id}`, totalPages: Math.floor(Math.random() * 500) + 100 };
    }

    const data = storedRead.map(bookId => {
        const book = getBookDetailsById(bookId);
        return {
            name: book.name,
            totalPages: book.totalPages
        };
    });

    return (
        <div className="container md:mx-auto flex justify-center">
            <BarChart width={1000} height={450} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalPages" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PagesToRead;
