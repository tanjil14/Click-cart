import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container=styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button=styled.button`
    border: none;
    width: 120;
    border-radius: 5;
    padding: 20px;
    background-color: #15e464;
    color: white;
    font-weight: 600;
    cursor: pointer;
`
const Success = () => {
    const location=useLocation()
    console.log(location.state.products)
    return (
        <Container>
            <Button>Success</Button>
        </Container>
    );
};

export default Success;