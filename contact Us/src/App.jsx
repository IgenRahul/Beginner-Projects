import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactHeader from "./components/ContactHeader";
import Navigation from "./components/Navigation/index";
const App = () => {
  return (
    <div>
      <Navigation />
      <main>
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
};

export default App;
