import { Form, FormSelect, FormInput, FormTextarea } from "@/components/forms/FormComponents";

export function CreateReportForm({ handleSubmit, appointments }) {
    return (
        <Form handleSubmit={handleSubmit} formId="reportForm">
            <FormSelect required={true} name="appointmentId" defaultValue="Appointment ID">
                {appointments.map((appointment) => (
                    <option key={appointment.appointmentId} value={appointment.appointmentId}>
                        {appointment.appointmentId}
                    </option>
                ))}
            </FormSelect>
            <FormInput required={true} type="number" name="cost" placeholder="Cost" />
            <FormInput
                required={true}
                type="text"
                name="nameOfPrescription"
                placeholder="Name of prescription"
            />
            <FormInput
                required={true}
                type="number"
                name="durationOfPrescription"
                placeholder="Duration of prescription"
            />
            <FormTextarea name="prescription" placeholder="Prescription" />
            <FormTextarea name="conclusion" placeholder="Conclusion" />
        </Form>
    );
}
