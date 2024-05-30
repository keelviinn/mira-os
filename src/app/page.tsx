import Diagnostic from "@/components/Diagnostic/Diagnostics";
import OrderDetails from "@/components/OrderDetails/OrderDetails";

export default async function Home() {
  const response = await fetch("http://localhost:8080/data");
  const data = await response.json();

  return (
    <main>
      <div className="mt-6 lg:max-w-5xl md:max-w-3xl sm:max-w-xl mx-auto px-4 w-full space-y-6">
        <OrderDetails />

        <Diagnostic data={data} />
      </div>
    </main>
  );
}
