import axios from "axios";
import { Component } from "react";

const MiniTask = (props) => {
  return <p>This is a mini task.</p>;
};

class Task extends Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  async componentDidMount() {
    try {
      const data = await axios({
        url: "https://jsonplaceholder.typicode.com/todos",
        method: "get",
      });

      this.setState({ todos: data.data });
    } catch (error) {
      console.log(error);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props === nextProps && this.state === nextState) {
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    this.setState({ todos: [] });
  }

  generateTodo(todoArr) {
    return todoArr.map((el, i) => {
      return (
        <div key={i}>
          <p>{el.title}</p>
        </div>
      );
    });
  }

  render() {
    return <div>{this.generateTodo(this.state.todos)}</div>;
  }
}

export default Task;
