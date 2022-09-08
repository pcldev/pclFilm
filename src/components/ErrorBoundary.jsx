import { Component } from "react";
import Error from "../pages/Error/Error";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // Gửi thông tin error lên server để dev nhận thông tin fix bug
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <Error />;
    }
    return this.props.children;
  }
}
// test

export default ErrorBoundary;
