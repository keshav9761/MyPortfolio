import { styled } from "@mui/material/styles";
import { Card } from "@mui/material";

const CardWrapper = styled(Card)(({ theme }) => ({
    height: "100%",
    display: "flex",
    flexDirection: "column",
    transition: "all 0.3s ease-in-out",
    background: "linear-gradient(145deg, #1E293B 0%, #0F172A 100%)",
    border: "1px solid",
    borderColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",

    "&:hover": {
        transform: "translateY(-8px)",
        boxShadow: "0 12px 40px rgba(99, 102, 241, 0.2)",
        borderColor: "rgba(99, 102, 241, 0.3)",
    },
}));

export default CardWrapper;
