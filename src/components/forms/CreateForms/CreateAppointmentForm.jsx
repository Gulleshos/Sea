import { Form, FormSelect, FormInput, FormTextarea } from "@/components/forms/FormComponents";
import { TIMES } from "@/lib/constants";

export function CreateAppointmentForm({ handleSubmit, patients, doctors }) {
    return (
        <Form handleSubmit={handleSubmit} formId="appointmentForm">
            <FormSelect required={true} name="patientId" defaultValue="Patient ID">
                {patients.map((patient) => (
                    <option key={patient.patientId} value={patient.patientId}>
                        {patient.patientId}
                    </option>
                ))}
            </FormSelect>
            <FormSelect required={true} name="doctorId" defaultValue="Doctor ID">
                {doctors.map((doctor) => (
                    <option key={doctor.doctorId} value={doctor.doctorId}>
                        {doctor.doctorId}
                    </option>
                ))}
            </FormSelect>
            <FormSelect required={true} name="time" defaultValue="Time">
                {TIMES.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </FormSelect>
            <FormInput required={true} type="date" name="date" placeholder="Date" />
            <FormTextarea name="description" placeholder="Description" />
        </Form>
    );
}
