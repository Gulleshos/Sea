import { Suspense } from "react";
import getSession from "@/lib/getSession";
import { getPatients, getPatientsByDoctor } from "@/lib/actions/patient";
import PatientsTable from "./PatientsTable";
import { Section, NoData, Loading } from "@/components";

const fetchData = async (accessLevel) => {
    try {
        const response =
            accessLevel === "doctor"
                ? await getPatientsByDoctor()
                : accessLevel === "chief" || accessLevel === "admin"
                ? await getPatients()
                : null;
        return response ? JSON.parse(response) : null;
    } catch (error) {
        console.log(error);
    }
};

export default async function Patients() {
    const session = await getSession();
    const patients = await fetchData(session.user.accessLevel);
    return (
        <main className="w-full h-full px-2 sm:px-0">
            <Section styles="w-full h-full overflow-auto">
                <Suspense fallback={<Loading />}>
                    {patients !== null ? <PatientsTable data={patients} /> : <NoData />}
                </Suspense>
            </Section>
        </main>
    );
}
