import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setbtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = ({ target: { value } }) => {
    if (value === "") {
      setbtnDisabled(true);
      setMessage(null);
    } else if (value !== "" && value.trim().length < 10) {
      setbtnDisabled(true);
      setMessage("Text must be at least 10 characters");
    } else {
      setbtnDisabled(false);
      setMessage(null);
    }

    setText(value);
  };

  return (
    <Card>
      <form>
        <h2>How would rate your service with us?</h2>
        {/* @todo - rating select component */}
        <div className="input-group">
          <input
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}
export default FeedbackForm;