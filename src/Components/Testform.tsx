import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, { message: "Name is requried" }),
  email: z.string().min(1, { message: "Email is required" }),
});

type Schema = z.infer<typeof schema>;

function Testform() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Schema>({ resolver: zodResolver(schema) });
  const onSubmit = (data) => console.log(data);
  return (
    <form className="space-y-10" onSubmit={handleSubmit(onSubmit)}>
      <input id="name" placeholder="Name" {...register("name")} />
      {errors.name && (
        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
      )}
      <input id="email" placeholder="Email" {...register("email")} />
      <button type="submit" className="bg-white p-2">
        Submit
      </button>
    </form>
  );
}

export default Testform;
