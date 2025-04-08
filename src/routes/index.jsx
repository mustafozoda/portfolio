import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Projects from "../pages/projects/Projects";
import NotFound from "../components/ui/NotFound";
import Bio from "../pages/about/bio/Bio";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<Bio />} />
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
