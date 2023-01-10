import { useFormik } from "formik";
import * as yup from "yup";

const formValidationSchema = yup.object({
  email: yup
    .string()
    .min(8, "Need a bigger Email😅")
    .required("Valid Email is need😑"),
  password: yup
    .string()
    .min(4, "Need a strong Password😁")
    .required("Valid Password is need😑"),
});

export function BasicForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("Form values:", values);
    },
  });
  return (
    <form className="add-movie-form" onSubmit={formik.handleSubmit}>
      <input
        value={formik.values.email}
        type="email"
        placeholder="Email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input
        value={formik.values.password}
        type="text "
        placeholder="Password"
        name="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password
        ? formik.errors.password
        : null}

      {/* error displayed  */}
      {/* <h2>Errors</h2>
      <pre>{JSON.stringify(formik.errors)}</pre>
      <h2>Touched</h2>
      <pre>{JSON.stringify(formik.touched)}</pre> */}

      <button type="submit">Submit</button>
    </form>
  );
}
