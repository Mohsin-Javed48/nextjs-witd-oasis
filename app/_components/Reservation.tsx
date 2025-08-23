import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

export default async function page() {
  const [settings, bookingDates] = await Promise.all([
    (getCabin(), getBookedDatesByCabinId(params.cabinId)),
  ]);
  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px] mt-5">
      <DateSelector />
      <ReservationForm />
    </div>
  );
}
