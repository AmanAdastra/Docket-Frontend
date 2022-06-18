import { BrowserRouter,Routes,Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';
import Layout from "./components/Layout/Layout";
import Playground from "./components/pages/Playground/Playground";
import Settings from "./components/pages/Settings/Settings";
import Calendar from "./components/pages/Calendar/Calendar";
import ProgressReport from "./components/pages/ProgressReport/ProgressReport";
import Dashboard from "./components/pages/Dashboard/Dashboard";

function App() {
  return (
    <>
      <CssBaseline />
          <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />} >
              <Route index element={<Dashboard />} />
              <Route path="playground" element={<Playground />} />
              <Route path="progressreport" element={<ProgressReport />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
