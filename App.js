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
  state = {
    time: this.getTime(),
    circels: this.clockAnimation(),
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
    const circels = this.clockAnimation();
    this.setState({ time });
    this.setState({ circels });
  }

  clockAnimation() {
    const currentTime = new Date();
    let hh = currentTime.getHours() * 30;
    let mm = currentTime.getMinutes() * 6;
    let ss = currentTime.getSeconds() * 6;
    return {
      hr: { transform: `rotateZ(${hh + mm / 12}deg)` },
      mn: { transform: `rotateZ(${mm}deg)` },
      sc: { transform: `rotateZ(${ss}deg)` },
    };
  }

  componentDidMount() {
    this.interval = setInterval(this.setTime.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { hours, minutes, seconds } = this.state.time;
    const { hr, mn, sc } = this.state.circels;
    return (
      <div class="clock">
        <div class="clock-animation">
          <div class="numbers">
            <span class="twelve">
              <b>12</b>
            </span>
            <span class="three">
              <b>3</b>
            </span>
            <span class="six">
              <b>6</b>
            </span>
            <span class="nine">
              <b>9</b>
            </span>
            <div style={hr} class="circle" id="hr">
              <i></i>
            </div>
            <div style={mn} class="circle" id="mn">
              <i></i>
            </div>
            <div style={sc} class="circle" id="sc">
              <i></i>
            </div>
          </div>
        </div>
        <div class="time">
          {hours > 9 ? hours : `0${hours}`} :
          {minutes > 9 ? minutes : `0${minutes}`} :
          {seconds > 9 ? seconds : `0${seconds}`}
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
