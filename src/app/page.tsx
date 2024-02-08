import Navbar from "@/components/nav";
import CalendarSection from "@/components/cal";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-white w-72 p-4 m-2">
        <CalendarSection />
      </section>
    </>
  )
}
