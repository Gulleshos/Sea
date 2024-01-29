"use client";
import Image from "next/image";
import calculateAge from "@/lib/calculateAge";
import dateFormatter from "@/lib/dateFormatter";
import { Button } from "@/components";
import { useAppContext } from "@/lib/context/ContextProvider";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function InfoSection({
    accessLevel,
    data,
    deleteDoctor,
    removeDoctorFromPatient,
    removeAppointmentsByDoctor,
    removeAppointmentsByDoctorFromPatient,
}) {
    const { openUpdateModal } = useAppContext();
    const router = useRouter();

    const handleDelete = () => {
        const question = confirm(
            `Are you sure you want to delete #${data.doctorId}?`
        );
        if (question) {
            deleteDoctor(data.doctorId);
            removeDoctorFromPatient(data.doctorId);
            removeAppointmentsByDoctor(data.doctorId);
            removeAppointmentsByDoctorFromPatient(data.doctorId);
            router.back();
            router.refresh();
            toast.success("The doctor was deleted!", {
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
                                ? "/images/man_doctor_avatar.svg"
                                : "/images/woman_doctor_avatar.svg"
                        }
                        alt="Avatar"
                    />
                    <h3 className="mt-10 font-medium text-xl lg:text-2xl">
                        <span className="mr-3">{data.firstName}</span>
                        <span>{data.lastName}</span>
                    </h3>
                    <p className="mb-5 lg:text-xl font-medium">
                        <span className="mr-5">Age:</span>
                        <span>{calculateAge(data.birthDate)}</span>
                    </p>
                </div>
                <div className="h-px w-[cals(100%-60px)] mx-5 bg-lightGray rounded-standart" />
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

                <h3 className="text-xl lg:text-2xl font-medium my-3 text-center">
                    Information:
                </h3>

                <div className="h-full grid grid-cols-[110px_1fr] gap-5 overflow-auto">
                    <p className="font-medium">Doctor ID:</p>
                    <p>{data.doctorId}</p>
                    <p className="font-medium">Post:</p>
                    <p>{data.post}</p>
                    <p className="font-medium">Experience:</p>
                    <p>{data.experience}</p>
                    <p className="font-medium">Salary:</p>
                    <p>$ {data.salary}</p>
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
