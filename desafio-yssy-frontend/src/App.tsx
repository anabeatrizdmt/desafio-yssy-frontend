import ProcessesTable from "./components/ProcessesTable";
import useWebSocket from "./connection/useWebSocket";


const App: React.FC = () => {
  const processesInfo = useWebSocket('ws://localhost:3001');
  return <ProcessesTable processInfo={processesInfo} />;
}

export default App;
