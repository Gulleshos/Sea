import {
    Form,
    FormSelect,
    FormInput,
    FormTextarea,
} from "@/components/forms/FormComponents";

export function CreateDoctorForm({ handleSubmit, accessLevel }) {
    return (
        <Form handleSubmit={handleSubmit} formId="doctorForm">
            <FormInput
                required={true}
                type="text"
                name="firstName"
                placeholder="First name"
            />
            <FormInput
                required={true}
                type="text"
                name="lastName"
                placeholder="Last name"
            />
            <FormInput
                required={true}
                type="date"
                name="dateOfBirth"
                placeholder="Date of Birth"
            />
            <FormSelect required={true} name="gender" defaultValue="Gender">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </FormSelect>
            <FormInput
                required={true}
                type="email"
                name="email"
                placeholder="Email"
            />
            <FormInput
                required={true}
                type="text"
                name="phone"
                placeholder="Phone"
            />
            <FormInput
                required={true}
                type="text"
                name="address"
                placeholder="Address"
            />
            <FormInput
                required={true}
                type="text"
                name="post"
                placeholder="Post"
            />
            <FormInput
                required={true}
                type="number"
                name="experience"
                placeholder="Experience"
            />
            <FormInput
                required={true}
                type="number"
                name="salary"
                placeholder="Salary"
            />
            <FormSelect
                required={true}
                name="accessLevel"
                defaultValue="Access level"
            >
                <option value="doctor">Doctor</option>
                <option value="chief">Chief</option>
                <option value="admin">Admin</option>
            </FormSelect>
            <FormInput
                required={true}
                type="text"
                name="login"
                placeholder="Login"
            />
            <FormInput
                required={true}
                type="text"
                name="password"
                placeholder="Password"
            />
            <FormTextarea name="description" placeholder="Description" />
        </Form>
    );
}
