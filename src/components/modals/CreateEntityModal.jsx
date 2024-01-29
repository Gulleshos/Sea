"use client";
import { useAppContext } from "@/lib/context/ContextProvider";
import useDoctor from "@/hooks/useDoctor";
import usePatient from "@/hooks/usePatient";
import useAppointment from "@/hooks/useAppointment";
import useEvent from "@/hooks/useEvent";
import { toast } from "sonner";

import { Button, Modal } from "@/components";
import ModalTitle from "./ModalTitle";
import {
    CrossIcon,
    EventIcon,
    PatientCardIcon,
    PersonIcon,
    TabletIcon,
} from "../../../public/icons";

import { ChooseCreateTypeForm } from "@/components/forms/CreateForms/ChooseCreateTypeForm";
import { CreateAppointmentForm } from "@/components/forms/CreateForms/CreateAppointmentForm";
import { CreateReportForm } from "@/components/forms/CreateForms/CreateReportForm";
import { CreatePatientForm } from "@/components/forms/CreateForms/CreatePatientForm";
import { CreateDoctorForm } from "@/components/forms/CreateForms/CreateDoctorForm";
import { CreateEventForm } from "@/components/forms/CreateForms/CreateEventForm";
import { FormButtons } from "@/components/forms/FormComponents";
import { useRouter } from "next/navigation";

export default function CreateEntityModal({ accessLevel }) {
    const { data: doctors, createDoctor } = useDoctor();
    const { data: patients, createPatient } = usePatient();
    const {
        data: appointments,
        createAppointment,
        createReport,
    } = useAppointment();
    const { createEvent } = useEvent();
    const router = useRouter();

    const {
        isCreateEntityModalOpen,
        setCreateEntityType,
        createEntityType,
        closeCreateEntityModal,
    } = useAppContext();

    const handleSubmit = async (formData) => {
        switch (createEntityType) {
            case "report": {
                try {
                    await createReport(formData);
                    closeCreateEntityModal();
                    toast.success("The report was added!", {
                        position: "bottom-center",
                    });
                    setCreateEntityType(null);
                    router.refresh();
                } catch (error) {
                    toast.error("Something went wrong!", {
                        position: "bottom-center",
                    });
                    console.log(error);
                }
                break;
            }
            case "appointment": {
                const patient = patients.find(
                    (patient) => patient.patientId === formData.get("patientId")
                );
                const filteredDoctors = doctors.filter(
                    (doctor) => doctor.accessLevel === "doctor"
                );

                const doctor = filteredDoctors.find(
                    (doctor) => doctor.doctorId === formData.get("doctorId")
                );
                try {
                    await createAppointment(patient, doctor, formData);
                    closeCreateEntityModal();
                    toast.success("The appointment was added!", {
                        position: "bottom-center",
                    });
                    setCreateEntityType(null);
                    router.refresh();
                } catch (error) {
                    toast.error("Something went wrong!", {
                        position: "bottom-center",
                    });
                    console.log(error);
                }
                break;
            }
            case "patient": {
                try {
                    await createPatient(formData);
                    closeCreateEntityModal();
                    toast.success("The patient was added!", {
                        position: "bottom-center",
                    });
                    setCreateEntityType(null);
                    router.refresh();
                } catch (error) {
                    toast.error("Something went wrong!", {
                        position: "bottom-center",
                    });
                    console.log(error);
                }
                break;
            }
            case "doctor": {
                try {
                    await createDoctor(formData);
                    closeCreateEntityModal();
                    toast.success("The doctor was added!", {
                        position: "bottom-center",
                    });
                    setCreateEntityType(null);
                    router.refresh();
                } catch (error) {
                    toast.error("Something went wrong!", {
                        position: "bottom-center",
                    });
                    console.log(error);
                }
                break;
            }
            case "event": {
                try {
                    await createEvent(formData);
                    closeCreateEntityModal();
                    toast.success("The event was added!", {
                        position: "bottom-center",
                    });
                    setCreateEntityType(null);
                    router.refresh();
                } catch (error) {
                    toast.error("Something went wrong!", {
                        position: "bottom-center",
                    });
                    console.log(error);
                }
                break;
            }
        }
    };

    const handleCloseModal = () => {
        closeCreateEntityModal();
        setCreateEntityType(null);
    };

    return (
        <Modal isOpen={isCreateEntityModalOpen}>
            {!createEntityType && (
                <>
                    <ModalTitle title="Add new">
                        <CrossIcon className="h-6 stroke-primary stroke-[3px]" />
                    </ModalTitle>
                    <div className="h-full max-h-[500px] 2xl:max-h-[700px] overflow-auto">
                        <ChooseCreateTypeForm
                            handleCreateType={setCreateEntityType}
                            accessLevel={accessLevel}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button type="button" onClick={handleCloseModal}>
                            Cancel
                        </Button>
                    </div>
                </>
            )}
            {createEntityType === "appointment" && doctors && patients && (
                <>
                    <ModalTitle title="Add new appointment">
                        <TabletIcon className="h-6 stroke-primary stroke-[3px]" />
                    </ModalTitle>
                    <div className="max-h-[400px] 2xl:max-h-[500px] overflow-auto">
                        <CreateAppointmentForm
                            handleSubmit={handleSubmit}
                            patients={patients}
                            doctors={doctors}
                        />
                    </div>
                    <FormButtons
                        onClick={handleCloseModal}
                        formId="appointmentForm"
                    />
                </>
            )}
            {createEntityType === "report" && doctors && patients && (
                <>
                    <ModalTitle title="Add new report">
                        <TabletIcon className="h-6 stroke-primary stroke-[3px]" />
                    </ModalTitle>
                    <div className="max-h-[300px] 2xl:max-h-[400px] overflow-auto">
                        <CreateReportForm
                            handleSubmit={handleSubmit}
                            appointments={appointments}
                        />
                    </div>
                    <FormButtons
                        onClick={handleCloseModal}
                        formId="reportForm"
                    />
                </>
            )}
            {createEntityType === "patient" && (
                <>
                    <ModalTitle title="Add new patient">
                        <PatientCardIcon className="h-6 stroke-primary stroke-[3px]" />
                    </ModalTitle>
                    <div className="max-h-[300px] 2xl:max-h-[400px] overflow-auto">
                        <CreatePatientForm handleSubmit={handleSubmit} />
                    </div>
                    <FormButtons
                        onClick={handleCloseModal}
                        formId="patientForm"
                    />
                </>
            )}
            {createEntityType === "doctor" && (
                <>
                    <ModalTitle title="Add new doctor">
                        <PersonIcon className="h-6 stroke-primary stroke-[3px]" />
                    </ModalTitle>
                    <div className="max-h-[300px] 2xl:max-h-[400px] overflow-auto">
                        <CreateDoctorForm
                            handleSubmit={handleSubmit}
                            accessLevel={accessLevel}
                        />
                    </div>
                    <FormButtons
                        onClick={handleCloseModal}
                        formId="doctorForm"
                    />
                </>
            )}
            {createEntityType === "event" && (
                <>
                    <ModalTitle title="Add new event">
                        <EventIcon className="h-6 stroke-primary stroke-[3px]" />
                    </ModalTitle>
                    <div className="max-h-[300px] 2xl:max-h-[400px] overflow-auto">
                        <CreateEventForm handleSubmit={handleSubmit} />
                    </div>
                    <FormButtons
                        onClick={handleCloseModal}
                        formId="eventForm"
                    />
                </>
            )}
        </Modal>
    );
}
