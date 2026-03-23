import fs from "fs";
import path from "path";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Server Component (can handle file loading synchronously or via async imports)
export default async function Home() {
  // Ler o arquivo data.json sync (uma vez no servidor) ou usar import
  const dataPath = path.join(process.cwd(), "data.json");
  const dataString = fs.readFileSync(dataPath, "utf8");
  const data = JSON.parse(dataString);

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Projects data={data} />
      <Contact data={data} />
      <Footer />
    </main>
  );
}
