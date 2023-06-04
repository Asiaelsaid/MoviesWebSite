import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/feather/eye";
import { eyeOff } from "react-icons-kit/feather/eyeOff";

function AddUser() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });
  const [type, setType] = useState(false);
  const [icon, setIcon] = useState(false);

  const toggle = () => {
    setIcon(!icon);
    setType(!type);
  };

  const validateInput = (event) => {
    if (event.target.name === "email") {
      setUser({ ...user, email: event.target.value });
      setErrors({
        ...errors,
        emailError:
          event.target.value.length === 0
            ? "email is Required"
            : event.target.value.length < 5
            ? "email format xxxx@xxx.caom"
            : "",
      });
    } else if (event.target.name === "password") {
      setUser({ ...user, password: event.target.value });
      setErrors({
        ...errors,
        passwordError:
          event.target.value.length === 0
            ? "password is Required"
            : event.target.value.length < 8
            ? "password length not than 8 charcters"
            : " ",
      });
    }
  };

  const hendleSbmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          hendleSbmit();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={user.email}
            onChange={(e) => {
              validateInput(e);
            }}
            name="email"
          />
          <p className="text-danger"> {errors.emailError}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={type ? "text" : "password"}
            placeholder="Password"
            value={user.password}
            onChange={(e) => {
              validateInput(e);
            }}
            name="password"
          />

          <span onClick={toggle}>
            <Icon icon={icon ? eye : eyeOff} size={25} />
          </span>
          <p className="text-danger"> {errors.passwordError}</p>
        </Form.Group>

        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default AddUser;
