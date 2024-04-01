import Link from "next/link";
import React, { useEffect } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import "@/styles/components/get-nTop-demo.scss";
import { COUNTRIES, RATINGS } from "@/constants";
import { FormProvider, TextInput } from "../hook-form";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Rating from "react-rating";
import Select from "react-select";

const DemoModalComponent = ({ show, handleClose, email = "" }) => {
  // Hook Form Config
  const defaultValues = {
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    isAccepted: false,
  };

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    company: yup.string().required("Company address is required"),
    email: yup
      .string()
      .email("Enter valid email")
      .required("Email address is required"),
    phone: yup.string(),
    country: yup.string().required("Country is required"),
    isAccepted: yup.bool(),
  });

  // Hooks
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });

  // Constants
  const {
    register,
    handleSubmit,
    watch,
    control,
    setValue,
    formState: { isSubmitting, errors },
  } = methods;

  useEffect(() => {
    if (email) {
      setValue("email", email);
    }
  }, []);

  const selectedCountry = watch("country");

  // Handlers
  const onSubmit = () => {};

  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      className="ntop-modal-wrapper"
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="modal-header-wrapper">
          <h3 className="ntop-main-title-text">nTop Demo</h3>
          <h6 className="modal-subtile-text">
            We will show you how nTop improves design for engineers.
          </h6>
        </div>
        <div className="form-getyour-demo-wrapper">
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <Col sm={6} md={6}>
                  <TextInput
                    id="firstName"
                    label="First Name *"
                    name="firstName"
                  />
                </Col>
                <Col sm={6} md={6}>
                  <TextInput
                    id="lastName"
                    label="Last Name *"
                    name="lastName"
                  />
                </Col>
                <Col sm={6} md={6}>
                  <TextInput id="company" label="Company *" name="company" />
                </Col>
                <Col sm={6} md={6}>
                  <TextInput id="email" label="Email *" name="email" />
                </Col>
                <Col sm={6} md={6}>
                  <TextInput id="phone" label="Phone" name="phone" />
                </Col>
                <Col sm={6} md={6}>
                  <div class="select2wrapper-div">
                    <Controller
                      control={control}
                      defaultValue={""}
                      name="country"
                      render={({ field: { onChange, value, ref } }) => (
                        <Select
                          inputRef={ref}
                          options={COUNTRIES}
                          value={COUNTRIES.find((c) => c.value === value)}
                          onChange={(val) => onChange(val.value)}
                          name="country"
                          placeholder="Country"
                          className="ntop-select2-main-container error-text"
                          classNamePrefix="ntop-select-option"
                        />
                      )}
                    />
                    {errors?.country?.message && (
                      <div className="error-text-model">
                        {errors?.country?.message}
                      </div>
                    )}
                  </div>
                </Col>
              </Row>
              <div className="ntop-add-comment-wrapper">
                <span className="add-comment-text">+ Add a comment</span>
                {selectedCountry && selectedCountry === "canada" && (
                  <label class="checkbox-wrapper">
                    Yes, I would like to receive promotional communications
                    about products, services, and events from nTop.
                    <input
                      type="checkbox"
                      name="isAccepted"
                      id="isAccepted"
                      {...register("isAccepted")}
                    />
                    <span class="checkmark"></span>
                  </label>
                )}
              </div>
              <div className="modal-footer-wrapper">
                <button
                  variant="primary"
                  type="submit"
                  className="ntop-theme-btn"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </div>
            </Form>
          </FormProvider>
          <div className="google-ac-details-wrapper">
            <ul className="google-icon-wrapper">
              {RATINGS.map(({ id, imageSrc, ratings }, index) => (
                <li key={index}>
                  <i>
                    <img src={imageSrc} alt={`ntop-${id}`} />
                  </i>
                  <span>
                    <Rating
                      emptySymbol={
                        <img src="/images/start-unfill.svg" alt="ntop" />
                      }
                      fullSymbol={
                        <img src="/images/start-fill.svg" alt="ntop" />
                      }
                      readonly={true}
                      initialRating={ratings}
                    />
                  </span>
                  <p>{`${ratings} / 5`}</p>
                  <p></p>
                </li>
              ))}
            </ul>
            <p className="copyright-link-text">
              By completing the form and submitting your information above, you
              are agreeing to our <Link href="#">Privacy Policy</Link>.
            </p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DemoModalComponent;
