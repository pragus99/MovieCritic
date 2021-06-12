import React from "react";
import { StyleSheet, Button, TextInput, Text, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { globalStyles } from "../styles/index";

const schema = Yup.object().shape({
  title: Yup.string().required("Required"),
  body: Yup.string().min(10, "Min 10 Characters").required("Required"),
  rating: Yup.string()
    .matches(/^[1-5]{1}$/, "Must be ONE digit of number 1-5")
    .required("Required"),
});

export default function Form({
  editPost,
  defaultRating,
  defaultTitle,
  defaultBody,
}) {
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{
          title: defaultTitle,
          body: defaultBody,
          rating: defaultRating,
        }}
        validationSchema={schema}
        onSubmit={(values, formik) => {
          formik.resetForm();
          editPost(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              onChangeText={handleChange("title")}
              value={values.title}
              placeholder="Title"
              placeholderTextColor="grey"
              style={globalStyles.input}
              onBlur={handleBlur("title")}
            />
            <Text style={globalStyles.error}>
              {touched.title && errors.title}
            </Text>
            <TextInput
              onChangeText={handleChange("body")}
              value={values.body}
              placeholder="Review"
              placeholderTextColor="grey"
              style={globalStyles.input}
              onBlur={handleBlur("body")}
            />
            <Text style={globalStyles.error}>
              {touched.body && errors.body}
            </Text>

            <TextInput
              onChangeText={handleChange("rating")}
              value={values.rating}
              keyboardType="numeric"
              placeholder="Rating from 1 - 5"
              placeholderTextColor="grey"
              style={globalStyles.input}
              onBlur={handleBlur("rating")}
            />
            <Text style={globalStyles.error}>
              {touched.rating && errors.rating}
            </Text>

            <Button onPress={handleSubmit} color="#c42424" title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({});
