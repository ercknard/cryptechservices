import { useEffect, useState } from "react";
import Navbar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import { Box } from "@mui/material";
import { BrowserRouter as Router } from "react-router-dom";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Check if the component is being rendered on the client-side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Or render a loading spinner or placeholder
  }

  return (
    <Box>
      <Router>
        <Box position={"fixed"} width={1} left={0} zIndex={100}>
          <Navbar />
        </Box>
        {children}
        <Footer />
      </Router>
    </Box>
  );
};

export default Wrapper;
