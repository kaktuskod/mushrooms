import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField } from 'formik';
import styled from '@emotion/styled';
import * as Yup from 'yup';

const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input> and also replace ErrorMessage entirely.
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <StyledLabel htmlFor={props.id || props.name}>{label}</StyledLabel>
      <StyledSelect {...field} {...props} />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </>
  );
};

// And now we can use these
const SignupForm = () => {

  return (
    <>
      <h1>FEEL THE DATA !</h1>
      <Formik
        initialValues={{
      cap-shape: '',
      cap-surface,cap-color:'',
      bruises:'',
      odor:'',
      gill-attachment:'',
      gill-spacing:'',
      gill-size:'',
      gill-color:'',
      stalk-shape:'',
      stalk-root:'',
      stalk-surface-above-ring:'',
      stalk-surface-below-ring:'',
      stalk-color-above-ring:'',
      stalk-color-below-ring:'',
      veil-type:'',
      veil-color:'',
      ring-number:'',
      ring-type:'',
      spore-print-color:'',
      population:'',
      habitat:'',
      mushroo:'',
    }}

        onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      >


        <Form>
        <MyTextInput
          label="cap-shape"
          name="cap-shape"
          type="text"
          placeholder="cap-shape"
        />


        <MyTextInput
          label="cap-surface"
          name="cap-surface"
          type="text"
          placeholder="cap-surface"
        />   

        <MyTextInput
          label="cap-color"
          name="cap-color"
          type="text"
          placeholder="cap-color"
        />

        <MyTextInput
          label="bruises"
          name="bruises"
          type="text"
          placeholder="bruises"
        />

        <MyTextInput
          label="odor"
          name="odor"
          type="text"
          placeholder="odor"
        />

        <MyTextInput
          label=" gill-attachment"
          name=" gill-attachment"
          type="text"
          placeholder=" gill-attachment"
        />

        <MyTextInput
          label="gill-spacing"
          name="gill-spacing"
          type="text"
          placeholder="gill-spacing"
        />

        <MyTextInput
          label="gill-size"
          name="gill-size"
          type="text"
          placeholder="gill-size"
        />

        <MyTextInput
          label="gill-color"
          name="gill-color"
          type="text"
          placeholder="gill-color"
        />

        <MyTextInput
          label="stalk-shape"
          name="stalk-shape"
          type="text"
          placeholder="stalk-shape"
        />


        <MyTextInput
          label="stalk-root"
          name="stalk-root"
          type="text"
          placeholder="stalk-root"
        />

        <MyTextInput
          label="stalk-surface-above-ring"
          name="stalk-surface-above-ring"
          type="text"
          placeholder="stalk-surface-above-ring"
        />

        <MyTextInput
          label="stalk-surface-below-ring"
          name="stalk-surface-below-ring"
          type="text"
          placeholder="stalk-surface-below-ring"
        />

        <MyTextInput
          label="stalk-color-above-ring"
          name="stalk-color-above-ring"
          type="text"
          placeholder="stalk-color-above-ring"
        />


        <MyTextInput
          label="stalk-color-below-ring"
          name="stalk-color-below-ring"
          type="text"
          placeholder="stalk-color-below-ring"
        />

        <MyTextInput
          label="veil-type"
          name="veil-type"
          type="text"
          placeholder="veil-type"
        />

        <MyTextInput
          label="veil-color"
          name="veil-color"
          type="text"
          placeholder="veil-color"
        />

        <MyTextInput
          label="ring-number"
          name="ring-number"
          type="text"
          placeholder="ring-number"
        />

        <MyTextInput
          label="ring-type"
          name="ring-type"
          type="text"
          placeholder="ring-type"
        />

        <MyTextInput
          label="spore-print-color"
          name="spore-print-color"
          type="text"
          placeholder="spore-print-color"
        />

        <MyTextInput
          label="population"
          name="population"
          type="text"
          placeholder="population"
        />

        <MyTextInput
          label="habitat"
          name="habitat"
          type="text"
          placeholder="habitat"
        />

        <MyTextInput
          label="mushroom"
          name="mushroom"
          type="text"
          placeholder="mushroom"
        />



        <button type="submit">Submit</button>
      </Form>
    </Formik>
    </>
  );
};

export default Form;