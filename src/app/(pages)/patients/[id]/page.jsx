import { Suspense } from "react";
import getSession from "@/lib/getSession";
import { Section, NoData, Loading, NoAccess } from "@/components";
import { getPatientById } from "@/lib/actions/patient";
import { getAppointmentsByPatien } from "@/lib/actions/appointment";

import InfoSection from "./components/InfoSection";
import AppointmentsSection from "./components/AppointmentsSection";

const fetchData = async (patientId) => {
    try {
        const patient = await getPatientById(patientId);
        const appointments = await getAppointmentsByPatien(patientId);
        return {
            patient: patient ? JSON.parse(patient) : null,
            appointments: appointments ? JSON.parse(appointments) : null,
        };
    } catch (error) {
        console.log(error);
    }
};

export default async function PatientInfo({ params }) {
    const session = await getSession();
    const { patient, appointments } = await fetchData(params.id);

    if (
        session.user.accessLevel === "doctor" &&
        !patient.doctors.find((doctor) => session.user.userId === doctor.doctorId)
    ) {
        return <NoAccess />;
    }

    if (session.user.accessLevel === "chief" || session.user.accessLevel === "admin") {
        return (
            <main
                className="h-full w-full max-w-[2000px] mx-auto grid gap-2
                lg:grid-cols-[1fr_2fr] lg:grid-rows-[1fr] overflow-y-auto lg:overflow-hidden"
            >
                <Section styles="row-span-2">
                    <Suspense fallback={<Loading />}>
                        {patient ? <InfoSection data={patient} /> : <NoData />}
                    </Suspense>
                </Section>

                <Section styles="w-full h-full overflow-auto min-h-[300px] lg:min-h-[0px] ">
                    <h3 className="text-xl lg:text-2xl font-medium mb-2">
                        Patient&apos;s appointments:
                    </h3>

                    <div className="relative h-[calc(100%-42px)] w-full max-h-[500px] overflow-auto min-h-[300px] lg:min-h-[0px]">
                        <Suspense fallback={<Loading />}>
                            {appointments ? (
                                <AppointmentsSection data={appointments} />
                            ) : (
                                <NoData />
                            )}
                        </Suspense>
                    </div>
                </Section>
            </main>
        );
    }

    return <NoData />;
}
