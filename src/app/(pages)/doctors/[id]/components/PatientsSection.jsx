"use client";
import { useRouter } from "next/navigation";
import { Table, TableRow } from "@/components";
import { PATIENTS_OF_DOCTOR_TABLE_TITLES } from "@/lib/constants";

export default function PatientsSection({ data, doctorId }) {
    const router = useRouter();
    return (
        <Table titles={PATIENTS_OF_DOCTOR_TABLE_TITLES}>
            {data.map((patient) => (
                <TableRow
                    key={patient.patientId}
                    data={patient}
                    doctorId={doctorId}
                    type="patientsOfDoctor"
                    onClick={() => router.push(`/patients/${patient.patientId}`)}
                />
            ))}
        </Table>
    );
}
