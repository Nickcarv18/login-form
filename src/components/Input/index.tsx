import { Controller } from "react-hook-form";
import { ErrorText, IconContainer, InputBox, InputText } from "./styles";
import { IInput } from "./types";

const Input = ({leftIcon, name, control, errorMessage, ...rest}: IInput) => {
  return (
    <>
      <InputBox>
        {leftIcon? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller
          name={name}
          control={control}
          render={({ field }) =>  <InputText {...field} {...rest} />}
        />
      </InputBox>

      {errorMessage? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
}

export { Input };

