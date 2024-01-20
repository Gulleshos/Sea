"use client";
import { useRouter } from "next/navigation";
import { Table, TableRow } from "@/components";
import { PATIENTS_TABLE_TITLES } from "@/lib/constants";

export default function PatientsTable({ data }) {
    const router = useRouter();

    return (
        <Table titles={PATIENTS_TABLE_TITLES}>
            {data.map((patient) => (
                <TableRow
                    key={patient.patientId}
                    data={patient}
                    type="patients"
                    onClick={() => router.push(`/patients/${patient.patientId}`)}
                />
            ))}
        </Table>
    );
}
