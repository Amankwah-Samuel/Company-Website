"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState<number>(0);

  function increment (){
setCount((count + 1));
  }
  function decrement (){
setCount((count - 1));
  }
  function reset (){
setCount((0));
  }



  return (
    <main className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Shopping Cart</h1>

          <p className="mt-2 text-gray-500">
            Review your items before payment.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <section className="rounded-2xl bg-white p-6 shadow-sm lg:col-span-2">
            <h2 className="mb-6 text-xl font-semibold">Your Items</h2>

            {/* Item 1 */}
            <div className="flex items-center gap-5 border-b py-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-200">
                <span className="text-3xl">💻</span>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Laptop</h3>

                <p className="mt-1 text-sm text-gray-500">14-inch Laptop</p>

                <p className="mt-2 font-medium">$850</p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button onClick={decrement } className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100">
                  -
                </button>

                <span className="font-medium">{count}</span>

                <button  onClick={increment} className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100" >
                  +
                </button>
              </div>

              <button  onClick={reset} className="ml-4 text-sm text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>

            {/* Item 2 */}
            <div className="flex items-center gap-5 border-b py-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-200">
                <span className="text-3xl">🎧</span>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Headphones</h3>

                <p className="mt-1 text-sm text-gray-500">
                  Wireless Headsets
                </p>

                <p className="mt-2 font-medium">$120</p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button  onClick={decrement }className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100">
                  -
                </button>

                <span className="font-medium">{count}</span>

                <button  onClick={increment} className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100">
                  +
                </button>
              </div>

              <button  onClick={reset} className="ml-4 text-sm text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>

            {/* Item 3 */}
            <div className="flex items-center gap-5 py-5">
              <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gray-200">
                <span className="text-3xl">⌨️</span>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Keyboard</h3>

                <p className="mt-1 text-sm text-gray-500">
                  Standard Keyboard
                </p>

                <p className="mt-2 font-medium">$75</p>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-3">
                <button className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100">
                  -
                </button>

                <span className="font-medium">{count}</span>

                <button className="flex h-8 w-8 items-center justify-center rounded-md border hover:bg-gray-100">
                  +
                </button>
              </div>

              <button className="ml-4 text-sm text-red-500 hover:text-red-700">
                Remove
              </button>
            </div>
          </section>

          {/* Order Summary */}
          <aside className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>$1,165</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$20</span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Tax</span>
                <span>$50</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>$1,235</span>
                </div>
              </div>

              <button className="mt-4 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
                Checkout
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
