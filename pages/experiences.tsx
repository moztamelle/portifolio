import Experiences from "@/components/experiences/Designs";
import Heading from "@/components/experiences/Heading";
import More from "@/components/experiences/More";
import Page from "components/utility/Page";

function experiencesPage() {
  return (
    <Page
      currentPage="Experiências"
      meta={{ desc: "Experiências profissionais e formação académica de Francisco Tamele - Desenvolvedor Full Stack em Moçambique." }}
    >
      <Heading />
      <Experiences />
      <More />
    </Page>
  );
}

export default experiencesPage;
