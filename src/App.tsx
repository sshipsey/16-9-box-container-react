import { useEffect, useRef, useState } from 'react';
import { backdrop, card, inner, tall, video, wide } from './styles.css';

function App() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((elems) => {
      const { height, width } = elems[0].contentRect;
      if (innerRef.current) {
        setIsWide(width >= height / 0.5625);
      }
    });

    if (cardRef.current) {
      resizeObserver.observe(cardRef.current);
    }
    return () => {
      if (cardRef.current) {
        resizeObserver.unobserve(cardRef.current);
      }
    };
  }, [cardRef, innerRef, isWide]);

  return (
    <>
      <div className={backdrop}>
        <div className={card} ref={cardRef}>
          <div className={`${inner} ${isWide ? wide : tall}`} ref={innerRef}>
            <div className={video}> 16 x 9 Inner Box</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
