import JokeGenerator from "@/components/JokeGenerator"; // Server Component
import StepCounter from "@/components/StepCounter"; // Client Component
import ImageUploader from "@/components/ImageUploader"; // Client Component
import TaskProgress from "@/components/TaskProgress"; // Client Component
import CountryInfo from "@/components/CountryInfo"; // Server Component
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import ServerTime from "@/components/ServerTime";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import UserInput from "@/components/UserInput";
import LiveClock from "@/components/LiveClock";
import ImageGallery from "@/components/ImageGallery";
import FAQAccordian from "@/components/FAQAccordian";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-6 p-6">

      <Header />
      <br />
      <ThemeSwitcher />
      <br />
      <ServerTime />
      <br />
      <AboutUs />
      {/* <br /> */}
      {/* <UserInput /> */}
      <LiveClock />
      <br />
      <ImageGallery />
      <br />
      <FAQAccordian />
      <br />
      <Footer />















      {/* Random Joke Display */}
      <JokeGenerator />
      <br />

      {/* Step Counter for Fitness */}
      <StepCounter />
      <br />

      {/* Image Upload and Preview */}
      <ImageUploader />
      <br />

      {/* Task Progress Tracker */}
      <TaskProgress />
      <br />

      {/* Country Info (Static Example for USA) */}
      <CountryInfo country="India" />
      <br />
    </div>
  );
}
