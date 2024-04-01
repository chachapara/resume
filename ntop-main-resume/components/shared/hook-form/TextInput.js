import React from "react";
import { useFormContext } from "react-hook-form";
import "@/styles/components/get-nTop-demo.scss";

const TextInput = ({ id, name, label, ...rest }) => {
  // Hooks
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div
      className={`form-group ${
        errors?.[name]?.message ? `ff_grey_dots` : `ff_green_dots`
      }  `}
      controlId={id}
    >
      <input
        type="text"
        id={id}
        class={`form-control ${errors?.[name]?.message ? "error-msg" : ""}`}
        autocomplete="off"
        {...register(name)}
        {...rest}
        autofocus
      />
      <label class="floating-label">{label}</label>
      {errors?.[name]?.message && (
        <div className="error-text-model">{errors?.[name]?.message}</div>
      )}
    </div>
  );
};

export default TextInput;
