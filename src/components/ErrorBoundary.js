import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // On met à jour l’état afin que le prochain rendu affiche
    // l’UI de remplacement.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher ici n’importe quelle UI de secours
      return <h1>Ça sent le brûlé.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;