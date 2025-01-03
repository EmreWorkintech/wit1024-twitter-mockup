import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import { BrowserRouter } from "react-router-dom";
import { UserContextProvider } from "../contexts/UserContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

describe("A truthy statement", () => {
  it("should be equal to 2", () => {
    expect(1 + 1).toEqual(2);
  });
});

describe("App", () => {
  const queryClient = new QueryClient();
  beforeEach(() => {
    render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserContextProvider>
            <App />
          </UserContextProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </BrowserRouter>
    );
  });

  it("renders the App component", () => {
    const title = screen.getByRole("heading");
    expect(title).toBeInTheDocument();
  });

  it("should opens login page", async () => {
    //act
    const loginButton = screen.getByText("Login");
    const user = userEvent.setup();
    await user.click(loginButton);
    //assert
    const title = screen.getByRole("heading");
    const titleByText = screen.getByText(/log in to twitter/i);
    expect(title).toBeInTheDocument();
    expect(titleByText).toBeInTheDocument();
  });

  it("should opens feed page after successfull login", async () => {
    //act
    const loginButton = screen.getByText("Login");
    const user = userEvent.setup();
    await user.click(loginButton);
    await user.click(await screen.findByTestId("loginform-submit"));

    //assert
    const posts = await screen.findAllByTestId("postItem");
    expect(posts).toHaveLength(63);
  });
});
