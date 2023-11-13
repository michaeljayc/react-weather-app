import Form from "./components/Form";
import Weather from "./components/Weather";
import Navbar from "./components/Navbar";

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
