import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
            <h1 className="text-5xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8 text-center">
                Oops! The page you are looking for does not exist. It might have been moved or deleted.
            </p>
            <Link to="/" className="px-4  py-2 bg-[#59C6D2] text-white rounded hover:bg-[#23BE0A]">
                Go Back Home
            </Link>
        </div>
    );
};

export default ErrorPage;