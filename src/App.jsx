import Card from "./components/Card";
import norway from "./assets/norway.webp";
import kayaker from "./assets/kayaker.webp";
import parkrun from "./assets/parkrun.webp";

function App() {
  return (
    <main className="m-4 grid gap-12 bg-slate-100 xl:grid-cols-2">
      <Card
        img={norway}
        title={
          "Nærøyfjorden, Norway - from Breiskrednosi. UNESCO World Heritage"
        }
      />
      <Card img={kayaker} title={"Kayaker at Ekstremsportveko 2010, Voss"} />
      <Card img={parkrun} title={"Frame 10 of the Parkrun sequence"} />
    </main>
  );
}

export default App;
