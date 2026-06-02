import { useState, useEffect } from "react";

function useEMI(principal, annualRate, durationYears) {
  const [emi, setEmi] = useState(0);

  useEffect(() => {
    if (!principal || !annualRate || !durationYears) {
      setEmi(0);
      return;
    }

    const monthlyRate = annualRate / 12 / 100;
    const months = durationYears * 12;

    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(emiValue.toFixed(2));
  }, [principal, annualRate, durationYears]);

  return emi;
}

export default useEMI;