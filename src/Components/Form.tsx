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
  } = useForm(zodResolver(formSchema));

  //<FormSchema>({ resolver: zodResolver });

  const onSubmit = (data) => console.log(data);

  console.log(errors);
  //: SubmitHandler<FormSchema>
  return (
    <div className="border border-white bg-yellow-100 p-4">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          id="name"
          type="text"
          {...(register("name"), { required: true })}
          placeholder="Name"
          className="my-1"
        />
        <input
          id="email"
          type="text"
          {...(register("email"), { required: true })}
          placeholder="Email"
          className="my-1"
        />
        <input
          id="phone"
          type="text"
          {...(register("phone"), { required: true })}
          placeholder="Phone"
          className="my-1"
        />
        <textarea
          id="message"
          type="text"
          {...(register("message"), { required: true })}
          placeholder="Message"
          className="mt-1"
          rows="5"
          cols="30"
        />
        <button className="mt-2 bg-blue-400 p-3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default Form;
