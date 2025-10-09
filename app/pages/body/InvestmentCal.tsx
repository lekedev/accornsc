// src/components/InvestmentCalculator.tsx
"use client";

import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Share2 } from "lucide-react";
import Image from "next/image";

export default function InvestmentCalculator() {
  const [initialDeposit, setInitialDeposit] = useState(100);
  const [contribution, setContribution] = useState(20);
  const [frequency, setFrequency] = useState("weekly");
  const [years, setYears] = useState(20);
  const [annualReturn, setAnnualReturn] = useState(8);
  const [futureBalance, setFutureBalance] = useState<string>("0");

  type ChartData = {
    year: number;
    contributions: number;
    growth: number;
    balance: number;
  };
  const [chartData, setChartData] = useState<ChartData[]>([]);

  const calculate = () => {
    let n = 1;
    if (frequency === "monthly") n = 12;
    if (frequency === "weekly") n = 52;
    if (frequency === "daily") n = 365;

    const r = annualReturn / 100 / n;
    let balance = initialDeposit;
    let totalContributions = initialDeposit;

    const data = [
      { year: 0, contributions: totalContributions, growth: 0, balance },
    ];

    for (let year = 1; year <= years; year++) {
      for (let i = 0; i < n; i++) {
        balance = balance * (1 + r) + contribution;
        totalContributions += contribution;
      }
      const growth = balance - totalContributions;
      data.push({
        year,
        contributions: totalContributions,
        growth,
        balance,
      });
    }

    setFutureBalance(balance.toFixed(0));
    setChartData(data);
  };

  useEffect(() => {
    calculate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShare = async () => {
    const message = `My estimated future balance after ${years} years is $${futureBalance}! 📈`;
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Investment Calculator Result",
          text: message,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Share cancelled:", err);
      }
    } else {
      alert("Sharing is not supported on this device.");
    }
  };

  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-5">
      {/* Inputs (40%) */}
      <div className="p-8 space-y-6 md:col-span-2 shadow-lg">
        {/* Initial Deposit */}
        <div>
          <label className="block tracking-widest font-medium text-2xl text-center text-green-600">
            INITIAL DEPOSIT
          </label>
          <div className="flex justify-center">
            <input
              type="number"
              value={initialDeposit}
              onChange={(e) => setInitialDeposit(Number(e.target.value))}
              className="p-2 bg-white rounded-4xl mt-1"
            />
          </div>
        </div>

        {/* Contributions */}
        <div>
          <label className="block text-center tracking-widest font-3xl text-2xl text-green-600">
            CONTRIBUTIONS
          </label>
          <div className="flex justify-center">
            <input
              type="number"
              value={contribution}
              onChange={(e) => setContribution(Number(e.target.value))}
              className="bg-white p-2 rounded-4xl mt-1"
            />
          </div>
          <div className="flex gap-2 mt-2">
            {["annual", "monthly", "weekly", "daily"].map((freq) => (
              <label key={freq} className="flex items-center gap-1 capitalize">
                <input
                  type="radio"
                  checked={frequency === freq}
                  onChange={() => setFrequency(freq)}
                />
                {freq}
              </label>
            ))}
          </div>
        </div>

        {/* Years to Grow */}
        <div>
          <label className="block text-center tracking-wider text-2xl font-normal text-green-600">
            Years to Grow
          </label>
          <div className="flex justify-center">
            <input
              type="number"
              value={years}
              readOnly
              className="p-2 rounded-4xl mt-1 bg-white"
            />
          </div>

          <div className="relative mt-4">
            <input
              type="range"
              min="1"
              max="50"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-600"
            />
            {/* Acorn image on thumb */}
            <div
              className="absolute top-[-20px] w-6 h-6"
              style={{
                left: `calc(${(years / 50) * 100}% - 12px)`,
              }}
            >
              <Image
                src="/acorn.png"
                alt="Acorn"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>

        {/* Annual Return */}
        <div>
          <label className="block text-center tracking-wider text-sm font-medium text-gray-700">
            AVERAGE ANNUAL RETURN
          </label>
          <div className="flex justify-center">
            <input
              type="number"
              value={annualReturn}
              onChange={(e) => setAnnualReturn(Number(e.target.value))}
              className="p-2 rounded-4xl mt-1"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculate}
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Calculate my estimate
        </button>
      </div>

      {/* Chart + Result (60%) */}
      <div className="md:col-span-3 flex flex-col justify-center items-center p-8 bg-gray-50">
        <h3 className="text-lg text-gray-600">Potential Future Balance</h3>
        <p className="text-5xl font-bold text-green-600 mt-2">
          ${futureBalance}
        </p>

        {/* Chart */}
        <div className="w-full h-[65%] mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip formatter={(val) => `$${Number(val).toFixed(0)}`} />
              <Legend />
              <Area
                type="monotone"
                dataKey="contributions"
                stackId="1"
                stroke="#4ade80"
                fill="#4ade80"
              />
              <Area
                type="monotone"
                dataKey="growth"
                stackId="1"
                stroke="#16a34a"
                fill="#16a34a"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="mt-6 flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          <Share2 size={18} /> Share Result
        </button>

        {/* Disclaimer */}
        <p className="mt-4 text-xs text-gray-500 max-w-2xl text-center">
          The chart shows an estimate of how much an investment could grow over
          time based on the initial deposit, contribution schedule, time
          horizon, and interest rate specified. Changes in those variables can
          affect the outcome. Reset the calculator using different figures to
          show different scenarios. Results do not predict the investment
          performance of any portfolio and do not take into consideration
          economic or market factors which can impact performance.
        </p>
      </div>
    </div>
  );
}
