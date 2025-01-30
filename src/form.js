import { useState } from "react";
import { Button, FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { BackEnd } from "./twilio";

function TextForm() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  function handlephoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }

  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    BackEnd(phoneNumber, message);
    console.log({ phoneNumber });
    console.log({ message });
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="group">
          {/* <img
            src="/dog.jpg"
            alt="Dog"
            style={{ width: "100%", height: "auto" }}
          /> */}
        </Form.Group>
        <Form.Group className="group">
          <Form.Label className="text"> Phone Number Goes Here </Form.Label>
          <Form.Control
            type="text"
            className="box1"
            placeholder="Type in a Phone Number"
            value={phoneNumber}
            onChange={(e) => handlephoneNumberChange(e)}
          ></Form.Control>
        </Form.Group>
        <Form.Group className="group">
          <Form.Label> Message Goes Here </Form.Label>

          <Form.Control
            as="textarea"
            className="box1"
            placeholder="Type your message"
            value={message}
            onChange={(e) => handleMessageChange(e)}
          ></Form.Control>
        </Form.Group>
        <Button className="btn" variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
}

export default TextForm;
