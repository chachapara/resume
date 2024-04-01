import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormProvider } from "../shared/hook-form";

const ContactFormComponent = ({ onSubmit }) => {
  // Hook Form Config
  const defaultValues = {
    email: "",
  };

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email address is required"),
  });

  // Hooks
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  // Constants
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group" controlId="formBasicEmail">
          <Form.Control
            className={`${errors?.email?.message ? "error-msg" : ""}`}
            type="email"
            placeholder="Enter your Email"
            {...register("email")}
          />
          <button variant="primary" type="submit" className="ntop-theme-btn">
            Get a demo
          </button>
        </div>
        {errors?.email?.message && (
          <p className="error-text">{errors?.email?.message}</p>
        )}
      </Form>
    </FormProvider>
  );
};

export default ContactFormComponent;
