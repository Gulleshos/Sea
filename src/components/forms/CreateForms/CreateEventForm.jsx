import { Form, FormSelect, FormInput, FormTextarea } from "@/components/forms/FormComponents";
import { TIMES } from "@/lib/constants";

export function CreateEventForm({ handleSubmit }) {
    return (
        <Form handleSubmit={handleSubmit} formId="eventForm">
            <FormInput required={true} type="text" name="title" placeholder="Title" />
            <FormInput required={true} type="date" name="date" placeholder="Date" />
            <FormSelect required={true} name="time" defaultValue="Time">
                {TIMES.map((time) => (
                    <option key={time} value={time}>
                        {time}
                    </option>
                ))}
            </FormSelect>
            <FormTextarea name="description" placeholder="Description" />
        </Form>
    );
}
