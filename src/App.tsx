import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Community from "./pages/Community";
import Learning from "./pages/Learning";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/team" element={<Team />} />
          <Route path="/community" element={<Community />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/learning" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Learning Hub - Coming Soon</h1></div>} />
          <Route path="/membership" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Membership - Coming Soon</h1></div>} />
          <Route path="/community" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Community - Coming Soon</h1></div>} />
          <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center"><h1 className="text-4xl">Contact - Coming Soon</h1></div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;