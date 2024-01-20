import { Form, FormSelect, FormInput, FormTextarea } from "@/components/forms/FormComponents";

export function CreatePatientForm({ handleSubmit }) {
    return (
        <Form handleSubmit={handleSubmit} formId="patientForm">
            <FormInput required={true} type="text" name="firstName" placeholder="First name" />
            <FormInput required={true} type="text" name="lastName" placeholder="Last name" />
            <FormInput required={true} type="date" name="dateOfBirth" placeholder="Date of Birth" />
            <FormSelect required={true} name="gender" defaultValue="Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </FormSelect>
            <FormInput required={true} type="email" name="email" placeholder="Email" />
            <FormInput required={true} type="text" name="phone" placeholder="Phone" />
            <FormInput required={true} type="text" name="address" placeholder="Address" />
            <FormTextarea name="description" placeholder="Description" />
        </Form>
    );
}
