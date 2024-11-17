// functionq
import { useState } from "react";

// css
import "/src/styles/form.css";

// props
import PropTypes from "prop-types";

export default function FetchForm({ handleSubmit }) {
  const [value, setValue] = useState("");

  return (
    <div className="form">
      <p>
        You can send a GET request and see the JSON data response. Try searching
        for a character by submitting an item number
      </p>
      <p>
        e.g.{" "}
        <span style={{ color: "blue" }}>
          https://rest-api-jvtz.onrender.com/character/
        </span>
        <span>22</span>
      </p>
      <form onSubmit={(e) => handleSubmit(e, value)}>
        <label>https://rest-api-jvtz.onrender.com/character/</label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

FetchForm.propTypes = {
  handleSubmit: PropTypes.func,
};
