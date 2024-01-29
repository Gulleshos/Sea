export default function Table({ titles, children }) {
    return (
        <table className="w-full">
            <thead className="uppercase">
                <tr>
                    {titles.map((title) => (
                        <th key={title} scope="col" className="text-left px-1 sm:px-2 py-2 sm:py-3 pr-3">
                            {title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>{children}</tbody>
        </table>
    );
}
