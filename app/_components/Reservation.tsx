import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import {
  getBookedDatesByCabinId,
  getCabin,
  getSettings,
} from "@/app/_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}

interface CabinProp {
  cabin: Cabin;
}

export default async function page({ cabin }: CabinProp) {
  const [settings, bookedDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);
  console.log(settings);
  console.log(cabin);

  const session = await auth();

  return (
    <div className="grid grid-cols-2 border border-primary-800 min-h-[400px] mt-5">
      <DateSelector
        settings={settings}
        bookedDates={bookedDates}
        cabin={cabin}
      />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
