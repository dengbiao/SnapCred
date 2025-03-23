import { render, screen } from "@testing-library/react";
import App from "@app/App";

// Mock the routes component since we're not testing routes here
jest.mock("@app/routes/Routes", () => () => (
  <div data-testid="mock-routes">Routes Content</div>
));

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(screen.getByTestId("mock-routes")).toBeInTheDocument();
  });

  it("contains a router", () => {
    render(<App />);
    // Router doesn't have a specific DOM structure we can test,
    // but we can verify our mock routes component is rendered
    expect(screen.getByText("Routes Content")).toBeInTheDocument();
  });
});
