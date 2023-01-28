import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    name: Yup.string().required("Éste campo es obligatorio"),
    id: Yup.number().required("Éste campo es obligatorio"),
    phone: Yup.number().required("Éste campo es obligatorio"),
    email: Yup.string().email("Éste correo electrónico es inválido").required("Éste campo es obligatorio"),
    password: Yup.string().required("Éste campo es obligatorio"),
})

const Register = () => (
    <Formik
        initialValues={{
            name: "",
            id: "",
            phone: "",
            email: "",
            password: "",
        }}
        validationSchema={RegisterSchema}
    >
        {({ handleBlur, handleChange, handleSubmit, values, errors }) => (
            <>
                <input
                    placeholder="Nombre completo"
                    name="name"
                    onChange={handleChange("name")}
                    value={values.name}
                />
                {errors.name && <p>{errors.name}</p>}

                <input
                    placeholder="Número de documento"
                    name="id"
                    onChange={handleChange("id")}
                    value={values.id}
                />
                {errors.id && <p>{errors.id}</p>}

                <input
                    placeholder="Teléfono de contacto"

                    name="phone"
                    onChange={handleChange("phone")}
                    value={values.phone}
                />
                {errors.phone && <p>{errors.phone}</p>}

                <input
                    placeholder="Correo electrónico"

                    name="email"
                    onChange={handleChange("email")}
                    value={values.email}
                />
                {errors.email && <p>{errors.email}</p>}

                <input
                    placeholder="Creá tu contraseña"
                    name="password"
                    onChange={handleChange("password")}
                    value={values.password}
                    type="password"
                />
                {errors.password && <p>{errors.password}</p>}

                <button>Registrarme!</button>
            </>
        )}
    </Formik>
);

export default Register;
