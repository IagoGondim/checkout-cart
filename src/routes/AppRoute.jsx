import React from "react";
import { Route, Routes } from "react-router-dom";
import Bag from "../bag/Bag";
import Confirmation from "../confirmation/Confirmation";
import Payment from "../payment/Payment";

const AppRoute = () => {
  return (
    <Routes>
      <Route path="/bag" element={<Bag />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/confirmation" element={<Confirmation />} />
    </Routes>
  );
};

export default AppRoute;
