import React from 'react';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';

function App() {
  return (
   <div>
     <Header></Header>
     <main>
       <About></About>
       <Portfolio></Portfolio>
       
        <ContactForm></ContactForm>
     </main>
    <Footer></Footer>
   </div>
  );
}

export default App;
