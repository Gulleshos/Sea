const ErrorIcon = ({ className }) => {
    return (
        <svg
            viewBox="0 0 44 44"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M35 9L9 34.9996" strokeLinecap="round" />
            <path
                d="M11.2126 5.51472C12.9467 3.78054 13.8138 2.91344 14.9165 2.45672C16.0191 2 17.2453 2 19.6978 2H24.3022C26.7546 2 27.981 2 29.0836 2.45672C30.1862 2.91344 31.0532 3.78054 32.7874 5.51472L38.4852 11.2126C40.2194 12.9467 41.0866 13.8138 41.5432 14.9165C42 16.0191 42 17.2453 42 19.6978V24.3022C42 26.7546 42 27.981 41.5432 29.0836C41.0866 30.1862 40.2194 31.0532 38.4852 32.7874L32.7874 38.4852C31.0532 40.2194 30.1862 41.0866 29.0836 41.5432C27.981 42 26.7546 42 24.3022 42H19.6978C17.2453 42 16.0191 42 14.9165 41.5432C13.8138 41.0866 12.9467 40.2194 11.2126 38.4852L5.51472 32.7874C3.78054 31.0532 2.91344 30.1862 2.45672 29.0836C2 27.981 2 26.7546 2 24.3022V19.6978C2 17.2453 2 16.0191 2.45672 14.9165C2.91344 13.8138 3.78054 12.9467 5.51472 11.2126"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default ErrorIcon;