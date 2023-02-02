import { z } from "Zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../utils/api";

const FormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().min(1, { message: "Email is required" }),
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
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    mode: "onChange",
  });

  //<FormSchema>({ resolver: zodResolver });

  const onSubmit = (data: typeof FormSchema) => {
    formInput.mutate(data);
    console.log(data);
  };

  //: SubmitHandler<FormSchema>
  return (
    <div className="border border-white bg-yellow-100 p-4">
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <label>
          <input
            id="name"
            type="text"
            {...register("name")}
            placeholder="name"
            className="my-1"
          />
        </label>
        <input
          id="email"
          type="text"
          {...register("email")}
          placeholder="email"
          className="my-1"
        />
        <input
          id="phone"
          type="text"
          {...register("phone")}
          placeholder="phone"
          className="my-1"
        />
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
    </div>
  );
}
export default Form;
