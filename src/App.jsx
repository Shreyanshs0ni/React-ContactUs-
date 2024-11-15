import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import Nav from "./components/Nav/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default App;
