import React from "react";

export const Video = () => {
  return (
    <div className="video">
      <iframe
        id="iframe_home"
        srcDoc="<style>
                    img{object-fit:cover}
                    *{padding:0;margin:0;overflow:hidden}
                    html,body{height:100%;}
                    img,span{position:absolute;width:100vw;height:auto;top:0;bottom:0;margin:auto}
                    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
                    <a href=https://www.youtube.com/embed/PVVtFuazW5M> 
                        <img src=https://festivalestereopicnic.com/portada_video.png>
                        <span>▶</span>
                    </a>"
        src="https://www.youtube.com/embed/PVVtFuazW5M"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        muted
        autoPlay
      ></iframe>
    </div>
  );
};
