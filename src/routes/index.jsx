import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import Projects from "../pages/projects/Projects";
import NotFound from "../components/ui/NotFound";
import EducationInfo from "../pages/About-Me/edu/EducationInfo";
import Intro from "../pages/Intro/Intro";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Intro />} />
      <Route path="home" element={<Home />} />
      <Route
        path="about-me/education/education-info"
        element={<EducationInfo />}
      />
      <Route path="projects" element={<Projects />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

export default router;
