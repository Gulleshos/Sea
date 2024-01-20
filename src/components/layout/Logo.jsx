import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <div className="h-14 w-full bg-primary p-3 rounded-br-2xl">
            <Link href="/">
                <Image width={80} height={80} src="/Logo.svg" alt="Logo" />
            </Link>
        </div>
    );
}
