import { useId } from "react";

function CurrencyBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div className={`group relative rounded-xl glass-input p-4 ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <label 
          htmlFor={amountInputId} 
          className="text-[#616f89] text-xs font-bold tracking-wider uppercase"
        >
          {label}
        </label>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <input
            id={amountInputId}
            className="w-full bg-transparent border-none p-0 text-3xl font-extrabold text-[#111318] focus:ring-0 placeholder:text-gray-300 outline-none"
            placeholder="0"
            type="number"
            disabled={amountDisable}
            value={amount}
            onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        </div>

        <div className="relative">
          <div className="flex items-center gap-2 bg-white hover:bg-gray-50 py-2 pl-2 pr-3 rounded-full shadow-sm border border-gray-200 transition-all">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-bold overflow-hidden uppercase">
                {selectedCurrency.slice(0, 2)}
            </div>
            
            <select
              className="custom-select uppercase w-16"
              value={selectedCurrency}
              onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              disabled={currencyDisable}
            >
              {currencyOptions.map((currency) => (
                <option key={currency} value={currency}>
                  {currency.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrencyBox;