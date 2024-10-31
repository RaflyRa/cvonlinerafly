
import Hero from "./components/hero";
import RowRiwayatPekerjaan from "./components/riwayatpekerjaan";
import RowRiwayatPendidikan from "./components/riwayatpendidikan";
import Skill from "./components/skill";
import "./style.css";





export default function CVonline() {
  return (
    <section>
      <Hero/>
      <RowRiwayatPekerjaan/>
      <RowRiwayatPendidikan/>
      <Skill/>
    </section>
  );
}