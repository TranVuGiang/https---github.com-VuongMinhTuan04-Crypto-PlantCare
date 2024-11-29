import GameContainer from "./components/GameUI/pages/home";

const App = () => {
  return (
    <div className="App">
      <main className="flex justify-center items-center h-screen bg-secondary">
        <GameContainer />
      </main>
    </div>
  );
};

export default App;
