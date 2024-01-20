"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAppContext } from "@/lib/context/ContextProvider";
import Image from "next/image";
import { Modal, Button } from "..";
import { getDoctors } from "@/lib/actions/doctor";
import { getPatients, getPatientsByDoctor } from "@/lib/actions/patient";
import { getEvents } from "@/lib/actions/event";

import { SearchIcon, PersonIcon, PatientCardIcon, EventIcon } from "../../../public/icons";
import ModalTitle from "./ModalTitle";

const SearchModal = ({ user }) => {
    const router = useRouter();
    const { isSearchModalOpen, closeSearchModal } = useAppContext();

    const [matchItems, setMatchItems] = useState([]);
    const [searchId, setSearchId] = useState("");

    const matchData = async () => {
        const matchDat = [];
        try {
            if (user.accessLevel !== "doctor") {
                const doctorsResponse = await getDoctors();
                const doctors = JSON.parse(doctorsResponse).filter((item) =>
                    item.doctorId.includes(searchId)
                );
                doctors.forEach((item) =>
                    matchDat.push({
                        id: item.doctorId,
                        type: "Doctor",
                        name: `${item.firstName} ${item.lastName}`,
                    })
                );

                const patientsResponse = await getPatients();
                const patients = JSON.parse(patientsResponse).filter((item) =>
                    item.patientId.includes(searchId)
                );
                patients.forEach((item) =>
                    matchDat.push({
                        id: item.patientId,
                        type: "Patient",
                        name: `${item.firstName} ${item.lastName}`,
                    })
                );
            }
            if (user.accessLevel === "doctor") {
                const patientsResponse = await getPatientsByDoctor(user.userId);
                const patients = JSON.parse(patientsResponse).filter((item) =>
                    item.patientId.includes(searchId)
                );
                patients.forEach((item) =>
                    matchDat.push({
                        id: item.patientId,
                        type: "Patient",
                        name: `${item.firstName} ${item.lastName}`,
                    })
                );
            }

            const eventsResponse = await getEvents();
            const events = JSON.parse(eventsResponse).filter((item) =>
                item.eventId.includes(searchId)
            );
            events.forEach((item) =>
                matchDat.push({ id: item.eventId, type: "Event", name: `${item.title}` })
            );
        } catch (error) {
            console.log(error);
        } finally {
            setMatchItems(matchDat);
            console.log(matchItems);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const cleared = [];
        setMatchItems(cleared);

        await matchData();
    };

    const handleRoute = (item) => {
        if (item.type === "Patient") {
            router.push(`/patients/${item.id}`);
        }
        if (item.type === "Doctor") {
            router.push(`/doctors/${item.id}`);
        }
        if (item.type === "Event") {
            router.push("/events");
        }
    };

    return (
        <Modal isOpen={isSearchModalOpen}>
            <ModalTitle title="Search">
                <SearchIcon className="h-7 stroke-primary stroke-[3px]" />
            </ModalTitle>

            <form onSubmit={handleSubmit} id="searchForm">
                <input
                    type="text"
                    id="searchId"
                    required={true}
                    minLength={3}
                    placeholder="Search by ID"
                    value={searchId}
                    onChange={(e) => setSearchId(e.target.value)}
                    className="text-base lg:text-xl px-5 py-[14px] mb-5 w-full border border-lightGray rounded-2xl"
                />
            </form>

            <div className="overflow-auto max-h-[500px]">
                {matchItems &&
                    matchItems.map((item) => (
                        <div
                            key={item.id}
                            className="text-base lg:text-xl px-5 py-3 mb-5 w-full border
                        border-lightGray rounded-2xl hover:bg-secondary flex"
                            onClick={() => handleRoute(item.type)}
                        >
                            <span className="mr-3">{item.type}</span>
                            <span className="underline decoration-1 flex-1">
                                {item.name ? item.name.slice(0, 10) : item.id.slice(0, 10)}
                            </span>
                            <span className="">
                                {item.type === "Patient" && (
                                    <PatientCardIcon className="h-7 stroke-primary stroke-[3px]" />
                                )}
                                {item.type === "Doctor" && (
                                    <PersonIcon className="h-7 stroke-primary stroke-[3px]" />
                                )}
                                {item.type === "Event" && (
                                    <EventIcon className="h-7 stroke-primary stroke-[3px]" />
                                )}
                            </span>
                        </div>
                    ))}
                {matchItems.length === 0 && (
                    <div className="flex flex-col items-center gap-3 mb-5">
                        <Image
                            height={200}
                            width={160}
                            src="/images/empty_data.svg"
                            alt="No matches found"
                        />
                        <p className="text-xl font-medium">No matches found</p>
                    </div>
                )}
            </div>
            <div className="flex justify-between gap-5">
                <Button
                    type="button"
                    onClick={(e) => {
                        closeSearchModal();
                        setMatchItems([]);
                        e.preventDefault();
                    }}
                >
                    Cancel
                </Button>
                <Button type="submit" formId="searchForm">
                    Submit
                </Button>
            </div>
        </Modal>
    );
};

export default SearchModal;
