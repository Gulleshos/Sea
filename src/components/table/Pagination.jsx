export default function Pagination({ pageCount, currentPage, setCurrentPage }) {
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const minPage = Math.max(1, currentPage - 2);
        const maxPage = Math.min(pageCount, currentPage + 2);

        for (let page = minPage; page <= maxPage; page++) {
            pageNumbers.push(
                <p
                    key={page}
                    className={`text-sm sm:text-base py-2 px-4  ${
                        currentPage === page ? "bg-primary" : "bg-white"
                    } ${
                        currentPage === page ? "text-white" : "text-primary"
                    } cursor-pointer rounded-2xl `}
                    onClick={() => setActivePage(page)}
                >
                    {page}
                </p>
            );
        }

        return pageNumbers;
    };

    return (
        <nav className={`${pageCount === 1 ? "hidden" : "flex"}`}>
            <p
                className="text-sm sm:text-base p-2 cursor-pointer mr-2"
                onClick={() =>
                    setCurrentPage(currentPage !== 1 ? currentPage - 1 : 1)
                }
            >
                Prev
            </p>
            {renderPageNumbers()}

            <p
                className="text-sm sm:text-base p-2 cursor-pointer ml-2"
                onClick={() =>
                    setActivePage(
                        currentPage < pageCount ? currentPage + 1 : currentPage
                    )
                }
            >
                Next
            </p>
        </nav>
    );
}
