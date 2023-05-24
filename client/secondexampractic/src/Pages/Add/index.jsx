import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import { Helmet } from "react-helmet";
import { postAlldatas } from '../../api/httpsrequests';
import { robotSchema } from "../../validation/Robotvalidation"

function Add() {

  function handleSubmit(values, actions) {
    postAlldatas(values)
    console.log(values)
    // console.log(actions);
    // actions.resetForm();
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      price: '',
      description: '',
      imageURL: '',
    },
    onSubmit: handleSubmit,
    validationSchema: robotSchema,
  });


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Add</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <h1 style={{ textAlign: "center", padding: "130px" }}>Add Robots</h1>


      <form onSubmit={formik.handleSubmit} style={{ display: "flex", gap: "20px", justifyContent: "center" }} >
        
        <TextField error = {formik.errors.name && formik.touched.name ? true : false} 
        onChange={formik.handleChange}
         onBlur={formik.handleBlur} 
         type='text' name='name' id="outlined-basic" label="name" variant="outlined" />
        {formik.errors.name && formik.touched.name && <p style={{color:"red"}}>{formik.errors.name}</p>}


        <TextField error={formik.errors.price && formik.touched.price ? true :false}
        onChange={formik.handleChange} 
        onBlur={formik.handleBlur}
         type='number' name='price' id="outlined-basic" label="price" variant="outlined" />

        {formik.errors.price && formik.touched.price && <p style={{color:"red"}}>{formik.errors.price}</p>}

        <TextField error = {formik.errors.description && formik.touched.description ? true :false}
         onChange={formik.handleChange}
          onBlur={formik.handleBlur} 
          type='text' name='description' id="outlined-basic" label="description" variant="outlined" />
        {formik.errors.description && formik.touched.description && <p>{formik.errors.description}</p>}

        <TextField error = {formik.errors.imageURL && formik.touched.imageURL ? true :false}
         onChange={formik.handleChange} 
         onBlur={formik.handleBlur}
          type='text' name='imageURL' id="outlined-basic" label="Image" variant="outlined" />
          {formik.errors.imageURL && formik.touched.imageURL && <p>{formik.errors.imageURL}</p>}


        <Button type='submit' style={{ padding: "5px 10px" }} variant="contained">Add</Button>
      </form>

    </>
  )
}

export default Add
