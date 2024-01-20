const WarningIcon = ({ className }) => {
    return (
        <svg
            viewBox="0 0 44 44"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M22 32V20" strokeLinecap="round" />
            <path d="M22 12C23.1046 12 24 12.8954 24 14C24 15.1046 23.1046 16 22 16C20.8954 16 20 15.1046 20 14C20 12.8954 20.8954 12 22 12Z" />
            <path
                d="M42 22C42 31.428 42 36.1422 39.071 39.071C36.1422 42 31.428 42 22 42C12.5719 42 7.85786 42 4.92894 39.071C2 36.1422 2 31.428 2 22C2 12.5719 2 7.85786 4.92894 4.92894C7.85786 2 12.5719 2 22 2C31.428 2 36.1422 2 39.071 4.92894C41.0186 6.87642 41.6712 9.6131 41.8898 14"
                strokeLinecap="round"
            />
        </svg>
    );
};

export default WarningIcon;
