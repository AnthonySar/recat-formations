const Welcome = () => {

  const bjr = () => {
    console.log('bjr')
  };

  const bsr = (arg) => {
    console.log(arg)
  }

  return (
    <div>
      <button onClick={bjr}>Call fct</button>

      <button onClick={() => bsr('bsr')}>Call fct avec argument</button>

      <button onClick={() => console.log('bn')}>Clg sur le btn</button>
    </div>
  )
}

export default Welcome;
