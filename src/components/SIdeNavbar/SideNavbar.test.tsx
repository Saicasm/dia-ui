import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter, usePathname } from "next/navigation";
import Sidenavbar from "./SideNavbar";
import { appRoute } from "@/config/routing/app-route";
// import { Icons } from "../Icons/Icons";

// Mock the next/navigation hooks
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

// Mock the Icons
jest.mock("@/components/Icons/Icons", () => ({
  Icons: {
    home: () => <span data-testid="home-icon">Home Icon</span>,
    settings: () => <span data-testid="settings-icon">Settings Icon</span>,
    copy: () => <span data-testid="copy-icon">Copy Icon</span>,
    search: () => <span data-testid="search-icon">Search Icon</span>,
    upload: () => <span data-testid="upload-icon">Upload Icon</span>,
    closeX: () => <span data-testid="close-icon">Close Icon</span>,
  },
}));
// Mock the appRoute
jest.mock("@/config/routing/app-route", () => ({
  appRoute: [
    {
      name: "home",
      routePath: "/home",
      icon: <span data-testid="home-icon">Home Icon</span>,
    },
    {
      name: "settings",
      routePath: "/settings",
      icon: <span data-testid="settings-icon">Settings Icon</span>,
    },
  ],
}));

describe("Sidenavbar", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
    (usePathname as jest.Mock).mockReturnValue("/home");
  });

  it("renders the Sidenavbar component", () => {
    render(<Sidenavbar />);
    expect(screen.getByText("Diaconia")).toBeInTheDocument();
  });

  it("renders all navigation items", () => {
    render(<Sidenavbar />);
    appRoute.forEach((route) => {
      expect(screen.getByText(route.name)).toBeInTheDocument();
    });
  });

  //   it("highlights the active route", () => {
  //     render(<Sidenavbar />);
  //     fireEvent.click(screen.getByText("home"));
  //     expect(mockPush).toHaveBeenCalledWith("/home");
  //     const activeItem = screen.getByText("home").closest("div");
  //     expect(activeItem).toHaveClass("bg-light-accent-primary");
  //   });

  it("does not highlight inactive routes", () => {
    render(<Sidenavbar />);
    const inactiveItem = screen.getByText("settings").closest("div");
    expect(inactiveItem).not.toHaveClass("bg-light-accent-primary");
  });

  it("calls router.push with correct path when a nav item is clicked", () => {
    render(<Sidenavbar />);
    fireEvent.click(screen.getByText("settings"));
    expect(mockPush).toHaveBeenCalledWith("/settings");
  });

  it("renders icons for each nav item", () => {
    render(<Sidenavbar />);
    expect(screen.getByTestId("home-icon")).toBeInTheDocument();
    expect(screen.getByTestId("settings-icon")).toBeInTheDocument();
  });
});
