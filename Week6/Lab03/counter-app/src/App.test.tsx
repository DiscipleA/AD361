import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  // A fresh render should show zero and all three buttons before any clicks.
  test("shows the starting count and all three buttons", () => {
    render(<App />);

    expect(screen.getByRole("heading").textContent).toBe("Count: 0");
    expect(screen.getByRole("button", { name: "Increment" })).not.toBeNull();
    expect(screen.getByRole("button", { name: "Decrement" })).not.toBeNull();
    expect(screen.getByRole("button", { name: "Reset" })).not.toBeNull();
  });

  // This click reaches the statement setCount(count + 1).
  test("increments the count from 0 to 1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));

    expect(screen.getByRole("heading").textContent).toBe("Count: 1");
  });

  // Decrement must allow the count to go below zero.
  test("decrements the count from 0 to -1", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Decrement" }));

    expect(screen.getByRole("heading").textContent).toBe("Count: -1");
  });

  // First verify a nonzero count so Reset cannot pass by leaving zero unchanged.
  test("resets a nonzero count to 0", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByRole("heading").textContent).toBe("Count: 1");

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(screen.getByRole("heading").textContent).toBe("Count: 0");
  });

  // One render keeps the state from each action for the next action to use.
  test("handles a sequence of count changes and continues after reset", () => {
    render(<App />);

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByRole("heading").textContent).toBe("Count: 1");

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByRole("heading").textContent).toBe("Count: 2");

    fireEvent.click(screen.getByRole("button", { name: "Decrement" }));
    expect(screen.getByRole("heading").textContent).toBe("Count: 1");

    fireEvent.click(screen.getByRole("button", { name: "Reset" }));
    expect(screen.getByRole("heading").textContent).toBe("Count: 0");

    fireEvent.click(screen.getByRole("button", { name: "Increment" }));
    expect(screen.getByRole("heading").textContent).toBe("Count: 1");
  });
});
