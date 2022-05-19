import Main from "../pages/Main/Main";
import Proporties from "../pages/Proporties/Proporties";
import Generic from "../pages/Generic/Generic";

export const navbar = [
  {
    id: 1,
    title: "Home",
    path: "/home",
    Element: <Main />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 2,
    title: "Proporties",
    path: "/proporties",
    Element: <Proporties />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 3,
    title: "Contacts",
    path: "/contacts",
    Element: <Generic />,
    search: "?",
    hidden: false,
    private: false,
  },
  {
    id: 4,
    title: "Sign In",
    path: "/signin",
    Element: <div />,
    search: "?",
    hidden: true,
    private: false,
  },
  {
    id: 5, 
    title: "Sign Up",
    path: "/signup",
    Element: <div />,
    search: "?",
    hidden: true,
    private: false,
  },
]