import Image from "next/image";

export default function NoData() {
    return (
        <div className="flex flex-col gap-5 justify-center items-center">
            <Image width={100} height={100} src="/images/no_data.svg" alt="No data" />
            <h3 className="text-xl lg:text-2xl font-medium">No data!</h3>
        </div>
    );
}

