import {Form, FormInput } from "@/components/forms/FormComponents";
import { Button } from "@/components";

export default function Login() {
    return (
        <main className="h-full flex justify-center items-center">
            <div className="w-full max-w-[600px] m-10 p-10 lg:p-20 rounded-standart bg-secondary">
                <h1 className="text-2xl lg:3xl text-center font-medium ">Login</h1>
                <div className="w-full h-3 rounded-standart bg-primary" />
                <Form handleSubmit={handleSubmit} formId="loginForm">
                    <FormInput required={true} type="text" name="username" placeholder="Username" />
                    <FormInput
                        required={true}
                        type="password"
                        name="password"
                        placeholder="Password"
                    />
                </Form>

                <Button formId='loginForm'>
                    Log in
                </Button>
            </div>
        </main>
    );
}
