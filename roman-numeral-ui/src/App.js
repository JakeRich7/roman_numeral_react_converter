import React, { useState } from "react";
import { TextField, Button, View, Flex, Text, Heading, Provider, defaultTheme } from "@adobe/react-spectrum";
import axios from "axios";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleInputChange = (value) => {
    setInput(value);
    setError("");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setOutput("");
    setError("");

    const parsedInput = parseInt(input, 10);

    if (isNaN(parsedInput)) {
      setError("Invalid input. Please enter a valid number.");
      return;
    }

    try {
      const response = await axios.get(`http://localhost:8080/romannumeral?query=${parsedInput}`);
      setOutput(response.data.output);
    } catch (err) {
      if (err.response && err.response.status === 400) {
        setError("Out of range. Please enter a value between 1 and 3999.");
      } else {
        setError("An error occurred while processing your request.");
      }
    }
  };

  return (
    <Provider theme={defaultTheme}>
      <View padding="size-200">
        <Heading level={1}>Roman Numeral Converter</Heading>

        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="size-100">
            <TextField
              label="Enter a number"
              type="number"
              value={input}
              onChange={handleInputChange}
              minValue={1}
              maxValue={3999}
              isRequired
              validationState={error ? "invalid" : "valid"}
            />
            {error && <Text className="error-text">{error}</Text>}

            <Button variant="cta" type="submit">
              Convert to Roman Numeral
            </Button>
          </Flex>
        </form>

        {output && (
          <View marginTop="size-200">
            <Text>Roman Numeral: {output}</Text>
          </View>
        )}
      </View>
    </Provider>
  );
};

export default App;
