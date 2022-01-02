import { useDrag, useDrop } from "react-dnd";

export function useDragAndDrop(ref, payload, type) {
  const [{ isDragging }, drag] = useDrag(() => ({
    item: { ...payload },
    type: type,
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const [, drop] = useDrop({
    accept: type,
    hover: payload.hover,
    drop: payload.drop,
  });

  drag(drop(ref));

  return {
    isDragging,
  };
}
