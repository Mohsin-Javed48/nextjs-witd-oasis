import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import ReservationReminder from "@/app/_components/ReservationReminder";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

interface PageProps {
  params: { cabinId: string };
}

interface Cabin {
  id: number;
  name: string;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  image: string;
  description: string;
}

// export const metadata = {
//     title: "Cabin".
// }

export async function generateMetadata({ params }: PageProps) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

export async function generateStaticParams() {
  const cabins: Cabin[] = await getCabins(); // <-- plural function
  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  console.log(ids);

  return ids;
}

export const revalidate = 10;

export default async function page({ params }: PageProps) {
  const cabin = await getCabin(params.cabinId);
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;
  console.log(description);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center text-accent-500">
          Reserve {name} today. Pay on arrival.
        </h2>
        <div>
          {" "}
          <Suspense fallback={<Spinner />}>
            <Reservation cabin={cabin} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
