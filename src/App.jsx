import { useState } from "react";
import BottomNav from "./pages/BottomNav";
import Discover from "./pages/Discover";
import Favourites from "./pages/Favourites";
import Events from "./pages/Events";
import Sell from "./pages/Sell";
import Account from "./pages/Account";

function App() {
  const [activePage, setActivePage] = useState("events");

  const renderPage = () => {
    switch (activePage) {
      case "discover":    return <Discover />;
      case "favourites":  return <Favourites />;
      case "events":    return <Events />;
      case "sell":        return <Sell />;
      case "account":   return <Account />;
      default:            return <Events />;
    }
  };

  return (
    <div className="pb-16">
      {renderPage()}
      <BottomNav active={activePage} onChange={setActivePage} />
    </div>
  );
}

export default App;