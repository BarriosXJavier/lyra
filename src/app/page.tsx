import Navbar from "@/components/nav"
import ClockSection from "@/components/sidesection/clock"
import CalendarSection from "@/components/sidesection/cal"
export default function Home() {
  return (
    <>
      <Navbar />
      <section>
        <ClockSection />
        <CalendarSection />
      </section>
    </>
  )
}
