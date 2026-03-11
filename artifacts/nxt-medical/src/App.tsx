import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { HelmetProvider } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import RemoteCarePage from "@/pages/remote-care";
import RPMPage from "@/pages/rpm";
import CCMPage from "@/pages/ccm";
import RTMPage from "@/pages/rtm";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/remote-care" component={RemoteCarePage} />
      <Route path="/rpm" component={RPMPage} />
      <Route path="/ccm" component={CCMPage} />
      <Route path="/rtm" component={RTMPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Header />
            <main>
              <Router />
            </main>
            <Footer />
          </WouterRouter>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
