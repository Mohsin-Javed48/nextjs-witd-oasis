import React from "react";
import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}

interface filterProp {
  filter: string | string[] | undefined;
}

export default async function CabinList({ filter }: filterProp) {
  const cabins: Cabin[] = await getCabins();

  if (!cabins || cabins.length === 0) {
    return <div>No cabins available</div>;
  }

  let displayedCabins: Cabin[] = [];
  if (filter === "all") {
    displayedCabins = cabins;
  } else if (filter === "small") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  } else if (filter === "medium") {
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity < 10
    );
  } else if (filter === "large") {
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 10);
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
