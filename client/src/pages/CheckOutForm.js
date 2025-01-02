import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";

const CheckoutForm = ({ cart, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    setLoading(true);

    try {
      // Step 1: Call your backend to create a payment intent with the cart data
      const { data } = await axios.post("/api/product/stripe/payment", {
        cart,
      });
      const { clientSecret } = data;

      // Step 2: Confirm the payment using Stripe
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: user.name,
            },
          },
        }
      );

      if (error) {
        toast.error("Payment failed, please try again.", { duration: 5000 });
        console.error(error);
        setLoading(false);
      } else if (paymentIntent.status === "succeeded") {
        console.log("Payment Intent:", paymentIntent); // Log to verify it's valid

        // Step 3: Send order data to the backend
        const orderResponse = await axios.post("/api/product/create-order", {
          cart,
          paymentIntent,
        });

        if (orderResponse.data.success) {
          toast.success("Payment and order successful!", { duration: 8000 });
        } else {
          toast.error("Failed to create order, please try again.", {
            duration: 5000,
          });
        }
        setLoading(false);
      }
    } catch (error) {
      console.error("Error during payment process:", error);
      toast.error("An error occurred, please try again.", { duration: 5000 });
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Pay Now"}
      </button>
    </form>
  );
};

export default CheckoutForm;
