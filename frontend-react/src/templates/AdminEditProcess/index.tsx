import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Upload } from "@styled-icons/bootstrap/Upload";

import * as Styled from "./styles";
import configUrl from "../../config/index";
import { config as editorConfig } from "../../config/editor";

import { GoBackSetor } from "../../components/GoBackSetor";
import { SectionComponent } from "../../components/SectionComponent";
import { TitleComponent } from "../../components/TitleComponent";
import { ProcessOptionsContainer } from "../../components/ProcessOptionsContainer";
import { Editor } from "../../components/Editor";
import config from "../../config/index";

export type AdmninEditProcessProps = {
  title?: string;
};

export const AdmninEditProcess = ({ title }: AdmninEditProcessProps) => {
  const params = useParams();
  const [data, setData] = useState<any>(null);
  const [video, setVideo] = useState();
  const [documento, setDocumento] = useState();
  const [content, setContent] = useState("");
  const [titulo, setTitulo] = useState("");
  const [checked, setChecked] = useState(true);
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetData = async () => {
      try {
        const data = await (
          await axios(
            `${config.url}${config.slugProcess}${params.setor}/${params.id}`,
          )
        ).data;
        setContent(data.descricao[0]);
        setTitulo(data.titulo);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetData();
  }, [params.id, params.setor]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (titulo.length === 0 || author.length === 0)
      return alert("Título ou autor não podem ser vazios");

    const token = localStorage.getItem("token");
    const configHeaders = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };

    const data = {
      titulo: formData.get("titulo"),
      author: formData.get("author"),
      video: formData.get("video"),
      file: formData.get("file"),
      tipo: "processo",
      setor: params.setor,
      ativo: checked,
      descricao: content,
    };

    try {
      await axios.put(
        `${configUrl.url}${configUrl.slugProcess}${params.id}`,
        data,
        configHeaders,
      );
      alert("Processo atualizado com sucesso");
    } catch (e) {
      console.log(e);
      alert(`Algo saiu errado`);
    }
  };

  if (!data) {
    return (
      <SectionComponent>
        <h1>Erro</h1>
      </SectionComponent>
    );
  }

  return (
    <Styled.Wrapper
      onSubmit={handleSubmit}
      action="#"
      encType="multipart/form-data"
    >
      <SectionComponent>
        <Styled.MainContainer>
          <Link to={`/admin/setor/${params.setor}`}>
            <GoBackSetor />
          </Link>
          <TitleComponent title="Editar processo" />
          <Styled.ButtonAdd type="submit">
            <Upload size={16} />
            Enviar
          </Styled.ButtonAdd>
        </Styled.MainContainer>
        <Styled.ContainerAdd>
          <Styled.ContainerDescription>
            <Styled.LabelRequired>Título</Styled.LabelRequired>
            <Styled.Input
              type="text"
              name="titulo"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            <Styled.Label>Conteúdo</Styled.Label>
            <Styled.Editor>
              <Editor
                content={content}
                setContent={setContent}
                config={editorConfig}
              />
            </Styled.Editor>
          </Styled.ContainerDescription>
          <Styled.ContainerOptions>
            <ProcessOptionsContainer>
              <Styled.OptionTitle>Visibilidade</Styled.OptionTitle>
              {data.ativo ? (
                <div>
                  <Styled.OptionInputRadio
                    type="radio"
                    name="visibility"
                    id="visible"
                    defaultChecked
                    onClick={() => setChecked(true)}
                  />
                  <Styled.OptionLabel htmlFor="visible">
                    Visivel
                  </Styled.OptionLabel>
                </div>
              ) : (
                <div>
                  <Styled.OptionInputRadio
                    type="radio"
                    name="visibility"
                    id="visible"
                    onClick={() => setChecked(true)}
                  />
                  <Styled.OptionLabel htmlFor="visible">
                    Visivel
                  </Styled.OptionLabel>
                </div>
              )}

              {data.ativo ? (
                <div>
                  <Styled.OptionInputRadio
                    type="radio"
                    name="visibility"
                    value="Oculto"
                    id="ocult"
                    onClick={() => setChecked(false)}
                  />
                  <Styled.OptionLabel htmlFor="ocult">
                    Oculto
                  </Styled.OptionLabel>
                </div>
              ) : (
                <div>
                  <Styled.OptionInputRadio
                    type="radio"
                    name="visibility"
                    value="Oculto"
                    id="ocult"
                    defaultChecked
                    onClick={() => setChecked(false)}
                  />
                  <Styled.OptionLabel htmlFor="ocult">
                    Oculto
                  </Styled.OptionLabel>
                </div>
              )}
            </ProcessOptionsContainer>

            <ProcessOptionsContainer>
              <Styled.OptionTitle>Vídeo</Styled.OptionTitle>
              <Styled.LabelFile htmlFor="archiveVideo">
                <Upload size={15} />
                {video ? "Selecionado" : "Enviar Vídeo"}
              </Styled.LabelFile>
              <Styled.InputArchive
                type="file"
                id="archiveVideo"
                name="video"
                onChange={(e: any) => {
                  if (e.target.files.length > 0) setVideo(e.target.files[0]);
                }}
              />
            </ProcessOptionsContainer>
            <ProcessOptionsContainer>
              <Styled.OptionTitle>Documento</Styled.OptionTitle>
              <Styled.LabelFile htmlFor="archiveDocument">
                <Upload size={15} />
                {documento ? "Selecionado" : "Enviar Documento"}
              </Styled.LabelFile>
              <Styled.InputArchive
                type="file"
                id="archiveDocument"
                name="file"
                onChange={(e: any) => {
                  if (e.target.files.length > 0)
                    setDocumento(e.target.files[0]);
                }}
              />
            </ProcessOptionsContainer>
            <ProcessOptionsContainer>
              <Styled.OptionTitle>Author</Styled.OptionTitle>
              <Styled.InputOptions
                name="author"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
              />
            </ProcessOptionsContainer>
          </Styled.ContainerOptions>
        </Styled.ContainerAdd>
      </SectionComponent>
    </Styled.Wrapper>
  );
};
