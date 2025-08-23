import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service";

interface CabinParams {
  params: { cabinId: string };
}

export async function GET(request: Request, { params }: CabinParams) {
  const { cabinId } = params;

  try {
    const [cabin, bookDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);
    return Response.json({ cabin, bookDates });
  } catch (e) {
    Response.json({ message: "Cabin not found" }, { status: 404 });
  }
  console.log(request, params);
  return Response.json({ message: "Hello from the API route!" });
}
