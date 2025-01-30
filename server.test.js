const request = require("supertest");
const { app, convertToRoman } = require("./server");

// convertToRoman Unit Tests
describe('convertToRoman Unit Tests', () => {
  test('should convert 1 to I', () => {
    expect(convertToRoman(1)).toBe('I');
  });

  test('should convert 4 to IV', () => {
    expect(convertToRoman(4)).toBe('IV');
  });

  test('should convert 9 to IX', () => {
    expect(convertToRoman(9)).toBe('IX');
  });

  test('should convert 58 to LVIII', () => {
    expect(convertToRoman(58)).toBe('LVIII');
  });

  test('should convert 3999 to MMMCMXCIX', () => {
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });

  test('should return "Out of range" for numbers less than 1', () => {
    expect(convertToRoman(0)).toBe('Out of range');
  });

  test('should return "Out of range" for numbers greater than 3999', () => {
    expect(convertToRoman(4000)).toBe('Out of range');
  });
});

// GET /romannumber API Unit Tests
describe("GET /romannumeral API Unit Tests", () => {
  test("should return valid Roman numeral for input 1", async () => {
    const response = await request(app).get("/romannumeral?query=1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ input: "1", output: "I" });
  });

  test("should return valid Roman numeral for input 3999", async () => {
    const response = await request(app).get("/romannumeral?query=3999");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ input: "3999", output: "MMMCMXCIX" });
  });

  test("should return an error for out-of-range input (0)", async () => {
    const response = await request(app).get("/romannumeral?query=0");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Out of range" });
  });

  test("should return an error for out-of-range input (4000)", async () => {
    const response = await request(app).get("/romannumeral?query=4000");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Out of range" });
  });

  test("should return an error for non-numeric input", async () => {
    const response = await request(app).get("/romannumeral?query=hello");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });

  test("should return an error when query parameter is missing", async () => {
    const response = await request(app).get("/romannumeral");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });

  test("should handle spaces and special characters gracefully", async () => {
    const response = await request(app).get("/romannumeral?query=%20%25");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "Invalid input" });
  });
});