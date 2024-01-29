"use client";
import { useAppContext } from "@/lib/context/ContextProvider";
import { toast } from "sonner";
import { updateDoctor } from "@/lib/actions/doctor";
import { updatePatient } from "@/lib/actions/patient";
import { Modal } from "@/components";
import ModalTitle from "./ModalTitle";
import { CrossIcon } from "../../../public/icons";

import {
    Form,
    FormInput,
    FormTextarea,
    FormButtons,
} from "@/components/forms/FormComponents";

export default function UpdateEntityModal({ data, type }) {
    const { isUpdateModalOpen, closeUpdateModal } = useAppContext();

    const handleSubmit = async (formData) => {
        switch (type) {
            case "patient": {
                const updatedPatient = {
                    email: formData.get("email") || data.email,
                    phone: formData.get("phone") || data.phone,
                    address: formData.get("address") || data.address,
                    description:
                        formData.get("description") || data.description,
                };
                try {
                    await updatePatient(data.patientId, updatedPatient);
                    closeUpdateModal();
                    toast.success("The patient was updated!", {
                        position: "bottom-center",
                    });
                } catch (error) {
                    toast.error("Something went wrong!", {
                        position: "bottom-center",
                    });
                    console.log(error);
                }
                break;
            }
            case "doctor": {
                const updatedDoctor = {
                    email: formData.get("email") || data.email,
                    phone: formData.get("phone") || data.phone,
                    address: formData.get("address") || data.address,
                    post: formData.get("post") || data.post,
                    experience: +formData.get("experience") || data.experience,
                    salary: +formData.get("salary") || data.salary,
                    description:
                        formData.get("description") || data.description,
                };
                try {
                    await updateDoctor(data.doctorId, updatedDoctor);
                    closeUpdateModal();
                    toast.success("The doctor was updated!", {
                        position: "bottom-center",
                    });
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

    return (
        <Modal isOpen={isUpdateModalOpen}>
            <ModalTitle
                title={
                    type === "doctor" ? "Update a doctor" : "Update a patient"
                }
            >
                <CrossIcon className="h-6 stroke-primary stroke-[3px]" />
            </ModalTitle>
            <div className="overflow-auto max-h-[400px]">
                {type === "doctor" && (
                    <Form handleSubmit={handleSubmit} formId="updateForm">
                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <FormInput
                            type="text"
                            name="phone"
                            placeholder="Phone"
                        />
                        <FormInput
                            type="text"
                            name="address"
                            placeholder="Address"
                        />
                        <FormInput type="text" name="post" placeholder="Post" />
                        <FormInput
                            type="number"
                            name="experience"
                            placeholder="Experience"
                        />
                        <FormInput
                            type="number"
                            name="salary"
                            placeholder="Salary"
                        />
                        <FormTextarea
                            name="description"
                            placeholder="Description"
                        />
                    </Form>
                )}
                {type === "patient" && (
                    <Form handleSubmit={handleSubmit} formId="updateForm">
                        <FormInput
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                        <FormInput
                            type="text"
                            name="phone"
                            placeholder="Phone"
                        />
                        <FormInput
                            type="text"
                            name="address"
                            placeholder="Address"
                        />
                        <FormTextarea
                            name="description"
                            placeholder="Description"
                        />
                    </Form>
                )}
            </div>

            <FormButtons onClick={closeUpdateModal} formId="updateForm" />
        </Modal>
    );
}
