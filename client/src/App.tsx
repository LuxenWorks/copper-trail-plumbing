import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import WaterHeater from "./pages/WaterHeater";
import DrainCleaning from "./pages/DrainCleaning";
import SlabLeak from "./pages/SlabLeak";
import Repiping from "./pages/Repiping";
import WaterTreatment from "./pages/WaterTreatment";
import Contact from "./pages/Contact";
import About from "./pages/About";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/water-heater" component={WaterHeater} />
      <Route path="/services/drain-cleaning" component={DrainCleaning} />
      <Route path="/services/slab-leak-detection" component={SlabLeak} />
      <Route path="/services/repiping" component={Repiping} />
      <Route path="/services/water-treatment" component={WaterTreatment} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
