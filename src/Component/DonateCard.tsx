import { useState } from "react";
import ZelleQR from "../assets/images/Zelle.png";

const PAYPAL_URL = "https://www.paypal.com/ncp/payment/5R6K8LN3LAKQN";
const CASHAPP_TAG = "$outcomeschool";
const CASHAPP_URL = `https://cash.app/${CASHAPP_TAG}`;

export default function DonateCard() {
  const [zelleOpen, setZelleOpen] = useState(false);

  return (
    <div className="mx-auto w-full max-w-[420px] rounded-2xl border border-neutral-200 bg-white p-7">
      <h2 className="mb-7 text-center text-xl font-semibold text-neutral-900">
        Support Free Tech Training
      </h2>

      <p className="mb-2.5 text-[13px] tracking-wide text-neutral-400">
        Choose how to give
      </p>

      <a
        href={PAYPAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2.5 flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-indigo-50 px-4 py-3.5 no-underline"
      >
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#26215C] text-[15px] font-semibold text-white">
          P
        </span>
        <span className="min-w-0 flex-1">
          <p className="m-0 text-[15px] font-semibold text-[#26215C]">
            Donate with various options
          </p>
          <p className="m-0 mt-0.5 text-xs text-[#3C3489]">
            Paypal, Apple Pay, Credit & Debit Card or Venmo
          </p>
        </span>
        <span className="text-neutral-400" aria-hidden="true">
          ↗
        </span>
      </a>

      <a
        href={CASHAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-2.5 flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 no-underline"
      >
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#00C244] text-[15px] font-semibold text-white">
          $
        </span>
        <span className="min-w-0 flex-1">
          <p className="m-0 text-[15px] font-semibold text-neutral-900">
            Donate with Cash App
          </p>
          <p className="m-0 mt-0.5 text-xs text-neutral-500">{CASHAPP_TAG}</p>
        </span>
        <span className="text-neutral-400" aria-hidden="true">
          ↗
        </span>
      </a>

      <button
        type="button"
        onClick={() => setZelleOpen(true)}
        className="flex w-full items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3.5 text-left"
      >
        <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-[#6C1CD3] text-[15px] font-semibold text-white">
          Z
        </span>
        <span className="min-w-0 flex-1">
          <p className="m-0 text-[15px] font-semibold text-neutral-900">
            Donate with Zelle
          </p>
          <p className="m-0 mt-0.5 text-xs text-neutral-500">Show details</p>
        </span>
        <span className="text-neutral-400" aria-hidden="true">
          ⌄
        </span>
      </button>

      {zelleOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-6"
          onClick={() => setZelleOpen(false)}
        >
          <div
            className="w-full max-w-[300px] rounded-xl bg-white p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#6C1CD3] text-white">
              Z
            </span>
            <p className="m-0 mb-1.5 text-[16px] font-semibold text-neutral-900">
              Send via Zelle
            </p>
            <p className="m-0 mb-4 text-[13px] text-neutral-500">
              Scan this code in your banking app to send via Zelle.
            </p>
            <img
              src={ZelleQR}
              alt="Zelle QR code"
              className="mx-auto mb-4 h-40 w-40 rounded-lg border border-neutral-200 object-contain"
            />
            <button
              type="button"
              onClick={() => setZelleOpen(false)}
              className="w-full rounded-lg border border-neutral-200 bg-neutral-900 py-2.5 text-[14px] font-medium text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
