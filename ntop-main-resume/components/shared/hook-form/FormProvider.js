import React from "react";
import { FormProvider } from "react-hook-form";

const HookFormProvider = ({ children, ...rest }) => (
  <FormProvider {...rest}>{children}</FormProvider>
);

export default HookFormProvider;
