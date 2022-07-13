import axios from "axios";
import { useEffect, useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  border: none;
  width: 120px;
  border-radius: 5px;
  padding: 20px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
const Pay = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(stripeToken);
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/api/checkout/payment",
          {
            tokenId: stripeToken.id,
            amount: 2000,
          }
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);
  return (
    <Container>
      <StripeCheckout
        name="Tanjil Shop"
        image="https://avatars.githubusercontent.com/u/1486366?v=4"
        billingAddress
        shippingAddress
        description="Your total is $20"
        amount={2000}
        token={onToken}
        stripeKey="pk_test_51LKz54FEFbpEbFpcNa47xJggEnNlJOWb65hzh9YWxVoxI4pdxlPOGSbJftRsdSwCWY9JMQ4dsh1Dzesl405TRXkW00Qz6oa5CC"
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
