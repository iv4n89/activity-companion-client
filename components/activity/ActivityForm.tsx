import { useForm } from "react-hook-form"


export default function ActivityForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data: any) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            
        </form>
    )
}