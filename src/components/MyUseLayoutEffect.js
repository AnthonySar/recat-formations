import React, { useState, useLayoutEffect, useRef, useEffect } from "react";

const MyUseLayoutEffect = () => {
  const [height, setHeight] = useState(100);
  const [width, setWidth] = useState(300);
  const divRef = useRef(null);
  const timeRef = useRef(0);

  useLayoutEffect(() => {
    if (divRef.current.offsetHeight < 150) {
      setHeight(height + 100)

      console.log(`Attente avec useLayoutEffect: ${performance.now() - timeRef.current}`)
    }
  }, [height])

  useEffect(() => {
    if (divRef.current.offsetWidth < 350) {
      setWidth(width + 100)

    console.log(`Attente avec useEffect: ${performance.now() - timeRef.current}`)
    }
  }, [width])

  timeRef.current = performance.now();

  const style = {
    width: `${width}px`,
    height: `${height}px`,
    margin: '0 auto',
    backgroundColor: height > 100 ? 'lightblue' : 'lightgreen'
  };

  return (
    <div className="container-cs">
    <div style={style} ref={divRef}>
      <h2>HOOKS : useLayoutEffect</h2>
      <p>Perfomance de rendu avec useLayoutEffect pour la height & la width</p>
      <hr />
      <p>Résultat en console</p>
    </div>
    <div>
      <p><strong>Résultat : </strong>Ce qu'on à chercher à mésurer ici c'est le temps d'affichage de l'élément, on se rend compte que le <strong>useLayoutEffect</strong> peut être utile pour corriger des bugs d'affichage d'un élément par exemple</p>
      <p className="m-0">Dans ette exemple, on ne voit pas le changement de couleur apporté à la div si la hauteur est inférieur ou supp à X.
        Par contre, on aperçoit le changement de width avec le useEffect
      </p>
      </div>
    </div>
  )
}

export default MyUseLayoutEffect;