import { Loader } from "../../Common/Loader";
import { useFetch } from "../../hooks/useFetch";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";

// import Media from "react-media";
export const Prensa = () => {
  const lang = localStorage.getItem("idioma");
  const { data, isLoading } = useFetch("/pagina-de-prensa");

  return (
    <div className="prensa ">
      {isLoading && <Loader />}
      {data !== null && (
        <div className="prensa_container ">
          <div className="flex_item_one">
            <div className="logo">
              <img src="/assets/etapa4/logodesktop.png" alt="logo" />
            </div>

            <div className="title">
              <h1>{lang === "ING" ? <>Blink182 <br /> postponement</> : <>Aplazamiento <br /> Blink182</>}</h1>
            </div>

            <div className="content_banner">
              <img className="sol" src="/assets/etapa4/sol.png" alt="" />
              <img
                className="titan"
                src="/assets/etapa5/newsletter/img_formulario.png"
                alt=""
              />
              <div className="suelo"></div>
            </div>
          </div>

          <div className="flex_item_two">
            {lang === "ING" ? (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="content_info"
              >
                {data.prensa_INFO_INGLES}
              </ReactMarkdown>
            ) : (
              <ReactMarkdown
                rehypePlugins={[rehypeRaw]}
                remarkPlugins={[remarkGfm]}
                className="content_info"
              >
                {data.prensa_INFO}
              </ReactMarkdown>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
