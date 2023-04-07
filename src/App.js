import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import Mycars from './components/Mycars';
import Maman from './components/Maman';
import Result from './components/Game';
import Form from './components/Form';
// import LifeCycle from './components/LifeCycle';
// import DerivedState from './components/DerivedState';
import Modal from './components/LesPortails';
import MyRefs from './components/MyRefs';
import Vegeta from './components/Vegeta';
import Goku from './components/Goku';
import ErrorBoundary from './components/ErrorBoundary';
import Menu from './components/Menu';
import RouterOne from './components/RouterOne';
import RouterTwo from './components/RouterTwo';
import RouterThree from './components/RouterThree';
// import ErrorPage from './components/ErrorPage';
import Profile from './components/Profile';
import ClassState from './components/ClassState';
import FctState from './components/FctState';
import Todo from './components/Todo';
import ClassCountUseEffect from './components/ClassCountUseEffect';
import FctCountUseEffect from './components/FctCountUseEffect';
import CleanUseEffect from './components/CleanUseEffect';
import { UserContext }from './components/MyContext';
import MyContextContainer from './components/MyContextContainer';
import FctUseReducer from './components/FctUseReducer';
import MyUseMemo from './components/MyUseMemo';

class App extends Component {

  // State est équivalent à : 
  // constructor() super(props)
  constructor(props) {
    super(props)
  
    this.state = {
      title: 'Liste des voitures disponibles', 
      color: 'green',
      display: true,
      age: 10,
      showModal: false,
      vegeta: 100, 
      goku: 100, 
      bg: '', 
      underConst: {
        First: false,
        Second: false,
        Three: true
      },
      contextUser: {
        name: 'Butcher',
        age: 48
      }
    }
  }

  displayComponent = () => {
    this.setState((prevState) =>({
      display: !prevState.display
    }))
  }

  handleShow = () => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal
    }))
  }

  handleHide = () => {
    this.setState(() => ({
      showModal: false
    }))
  }

  reduceLife = (param, param2) => {
    if(param === 'Goku') {
      this.setState({
        vegeta: this.state.vegeta - param2
      })
    } else {
      this.setState({
        goku: this.state.goku - param2
      })
    }
  }

  render() {
    // const showComponent = this.state.display ? (
    //   <LifeCycle name="Tony 2"/>
    // ) : (<div></div>);

    const modal = this.state.showModal && <Modal hideModal={this.handleHide} />;

    return (
    <div className="App">
      {/* <DerivedState age={this.state.age} /> */}

      {/* Composant permettant de voir le cycle de vie d'un component en console.log */}
      {/* { showComponent } 
      <button onClick={this.displayComponent}>componentWillUnmount LifeCycle</button> */}
      <BrowserRouter>
        <Menu />
        <Switch>
          <Route path='/first' component={RouterOne} />
          <Route path='/second' component={RouterTwo} />
          <Route path="/three" component={RouterThree}/>
          <Route path="/users/:profileId" component={Profile}/>
          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </BrowserRouter>

      <MyUseMemo />
      <FctUseReducer />

      <UserContext.Provider value={this.state.contextUser}>
        <MyContextContainer />
      </UserContext.Provider>
      
      <CleanUseEffect />
      <FctCountUseEffect />
      <ClassCountUseEffect />
      <Todo />
      <FctState />
      <ClassState />

      <div>
        <h2>Les composants d'Ordre Supérieur HOC</h2><hr />
        <h3>Qui est le prince des Saiyans (Cliquer sur l'image)</h3>
        <div className='row'>
          <ErrorBoundary>
            <Vegeta name='Vegeta' life={this.state.vegeta} reduceHandler={this.reduceLife} />
            <Goku name="Goku" life={this.state.goku} reduceHandler={this.reduceLife} />
          </ErrorBoundary>
        </div>
      </div>


      <MyRefs />

      <div className='portal'>
        <button onClick={this.handleShow}>Afficher le Modal</button>
        { modal }
      </div>

      <Form />
      <Result />
      <Maman />
      <Mycars 
        title={this.state.title} 
        color={this.state.color} 
      />
    </div>
  );
  }

}

export default App;
