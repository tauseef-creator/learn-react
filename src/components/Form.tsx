import React, { FormEvent, useRef } from "react";
import { useForm } from "react-hook-form";

const Form = () => {
    const { register, handleSubmit}= useForm();

//   const Person = {
//     name: "",
//     age: "",
//   };
//   const handleSubmit = (event: FormEvent) => {
//     event.preventDefault();
//     if (nameRef.current) Person.name = nameRef.current.value;
//     if (ageRef.current) Person.age = ageRef.current.value;
//     console.log(Person);
//   };
  return (
    <form onSubmit={handleSubmit(data => console.log(data)) }>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input {...register('name')} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input {...register('age')} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
