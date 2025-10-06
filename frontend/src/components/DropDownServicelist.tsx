import React from "react";
import { DropdownListProps } from "../../interfaces/DropDownListProp";

export default function DropDownServiceList({ label, id }: DropdownListProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block text-zinc-200 text-sm font-semibold mb-2"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="w-full rounded-xl border border-zinc-600 bg-zinc-800 px-4 py-2 text-zinc-200 shadow-sm focus:border-red-500 focus:ring focus:ring-red-400 focus:ring-opacity-50 transition"
      >
        <option value="">--Select--</option>
        <option value="Netflix">Netflix</option>
        <option value="Amazon Prime">Amazon Prime</option>
        <option value="Disney+">Disney+</option>
      </select>
    </div>
  );
}
