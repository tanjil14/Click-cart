import StripeCheckout from "react-stripe-checkout";
import styled from "styled-components";
const KEY =
  "pk_test_51LKz54FEFbpEbFpcNa47xJggEnNlJOWb65hzh9YWxVoxI4pdxlPOGSbJftRsdSwCWY9JMQ4dsh1Dzesl405TRXkW00Qz6oa5CC";
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
  const onToken = (token) => {
    console.log(token);
  };
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
        stripeKey={KEY}
      >
        <Button>Pay Now</Button>
      </StripeCheckout>
    </Container>
  );
};

export default Pay;
