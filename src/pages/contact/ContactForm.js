import React from "react";
import { useForm } from "react-hook-form";
import Styled from "styled-components";

const StyledForm = Styled.div`
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    form {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 1rem;

        input {
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        input[type="submit"] {
            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 1rem;
            cursor: pointer;
            width: 20%;

            &:hover {
                background-color: #aa2323;
            }
        }



        textarea {
            padding: 1rem;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        .name {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
        }
        
    }
`;

const ContactForm = ({ toggleTheme, isDarkTheme }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <StyledForm>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="name">
          <input
            type="text"
            placeholder="First name"
            {...register("First name", { required: true, maxLength: 80 })}
          />
          <input
            type="text"
            placeholder="Last name"
            {...register("Last name", { required: true, maxLength: 100 })}
          />
        </div>

        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <textarea {...register("Message", {})} />

        <input type="submit" />
      </form>
    </StyledForm>
  );
};

export default ContactForm;
