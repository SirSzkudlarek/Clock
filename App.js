class App extends React.Component {
  state = {
    active: true,
  };

  handleClick() {
    this.setState((state) => ({ active: !state.active }));
  }

  render() {
    return (
      <div class="main-wrapper">
        <div class="time-wrapper">
          <h1>{this.state.active ? <Clock /> : `Time`}</h1>
          <SwitchButton
            active={this.state.active}
            click={this.handleClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const SwitchButton = (props) => (
  <button onClick={props.click}>{props.active ? `Hide` : `Show`} time</button>
);

class Clock extends React.Component {
  const;

  state = {
    time: this.getTime(),
  };

  getTime() {
    const currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      minutes: currentTime.getMinutes(),
      seconds: currentTime.getSeconds(),
    };
  }

  setTime() {
    const time = this.getTime();
    this.setState({ time });
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    return (
      <div>
        {hours > 9 ? hours : `0${hours}`} :
        {minutes > 9 ? minutes : `0${minutes}`} :
        {seconds > 9 ? seconds : `0${seconds}`}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
