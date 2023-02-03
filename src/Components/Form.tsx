import { z } from "Zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../utils/api";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }).email(),
  phone: z.string().min(10, { message: "Phone number is required" }),
  message: z.string().min(1),
});

type FormSchemaType = z.infer<typeof FormSchema>;

function Form() {
  const formInput = api.form.formInput.useMutation();

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  //<FormSchema>({ resolver: zodResolver });

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    formInput.mutate(data);
    console.log(data);
    reset({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  //: SubmitHandler<FormSchema>
  return (
    <div className="border border-white bg-yellow-100 p-4">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label>
          {errors.name && <p className="text-red-500">Name required</p>}
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="name"
            className="my-1"
          />
        </label>
        {errors.email && <p className="text-red-500">Email required</p>}
        <input
          id="email"
          type="text"
          {...register("email")}
          placeholder="email"
          className="my-1"
        />
        {errors.phone && <p className="text-red-500">Phone required</p>}
        <input
          id="phone"
          type="text"
          {...register("phone")}
          placeholder="phone"
          className="my-1"
        />
        {errors.message && <p className="text-red-500">Message required</p>}
        <textarea
          id="message"
          type="text"
          {...register("message")}
          placeholder="message"
          className="row mt-1 resize-none"
        />
        <button className="mt-2 bg-blue-400 p-3" type="submit">
          Submit
        </button>
      </form>
      {JSON.stringify(getValues())}
    </div>
  );
}
export default Form;
