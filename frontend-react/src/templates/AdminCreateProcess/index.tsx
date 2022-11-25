import { Link, useParams } from "react-router-dom";
import { Upload } from "@styled-icons/bootstrap/Upload";

import * as Styled from "./styles";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import { GoBackSetor } from "../../components/GoBackSetor";
import { useState } from "react";
import { Editor } from "../../components/Editor";
import { ProcessOptionsContainer } from "../../components/ProcessOptionsContainer";

const config = {
  readonly: false,
  height: 300,
  placeholder: "Olá mundo",
  style: {
    font: "16px Roboto",
  },
  tabIndex: 1,
  toolbarAdaptive: true,
  toolbarButtonSize: "middle",
  toolbarInline: true,
  removeButtons: [
    "strikethrough",
    "eraser",
    "font",
    "fontsize",
    "classSpan",
    "lineHeight",
    "superscript",
    "subscript",
    "file",
    "image",
    "video",
    "cut",
    "copy",
    "paste",
    "selectall",
    "copyformat",
    "table",
    "link",
    "symbols",
    "indent",
    "outdent",
    "left",
    "brush",
    "find",
    "source",
    "print",
    "about",
  ],
};

export const AdminCreateProcess = () => {
  const params = useParams();
  const [content, setContent] = useState("");

  return (
    <Styled.Wrapper>
      <SectionComponent>
        <Styled.MainContainer>
          <Link to={`/admin/setor/${params.setor}`}>
            <GoBackSetor />
          </Link>
          <TitleComponent title="Novo Upload" />
          <Styled.ButtonAdd>
            <Upload size={16} />
            Enviar
          </Styled.ButtonAdd>
        </Styled.MainContainer>
        <Styled.ContainerAdd>
          <Styled.ContainerDescription>
            <Styled.LabelRequired>Título</Styled.LabelRequired>
            <Styled.Input />
            <Styled.Label>Conteúdo</Styled.Label>
            <Styled.Editor>
              <Editor
                content={content}
                setContent={setContent}
                config={config}
              />
            </Styled.Editor>
          </Styled.ContainerDescription>
          <Styled.ContainerOptions>
            <ProcessOptionsContainer>
              <Styled.OptionTitle>Visibilidade</Styled.OptionTitle>
              <div>
                <Styled.OptionInputRadio
                  type="radio"
                  name="visibility"
                  value="Visível"
                  id="visible"
                  checked
                />
                <Styled.OptionLabel htmlFor="visible">
                  Visivel
                </Styled.OptionLabel>
              </div>
              <div>
                <Styled.OptionInputRadio
                  type="radio"
                  name="visibility"
                  value="Oculto"
                  id="ocult"
                />
                <Styled.OptionLabel htmlFor="ocult">Oculto</Styled.OptionLabel>
              </div>
            </ProcessOptionsContainer>
          </Styled.ContainerOptions>
        </Styled.ContainerAdd>
      </SectionComponent>
    </Styled.Wrapper>
  );
};
