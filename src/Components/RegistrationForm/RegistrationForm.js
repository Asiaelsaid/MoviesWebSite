import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

function RegistrationForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    userNameError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [type, setType] = useState(false);
  const [icon, setIcon] = useState(false);
  const toggle = () => {
    setIcon(!icon);
    setType(!type);
  };

  const validateValues = (event) => {
    if (event.target.name === "name") {
      setValues({ ...values, name: event.target.value });
      setErrors({
        ...errors,
        nameError: event.target.value.length === 0 ? "name is required" : "",
      });
    } else if (event.target.name === "email") {
      const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      setValues({ ...values, email: event.target.value });
      setErrors({
        ...errors,
        emailError:
          event.target.value.length === 0
            ? "email is required"
            : reg.test(event.target.value)
            ? ""
            : "email must contain:xxxx@xx.com ",
      });
    } else if (event.target.name === "userName") {
      const reg = /^\S*$/;
      setValues({ ...values, userName: event.target.value });
      setErrors({
        ...errors,
        userNameError:
          event.target.value.length === 0
            ? "user name is required"
            : reg.test(event.target.value)
            ? ""
            : " not allowing space in user name  ",
      });
    } else if (event.target.name === "password") {
      const RegExp =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      setValues({ ...values, password: event.target.value });
      setErrors({
        ...errors,
        passwordError:
          event.target.value.length === 0
            ? "user password is required"
            : RegExp.test(event.target.value)
            ? ""
            : " password not valid  ",
      });
    } else if (event.target.name === "confirmPassword") {
      setValues({ ...values, password: event.target.value });
      setErrors({
        ...errors,
        passwordError:
          event.target.value.length === 0
            ? "confirm password is required"
            : event.target.value == values.password
            ? ""
            : " Passwoad and confirm password should be same  ",
      });
    }
  };
  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={(e) => {
              validateValues(e);
            }}
          />
          <p className="text-danger"> {errors.nameError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={(e) => {
              validateValues(e);
            }}
          />
          <p className="text-danger"> {errors.emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>User Name </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your user name"
            name="userName"
            onChange={(e) => {
              validateValues(e);
            }}
          />
          <p className="text-danger"> {errors.userNameError}</p>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={type ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={(e) => {
              validateValues(e);
            }}
          />
          <span onClick={toggle}>
            <Icon icon={icon ? eye : eyeOff} size={25} />
          </span>
          <p className="text-danger"> {errors.passwordError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type={type ? "text" : "password"}
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => {
              validateValues(e);
            }}
          />
          <span onClick={toggle}>
            <Icon icon={icon ? eye : eyeOff} size={25} />
          </span>
          <p className="text-danger"> {errors.passwordError}</p>
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </>
  );
}

export default RegistrationForm;
