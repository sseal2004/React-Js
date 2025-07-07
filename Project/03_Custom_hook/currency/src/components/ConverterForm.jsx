import { useEffect, useState } from "react";
import CurrencySelect from "./CurrencySelect";

const ConverterForm = () => {

    // Default
    const [amount, setAmount] = useState(100);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("INR");
    const [result, setResult] = useState("");
    const [isLoading, SetIsLoading] = useState(false); // ✅ lowercase false

    // handle swap func
    const handleSwapCurrency = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
    };

    const getExchangeRate = async () => {
        SetIsLoading(true); // ✅ Moved inside function
        const API_KEY = import.meta.env.VITE_API_KEY;
        const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromCurrency}/${toCurrency}`;

        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw Error("Something went wrong!");

            const data = await response.json();
            const rate = (data.conversion_rate * amount).toFixed(2);
            setResult(`${amount} ${fromCurrency} = ${rate} ${toCurrency}`);
        } catch (error) {
            console.log("Fetch Error:", error);
        } finally {
            SetIsLoading(false);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        getExchangeRate();
    };

    useEffect(() => {
        getExchangeRate(); // ✅ Fix: call function
    }, []);

    return (
        
       <div className="flex items-center justify-center bg-gradient-to-br from-violet-300 to-green-300 p-6 rounded-xl ">
  <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-[1.01]">
    <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-fuchsia-500 via-pink-500 to-orange-500 text-transparent bg-clip-text  drop-shadow-md mb-10 tracking-widest animate-pulse">
  💱 Currency Converter
</h2>

    <form className="space-y-6" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Enter Amount</label>
       <input
  type="number"
  className="w-full px-4 py-2 border border-gray-300 rounded-xl bg-white text-black focus:outline-none focus:ring-2 focus:ring-indigo-400 transition duration-200"
  value={amount}
  onChange={(e) => setAmount(e.target.value)}
  required
/>
      </div>

<div className="flex items-center justify-center gap-4 my-4">
  {/* From */}
  <div className="flex flex-col form-group">
    <label className="block text-sm font-semibold text-gray-700 mb-1">From</label>
    <CurrencySelect
      selectedCurrency={fromCurrency}
      handleCurrency={(e) => setFromCurrency(e.target.value)}
    />
  </div>

  {/* Swap */}
  <div className="flex justify-center">
    <div
      className="bg-indigo-400 hover:bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-white cursor-pointer shadow-md transition duration-300"
      onClick={handleSwapCurrency}
    >
      <svg width="20" viewBox="0 0 20 19" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.13 11.66H.22a.22.22 0 0 0-.22.22v1.62a.22.22 0 0 0 .22.22h16.45l-3.92 4.94a.22.22 0 0 0 .17.35h1.97c.13 0 .25-.06.33-.16l4.59-5.78a.9.9 0 0 0-.7-1.43zM19.78 5.29H3.34L7.26.35A.22.22 0 0 0 7.09 0H5.12a.22.22 0 0 0-.34.16L.19 5.94a.9.9 0 0 0 .68 1.4H19.78a.22.22 0 0 0 .22-.22V5.51a.22.22 0 0 0-.22-.22z"
          fill="#fff"
        />
      </svg>
    </div>
  </div>

  {/* To */}
  <div className="flex flex-col form-group">
    <label className="block text-sm font-semibold text-gray-700 mb-1">To</label>
    <CurrencySelect
      selectedCurrency={toCurrency}
      handleCurrency={(e) => setToCurrency(e.target.value)}
    />
  </div>
</div>

      <button
        type="submit"
        className={`w-full py-2 rounded-xl text-white font-semibold shadow-md transition-all duration-300 ${
          isLoading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700"
        }`}
      >
        {isLoading ? "Loading..." : "Get Exchange"}
      </button>

      <p className="text-center mt-4 text-gray-700 text-sm font-medium drop-shadow-md">
        {isLoading ? "Getting Exchange Rate..." : result}
      </p>
    </form>
  </div>
</div>

    );
};

export default ConverterForm;
