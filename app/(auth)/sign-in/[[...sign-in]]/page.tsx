import { SignIn } from "@clerk/nextjs";

export default function Page(){
    return(
        <div className="items-center">
            <SignIn/>
        </div>
    )
}