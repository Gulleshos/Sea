import { Suspense } from "react";
import getSession from "@/lib/getSession";
import { Section, NoData, Loading, NoAccess } from "@/components";
import { getDoctorById } from "@/lib/actions/doctor";
import { getPatientsByDoctor } from "@/lib/actions/patient";
import { getAppointmentsByDoctor } from "@/lib/actions/appointment";

import InfoSection from "./components/InfoSection";
import PatientsSection from "./components/PatientsSection";
import AppointmentsSection from "./components/AppointmentsSection";

const fetchData = async (doctorId) => {
    try {
        const doctor = await getDoctorById(doctorId);
        const patients = await getPatientsByDoctor(doctorId);
        const appointments = await getAppointmentsByDoctor(doctorId);

        return {
            doctor: doctor ? JSON.parse(doctor) : null,
            patients: patients ? JSON.parse(patients) : null,
            appointments: appointments ? JSON.parse(appointments) : null,
        };
    } catch (error) {
        console.log(error);
    }
};

export default async function DoctorInfo({ params }) {
    const session = await getSession();
    const { doctor, patients, appointments } = await fetchData(params.id);

    if (session.user.accessLevel === "doctor") {
        return <NoAccess />;
    }

    if (session.user.accessLevel === "admin" || session.user.accessLevel === "chief") {
        return (
            <main
                className="h-full w-full max-w-[2000px] mx-auto grid gap-3
                lg:grid-cols-[1fr_2fr] lg:grid-rows-2 overflow-y-auto lg:overflow-hidden"
            >
                <Section styles="row-span-2">
                    <Suspense fallback={<Loading />}>
                        {doctor ? <InfoSection data={doctor} /> : <NoData />}
                    </Suspense>
                </Section>

                <Section styles="w-full grid-rows-1 overflow-auto min-h-[300px] lg:min-h-[0px]">
                    <h3 className="text-xl lg:text-2xl font-medium mb-3">
                        Doctor&apos;s patients:
                    </h3>

                    <div className="relative h-[calc(100%-42px)] w-full max-h-[500px] overflow-auto min-h-[300px] lg:min-h-[0px]">
                        <Suspense fallback={<Loading />}>
                            {patients ? <PatientsSection data={patients} /> : <NoData />}
                        </Suspense>
                    </div>
                </Section>

                <Section styles="w-full grid-rows-1 overflow-auto min-h-[300px] lg:min-h-[0px] ">
                    <h3 className="text-xl lg:text-2xl font-medium mb-3">
                        Doctor&apos;s appointments:
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
