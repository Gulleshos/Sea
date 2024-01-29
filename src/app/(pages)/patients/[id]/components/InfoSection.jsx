"use client";
import Image from "next/image";
import calculateAge from "@/lib/calculateAge";
import dateFormatter from "@/lib/dateFormatter";
import { Button } from "@/components";
import { useAppContext } from "@/lib/context/ContextProvider";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function InfoSection({
    data,
    accessLevel,
    deletePatient,
    removePatientFromDoctor,
    removeAppointmentsByPatientFromDoctor,
    removeAppointmentsByPatient,
}) {
    const { openUpdateModal } = useAppContext();
    const router = useRouter();

    const handleDelete = () => {
        const question = confirm(
            `Are you sure you want to delete #${data.patientId}?`
        );
        if (question) {
            deletePatient(data.patientId);
            removePatientFromDoctor(data.patientId);
            removeAppointmentsByPatientFromDoctor(data.patientId);
            removeAppointmentsByPatient(data.patientId);
            router.back();
            router.refresh();
            toast.success("The patient was deleted!", {
                position: "bottom-center",
            });
        }
    };
    return (
        <>
            <div className="h-full w-full flex flex-col ">
                <div className="flex flex-col items-center">
                    <Image
                        height={160}
                        width={160}
                        src={
                            data.gender === "Male"
                                ? "/images/man_patient_avatar.svg"
                                : "/images/woman_patient_avatar.svg"
                        }
                        alt="Avatar"
                    />
                    <h3 className="mt-2 font-medium text-xl lg:text-2xl">
                        <span className="mr-10">{data.firstName}</span>
                        <span>{data.lastName}</span>
                    </h3>
                    <p className="mb-5 lg:text-xl font-medium">
                        <span className="mr-5">Age:</span>
                        <span>{calculateAge(data.birthDate)}</span>
                    </p>
                </div>
                <div className="h-1 w-[cals(100%-60px)] mx-5 bg-lightGray rounded-standart" />
                <div className="flex justify-center gap-12">
                    {accessLevel === "admin" && (
                        <>
                            <Button type="action" onClick={openUpdateModal}>
                                Update
                            </Button>
                            <Button type="action" onClick={handleDelete}>
                                Delete
                            </Button>
                        </>
                    )}
                </div>
                <h3 className="text-xl lg:text-2xl font-medium my-10 text-center">
                    Information:
                </h3>

                <div className="h-full grid grid-cols-[110px_1fr] gap-5 overflow-auto">
                    <p className="font-medium">Patient ID:</p>
                    <p>{data.doctorId}</p>
                    <p className="font-medium">Gender:</p>
                    <p>{data.gender}</p>
                    <p className="font-medium">Date of birth:</p>
                    <p>{dateFormatter(data.birthDate)}</p>
                    <p className="font-medium">Address:</p>
                    <p>{data.address}</p>
                    <p className="font-medium">Email:</p>
                    <p>{data.email}</p>
                    <p className="font-medium">Phone:</p>
                    <p>+ {data.phone}</p>
                    <p className="col-span-2 font-medium">Description:</p>
                    <p className="col-span-2">{data.description}</p>
                </div>
            </div>
        </>
    );
}
