import Form from "./assets/components/Form";
import Weather from "./assets/components/Weather";
import Navbar from "./assets/components/Navbar";

const App = () => {
  return (
    <main>
      <Navbar />
      <section className="weather-container">
        <Form />
        {/* <hr /> */}
        <Weather />
      </section>
    </main>
  );
};

export default App;
