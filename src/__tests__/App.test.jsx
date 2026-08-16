import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";
import Header from "../components/Header";
import About from "../components/About";
import Article from "../components/Article";


test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector(".App")).toBeInTheDocument();
  expect(container.querySelector(".App header")).toBeInTheDocument();
  expect(container.querySelector(".App aside")).toBeInTheDocument();
  expect(container.querySelector(".App main")).toBeInTheDocument();
});

describe("Blog Component Prop Tests", () => {
  // Test Header prop rendering
  test("renders blog name in Header via props", () => {
    render(<Header name="Under the Hood" />);
    const headerHeading = screen.getByRole("heading", { level: 1 });
    expect(headerHeading).toHaveTextContent("Under the Hood");
  });

  // Test About default and custom props
  test("renders default image in About when no image prop is passed", () => {
    render(<About about="A blog about React testing." />);
    const img = screen.getByAltText("blog logo");
    expect(img).toHaveAttribute("src", "https://via.placeholder.com/215");
  });

  test("renders custom image and text in About when props are provided", () => {
    const customImg = "https://example.com/logo.png";
    render(<About image={customImg} about="Custom bio content" />);
    
    const img = screen.getByAltText("blog logo");
    expect(img).toHaveAttribute("src", customImg);
    expect(screen.getByText("Custom bio content")).toBeInTheDocument();
  });

  // Test Article default date fallback
  test("renders default date in Article if no date prop is provided", () => {
    render(<Article title="Testing Default Props" preview="Some preview text" />);
    expect(screen.getByText("January 1, 1970")).toBeInTheDocument();
  });
});