import { useRef } from "react";
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import axios from "axios";
import { BackendURL } from "../config";
import { useNavigate } from "react-router-dom";

export const Signin = () => {
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>("");

    const navigate = useNavigate();

    async function signin(){
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log()
        const response = await axios.post(`${BackendURL}/api/v1/user/signin`, {
                username,
                password
        })
        console.log(response);
        localStorage.setItem("token",response.data.token);
        navigate("/dashboard");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center" >
    <div className="bg-white rounded min-w-48 p-8" >
        <Input reference={usernameRef} text={""} placeholder={"Username"} />
        <Input reference={passwordRef} text={""} placeholder={"Password"} />
        <div className="flex justify-center m-2">
        <Button onClick={signin} loading={false} variant="primary" fullWidth={true} text={"SignIn"} />
        </div>
    </div>
</div>
}