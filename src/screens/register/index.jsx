import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import {
    Container,
    Input,
    ContainerForm,
    Error,
    ContainerInput,
    Button,
    Subtitle,
    /* Visibility, */
} from "./styles.jsx";

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Éste campo es obligatorio").matches(/^[a-zA-Z\s]*$/, "Sólo se aceptan letras"),
    id: Yup.number()
        .required("Éste campo es obligatorio")
        .typeError("Sólo se aceptan números")
        .min(30000000, "El DNI debe ser mayor a 30 millones")
        .max(60000000, "EL DNI debe ser menor a 60 millones"),
    phone: Yup.number()
        .required("Éste campo es obligatorio")
        .typeError("Sólo se aceptan números"),
    email: Yup.string()
        .email("Éste correo electrónico es inválido")
        .required("Éste campo es obligatorio"),
    password: Yup.string()
        .required("Éste campo es obligatorio")
        .min(8, "Debe tener al menos 8 caracteres")
        .matches(/(?=\w*[A-Z])/, "Debe tener al menos 1 mayúscula"),
    repeatPassword: Yup.string()
        .required("Éste campo es obligatorio")
        .oneOf([Yup.ref('password')], "Las contraseñas no coinciden")
});

const Register = () => {
    const [visible, setVisible] = useState(false);
    return (
        <Container>
            <Formik
                initialValues={{
                    name: "",
                    id: "",
                    phone: "",
                    email: "",
                    password: "",
                    repeatPassword: "",
                }}
                validationSchema={RegisterSchema}
            >
                {({
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <ContainerForm>
                        <Subtitle>Formulario de Registro</Subtitle>
                        <ContainerInput>
                            <Input
                                placeholder="Nombre completo"
                                name="name"
                                onChange={handleChange("name")}
                                value={values.name}
                            />
                            {errors.name && <Error>{errors.name}</Error>}
                        </ContainerInput>

                        <ContainerInput>
                            <Input
                                placeholder="Número de documento"
                                name="id"
                                onChange={handleChange("id")}
                                value={values.id}
                            />
                            {errors.id && <Error>{errors.id}</Error>}
                        </ContainerInput>

                        <ContainerInput>
                            <Input
                                placeholder="Teléfono de contacto"
                                name="phone"
                                onChange={handleChange("phone")}
                                value={values.phone}
                            />
                            {errors.phone && <Error>{errors.phone}</Error>}
                        </ContainerInput>

                        <ContainerInput>
                            <Input
                                placeholder="Correo electrónico"
                                name="email"
                                onChange={handleChange("email")}
                                value={values.email}
                            />
                            {errors.email && <Error>{errors.email}</Error>}
                        </ContainerInput>

                        <ContainerInput>
                            <Input
                                placeholder="Creá tu contraseña"
                                name="password"
                                onChange={handleChange("password")}
                                value={values.password}
                                type={visible ? "text" : "password"}
                            />
                            {errors.password && (
                                <Error>{errors.password}</Error>
                            )}
                        </ContainerInput>

                        <ContainerInput>
                            <Input
                                placeholder="Repetí tu contraseña"
                                name="repeatPassword"
                                onChange={handleChange("repeatPassword")}
                                value={values.repeatPassword}
                                type={visible ? "text" : "password"}
                            />
                            {errors.repeatPassword && (
                                <Error>{errors.repeatPassword}</Error>
                            )}
                        </ContainerInput>

                        <Button onClick={() => setVisible(!visible)}>
                            {visible
                                ? "Ocultar Contraseña"
                                : "Mostrar Contraseña"}
                        </Button>

                        <Button>Registrarme!</Button>
                    </ContainerForm>
                )}
            </Formik>
        </Container>
    );
};

export default Register;
