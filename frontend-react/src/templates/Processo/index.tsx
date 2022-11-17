import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ContentSection } from "../../components/ContentSection";
import { GoBackSetor } from "../../components/GoBackSetor";
import { PopComponent } from "../../components/PopComponent";
import { SectionComponent } from "../../components/SectionComponent";
import { ProcessProps, VideoComponent } from "../../components/VideoComponent";
import config from "../../config";
import * as Styled from "./styles";

export const Processo = () => {
  const [covered, setCovered] = useState(false);
  const [state, setState] = useState("video");
  const [data, setData] = useState(null);
  const params = useParams();
  const { setor, id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const raw = (
        await axios(`${config.url}${config.slugProcess}${setor}/${id}`)
      ).data;
      setData(raw);
    };
    fetchData();
  }, [setor, id]);

  useEffect(() => {
    console.log(covered);
    if (!covered) {
      setState("video");
    } else {
      setState("pop");
    }
  }, [covered]);
  console.log(data);

  if (!data) {
    return <h1>Processo não encontrado</h1>;
  }

  return (
    <Styled.Wrapper>
      <SectionComponent>
        <Styled.MenuOptions>
          <Link to={`/setor/${setor}`}>
            <GoBackSetor />
          </Link>
          <Styled.Label>
            <Styled.Video className="video" covered={covered}>
              Video
            </Styled.Video>
            <Styled.Input
              type="checkbox"
              onChange={(e) => setCovered(!covered)}
            />
            <Styled.Span />
            <Styled.Pop covered={!covered}>POP</Styled.Pop>
          </Styled.Label>
        </Styled.MenuOptions>
        <ContentSection>
          {state === "video" ? (
            <VideoComponent {...(data as ProcessProps)} />
          ) : (
            <PopComponent />
          )}
        </ContentSection>
      </SectionComponent>
    </Styled.Wrapper>
  );
};
