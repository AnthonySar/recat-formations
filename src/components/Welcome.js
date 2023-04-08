const Welcome = () => {

  const bjr = () => {
    console.log('bjr')
  };

  const bsr = (arg) => {
    console.log(arg)
  }

  return (
    <div>
      <button className="btn btn-primary m-2" onClick={bjr}>Call fct</button>

      <button className="btn btn-info m-2" onClick={() => bsr('bsr')}>Call fct avec argument</button>

      <button className="btn btn-danger m-2" onClick={() => console.log('bn')}>Clg sur le btn</button>
    </div>
  )
}

export default Welcome;
