import { useRef } from "react"
import { Button } from "../components/ui/Button"
import { Input } from "../components/ui/Input"
import { BackendURL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const usernameRef = useRef<any>("");
    const passwordRef = useRef<any>("");
    const nameRef = useRef<any>("");
    const navigate = useNavigate();
    async function signup(){
        const username = usernameRef.current?.value;
        const name = nameRef.current?.value;
        const password = passwordRef.current?.value;
        console.log()
        await axios.post(`${BackendURL}/api/v1/user/signup`, {
                username,
                name,
                password
        });
        navigate("/signin");
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center" >
        <div className="bg-white rounded min-w-48 p-8" >
            <Input reference={usernameRef} text={""} placeholder={"Username"} />
            <Input reference={nameRef} text={""} placeholder={"Name"} />
            <Input reference={passwordRef} text={""} placeholder={"Password"} />
            <div className="flex justify-center m-2">
            <Button onClick={signup} loading={false} variant="primary" fullWidth={true} text={"Sign Up"} />
            </div>
        </div>
    </div>
}