import { Component } from 'react'
/**
 * Debug 時使用
 * @see https://zh-hant.reactjs.org/docs/error-boundaries.html
 * @example
 * <ErrorBoundary> --> catch and log error
 *   <Component /> --> something wrong happened
 * </ErrorBoundary>
 */

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新 state 以至於下一個 render 會顯示 fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你也可以把錯誤記錄到一個錯誤回報系統服務
    console.dir(error);
    console.dir(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以 render 任何客製化的 fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;