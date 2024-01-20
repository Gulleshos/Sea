"use client";
import { useRouter } from "next/navigation";
import { Table, TableRow } from "@/components";
import { DOCTORS_TABLE_TITLES } from "@/lib/constants";

export default function DoctorsTable({ data }) {
    const router = useRouter();

    return (
        <Table titles={DOCTORS_TABLE_TITLES}>
            {data.map((doctor) => (
                <TableRow
                    key={doctor.doctorId}
                    data={doctor}
                    type="doctors"
                    onClick={() => router.push(`/doctors/${doctor.doctorId}`)}
                />
            ))}
        </Table>
    );
}
