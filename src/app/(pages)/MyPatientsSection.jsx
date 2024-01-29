"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Table, TableRow, Pagination } from "@/components";
import { PATIENTS_OF_DOCTOR_TABLE_TITLES } from "@/lib/constants";

export default function MyPatientsSection({ patients }) {
    const [currentPage, setCurrentPage] = useState(1);
    const router = useRouter();
    const minPage = (currentPage - 1) * 10;
    const maxPage = Math.min((currentPage - 1) * 10) + 10;
    const pageCount = Math.ceil(patients.length / 10);
    return (
        <>
            <div className="overflow-auto">
                <Table titles={PATIENTS_OF_DOCTOR_TABLE_TITLES}>
                    {patients.slice(minPage, maxPage).map((patient) => (
                        <TableRow
                            key={patient.patientId}
                            data={patient}
                            type="patientsOfDoctor"
                            onClick={() =>
                                router.push(`/patients/${patient.patientId}`)
                            }
                        />
                    ))}
                </Table>
            </div>

            <div className="flex justify-center mt-4">
                <Pagination
                    pageCount={pageCount}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </>
    );
}
