import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster /> {/* 🔥 এটা must */}
      <YourRoutesOrComponents />
    </div>
  );
}

export default App;