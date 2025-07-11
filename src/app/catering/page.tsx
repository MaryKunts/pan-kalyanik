import { CateringAdvantagesSection } from "./components/cateringAdvantagesSection";
import { CateringImagesSection } from "./components/cateringImagesSection";
import { CateringMainSection } from "./components/cateringMainSection";
import { CateringStepsSection } from "./components/cateringStepsSection";
import { CateringTerms } from "./components/cateringTerms";

export default function CateringPage() {
  return (
    <>
      <CateringMainSection />
      <CateringAdvantagesSection />
      <CateringTerms />
      <CateringStepsSection />
      <CateringImagesSection />
    </>
  );
}
