import React, { FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  categories: String[];
  //fun triger when form is submitted
  addItem: (data: FormData) => void;
}

const schema = z.object({
  description: z
    .string()
    .nonempty({ message: "Description field is required" }),
  amount: z
    .number({ invalid_type_error: "Age field is required" }),
  category: z.string().nonempty({ message: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ categories, addItem }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

    // const item = {
    //   description: "",
    //   amount: "",
    //   category: ""
    // };
    // const handleSubmit = (event: FormEvent) => {
    //   event.preventDefault();
    //   if (nameRef.current) Person.name = nameRef.current.value;
    //   if (ageRef.current) Person.age = ageRef.current.value;
    //   console.log(Person);
    // };
  return (
    <form
      onSubmit={
        handleSubmit((data) => {
          addItem(data);
          reset();
        }
        )
      }>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <small className="text-danger">{errors.description.message}</small>
        )}
        {/* {errors.name && (
          <small className="text-danger">{errors.name.message}</small>
        )} */}
      </div>

      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <small className="text-danger">{errors.amount.message}</small>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} id="category" className="form-select">
          {categories.map((category) => (
            <option>{category}</option>
          ))}
        </select>
        {errors.category && (
          <small className="text-danger">{errors.category.message}</small>
        )}
      </div>

      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
