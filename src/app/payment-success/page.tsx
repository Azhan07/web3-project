
import React from "react";

const PaymentSuccess = () => {
  return (
    <div className="container mx-auto p-8 text-center">
      <div className="bg-green-400 p-4 rounded-lg shadow-lg mb-8">
        <h1 className="text-4xl font-semibold text-white">Payment Successful!</h1>
      </div>
      <p className="text-lg mb-4">
        Thank you for your order. Your items will be delivered soon.
      </p>
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.Vq3POQLtLhb27qOBS5V2CwAAAA&pid=Api&P=0&h=220"
        alt="Delivery Icon"
        className="w-24 mx-auto mb-4"
      />
      <p className="text-gray-600">
        If you have any questions, please contact our support team.
      </p>
    </div>
  );
};

export default PaymentSuccess;
