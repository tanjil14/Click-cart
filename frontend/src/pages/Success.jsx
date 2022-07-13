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
    background-color: black;
    color: white;
    font-weight: 600;
    cursor: pointer;
`
const Success = () => {
    return (
        <Container>
            <Button>Pay Now</Button>
        </Container>
    );
};

export default Success;