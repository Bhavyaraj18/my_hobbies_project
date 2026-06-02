import React, { useState } from "react";
import useEMI from "../hooks/useEMI";

function LoanCalculator() {
  const [principal, setPrincipal] = useState(100000);
  const [rate, setRate] = useState(10);
  const [duration, setDuration] = useState(2);

  const emi = useEMI(principal, rate, duration);

  return (
    <div>
      <h2>Loan EMI Calculator</h2>

     <label>Principal</label> <input
        type="number"
        value={principal}
        onChange={(e) => setPrincipal(e.target.value)}
        placeholder="Principal"
      />

      <label>Rate</label><input
        type="number"
        value={rate}
        onChange={(e) => setRate(e.target.value)}
        placeholder="Interest Rate (%)"
      />

      <label>Duration (Yrs)</label><input
        type="number"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        placeholder="Duration (years)"
      />

      <h3>EMI: {emi}</h3>
    </div>
  );
}

export default LoanCalculator;