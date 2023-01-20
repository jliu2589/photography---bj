import { z } from "Zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email({ message: "Must be a valid email" }),
  phone: z.number().min(10, { message: "Phone number is required" }),
  message: z.string(),
});

type FormSchema = z.infer<typeof formSchema>;

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({ resolver: zodResolver });

  const onSubmit: SubmitHandler<FormSchema> = (data) => console.log(data);
  return (
    <div className="border border-white bg-yellow-100 p-4">
      <form className="flex flex-col">
        <label className="py-1 text-black">Name</label>
        <input id="name" type="text" {...register("name")} />
        <label className="py-1 text-black">Email</label>
        <input id="email" type="text" {...register("email")} />
        <label className="py-1 text-black">Phone</label>
        <input id="phone" type="text" {...register("phone")} />
        <label className="py-1 text-black">Message</label>
        <input id="message" type="text" {...register("message")} />
        <button
          className="mt-2 bg-blue-400 p-3"
          onSubmit={handleSubmit(onSubmit)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
