import React from "react";
import { Navbar, Button, Link, Text, useTheme, Image } from "@nextui-org/react";


export default function App() {
  const [variant, setVariant] = React.useState("default");
  const [activeColor, setActiveColor] = React.useState("primary");

  const {isDark} = useTheme();

  const variants = [
    "default",
    "highlight",
    "highlight-solid",
    "underline",
    "highlight-rounded",
    "highlight-solid-rounded",
    "underline-rounded",
  ];

  const colors = ["primary", "secondary", "success", "warning", "error"];
  
  return (

      <Navbar  className="Navbar1" isBordered={isDark} variant="sticky">
        <Navbar.Brand>
          <div>
            <Image src="https://cdn-icons-png.flaticon.com/512/7546/7546214.png" alt="logo" width={100} height={100} />
          </div>       
          <Text b color="inherit" hideIn="xs">
            Tecladitos
          </Text>
        </Navbar.Brand>
        <Navbar.Content activeColor={activeColor} hideIn="xs" variant={variant}>
          <Navbar.Link isActive href="#">Mas Vendidos</Navbar.Link>
          <Navbar.Link href="#">Clientes</Navbar.Link>
          <Navbar.Link href="#">FAQ</Navbar.Link>
          <Navbar.Link isActive>Compania</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Link color="inherit" href="#">
            Iniciar Sesion
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} color={activeColor} href="#">
              Registrarse
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
  )
}
