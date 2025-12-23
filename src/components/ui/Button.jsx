export default function Button({ children, className = "", ...props }) {
    return (
        <button
            {...props}
            className={`transition transform hover:-translate-y-0.5 active:translate-y-0
        focus:outline-none focus:ring-2 focus:ring-blue-400
        ${className}`}
        >
            {children}
        </button>
    );
}
