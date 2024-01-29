import { Suspense } from "react";
import { getDoctors } from "@/lib/actions/doctor";
import DoctorsTable from "./DoctorsTable";
import { Section, NoData, Loading, NoAccess } from "@/components";
import getSession from "@/lib/getSession";

const fetchData = async () => {
    try {
        const response = await getDoctors();
        return response ? JSON.parse(response) : null;
    } catch (error) {
        console.log(error);
    }
};

export default async function Doctors() {
    const session = await getSession();
    const doctorsData = await fetchData();

    if (session.user.accessLevel === "doctor") {
        return <NoAccess />;
    }

    if (
        session.user.accessLevel === "admin" ||
        session.user.accessLevel === "chief"
    ) {
        return (
            <main className="w-full h-full px-2 sm:px-0">
                <Section styles="w-full h-full overflow-auto">
                    <Suspense fallback={<Loading />}>
                        {doctorsData !== null ? (
                            <DoctorsTable data={doctorsData} />
                        ) : (
                            <NoData />
                        )}
                    </Suspense>
                </Section>
            </main>
        );
    }

    return <NoData />;
}
