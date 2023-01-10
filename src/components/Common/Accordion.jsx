import React from "react";

export const Accordion = ({ type, items }) => {
  const openItem = (itemsToClose, itemSelected) => {
    const items = document.querySelectorAll(`.${itemsToClose}`);
    const item = document.querySelector(`.${itemSelected}`);

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }

    item.classList.add("active");
  };

  return (
    <div className="accordion">
      <div className="accordion-items">
        {items.length > 0 && (
          <>
            {items.map((item, i) => (
              <div
                key={`item-pregunta-${type}-${i}`}
                className={
                  i === 0
                    ? `accodion-item accodion-item-${type} accodion-item-${type}-${
                        i + 1
                      } active`
                    : `accodion-item accodion-item-${type} accodion-item-${type}-${
                        i + 1
                      }`
                }
              >
                <div
                  onClick={() =>
                    openItem(
                      `accodion-item-${type}`,
                      `accodion-item-${type}-${i + 1}`
                    )
                  }
                  className="accordion-item-title"
                >
     
                  {item.pregunta}
                </div>
                <div className="accordion-item-body">{item.respuesta}</div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
