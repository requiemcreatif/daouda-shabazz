import React from "react";
import { useForm } from "react-hook-form";
import Styled from "styled-components";

const StyledForm = Styled.div`
    max-width: 800px;
    margin: 2rem auto ;
    padding: 2rem 2rem 10rem 2rem;

    .contact-text {
        margin-top: 10rem;
        margin-bottom: 7rem;

    }
    form {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-gap: 1rem;

        input {
          margin-bottom: 1rem;
            padding: 1.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;

            &:focus {
                outline: none;
            }
        }

        input[type="submit"] {

            background-color: #000;
            color: #fff;
            border: none;
            border-radius: 5px;
            padding: 1.5rem;
            cursor: pointer;
            width: 20%;

            &:hover {
                background-color: #aa2323;
            }

            @media (max-width: 768px) {
                width: 100%;
            }
        }



        textarea {
          margin-bottom: 1rem;
            padding: 1.5rem;
            border: 1px solid #ccc;
            border-radius: 5px;

            &:focus {
                outline: none;
            }
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
      <div className="contact-text">
        <p>
          Pour les tarifs, les réservations et toutes autres demandes, envoyez un e-mail ou
          remplissez le formulaire ci-dessous.
        </p>
      </div>
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
        <textarea {...register("Message", {})} rows="10" />

        <input type="submit" />
      </form>
    </StyledForm>
  );
};

export default ContactForm;
