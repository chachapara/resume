import React from "react";
import { useFormContext } from "react-hook-form";

const SelectInput = ({ id, name, children, ...rest }) => {
  // Hooks
  const { register } = useFormContext();

  return (
    <div className="form-group" controlId={id}>
      <select class="form-control" {...register(name)} {...rest} id={id}>
        {children}
      </select>
    </div>
  );
};

export default SelectInput;
