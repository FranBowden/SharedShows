import React from "react";
import Header from "./Header";
import FormCard from "./FormCard";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-800">
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left side Header*/}
        <div className="md:w-1/2 bg-gradient-to-t from-zinc-900 to-zinc-800 flex items-center justify-center">
          <Header />
        </div>

        {/* Right side Form */}
        <div className="md:w-1/2 flex justify-center items-center p-10">
          <FormCard />
        </div>
      </div>

      <Footer />
    </div>
  );
}
