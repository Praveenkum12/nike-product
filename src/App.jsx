import Nav from './components/Nav';
import CustomerReview from './sections/CustomerReview';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Popular from './sections/Popular';
import Services from './sections/Services';
import SpecialOff from './sections/SpecialOff';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';

function App() {
  return (
    <>
      <Nav />
      <main className="relative">
        <section className="xl:padding-1 wide:padding-r padding-b">
          <Hero />
        </section>
        <section className="padding">
          <Popular />
        </section>
        <section className="padding">
          <SuperQuality />
        </section>
        <section className="padding-x py-10">
          <Services />
        </section>
        <section className="padding">
          <SpecialOff />
        </section>
        <section className="padding bg-pale-blue">
          <CustomerReview />
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe />
        </section>
        <section className="padding-x padding-t pb-8 bg-black text-white">
          <Footer />
        </section>
      </main>
    </>
  );
}

export default App;
