import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AppRoutes from "@app/routes/Routes";

// Mock the page components
jest.mock("@app/pages/HomePage", () => () => (
  <div data-testid="home-page">Home Page</div>
));
jest.mock("@app/pages/AboutPage", () => () => (
  <div data-testid="about-page">About Page</div>
));
jest.mock("@app/pages/GuidePage", () => () => (
  <div data-testid="guide-page">Guide Page</div>
));

describe("AppRoutes", () => {
  it("renders HomePage for / path", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("renders AboutPage for /about path", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });

  it("renders GuidePage for /guide path", () => {
    render(
      <MemoryRouter initialEntries={["/guide"]}>
        <AppRoutes />
      </MemoryRouter>
    );
    expect(screen.getByTestId("guide-page")).toBeInTheDocument();
  });
});
