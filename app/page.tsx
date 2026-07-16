import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FeedbackWidget from '../components/FeedbackWidget'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
      <FeedbackWidget />
    </>
  )
}
