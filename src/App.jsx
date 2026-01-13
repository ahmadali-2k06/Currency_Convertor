import { useState } from "react";
import CurrencyBox from "./Components/CurrencyBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import "./App.css";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const currencyInfo = useCurrencyInfo(from);
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div className="bg-gradient-mesh flex flex-col items-center justify-center p-2 md:p-4 min-h-screen relative overflow-hidden">
      <div className="fixed bottom-0 left-0 w-full pointer-events-none z-0">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl transform translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transform translate-y-1/2 translate-x-1/2"></div>
      </div>

      <div className="glass-panel w-full max-w-125 rounded-2xl p-1 z-10 relative mx-auto">
        <div className="p-4 md:p-8 flex flex-col gap-4 md:gap-6">
          <div className="text-center pb-2">
            <h1 className="text-xl md:text-3xl font-bold text-[#111318] mb-1 md:mb-2">
              Currency Convertor
            </h1>
            <p className="text-[#616f89] text-xs md:text-sm">
              Check live foreign currency rates.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
            className="relative flex flex-col gap-2"
          >
            <div className="relative z-30">
              <CurrencyBox
                label="Amount"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectedCurrency={from}
                onAmountChange={(amount) => setAmount(amount)}
              />
            </div>

            <div className="absolute left-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
              <button
                type="button"
                className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-[#135bec] shadow-lg border border-gray-100 hover:scale-110 hover:shadow-xl hover:rotate-180 transition-all duration-300 cursor-pointer"
                onClick={swap}
              >
                <span className="material-symbols-outlined text-xl md:text-2xl">
                  swap_vert
                </span>
              </button>
            </div>

            <div className="relative z-20">
              <CurrencyBox
                label="Converted To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectedCurrency={to}
                amountDisable
              />
            </div>

            <div className="flex items-center justify-between px-1 md:px-2 py-2 md:py-3">
              <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-[#111318] bg-white/40 px-3 py-1.5 rounded-full border border-white/50 w-full md:w-auto justify-center md:justify-start">
                <div className="size-5 md:size-6 rounded-full bg-[#135bec]/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#135bec] text-xs md:text-sm">
                    trending_up
                  </span>
                </div>
                <span className="text-[#135bec] font-bold">
                  1 {from.toUpperCase()} = {(currencyInfo[to] || 0).toFixed(4)}{" "}
                  {to.toUpperCase()}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full h-12 md:h-14 bg-[#135bec] hover:bg-blue-700 text-white rounded-xl font-bold text-sm md:text-lg shadow-glow hover:shadow-lg hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
              <span className="material-symbols-outlined text-lg md:text-2xl">
                arrow_forward
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
