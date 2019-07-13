/*
const id = 'main-title';
const titleName = 'This is title';

const title = <h1 id={id} title={titleName}>My React Element</h1>;
*/

/*
const title = React.createElement(
    'h1',
    {id:'main-title', title: 'this is title'},
    'My First Element'
    );
*/
/*const desc2 = <strong>Description</strong>
const desc = <p className="main-desc">This is a {desc2}</p>;*/
/*
const desc = React.createElement(
    'p',
    null,
    'This is a Description');
*/
//JSX Expression =>  {javascript object}
//JSX 권장사항 () 감싸기
/*const header = (<header>
    {title}
    {desc}
</header>);*/
/*
const header = React.createElement(
    'header',
    null,
    title, desc);
*/

//console.log(title);
/*====================================================================================================================*/
/*
const players = [
    {name: 'SSUN', score: 30, id: 1},
    {name: 'HONG', score: 40, id: 2},
    {name: 'KING', score: 50, id: 3},
    {name: 'PARK', score: 60, id: 4},
];*/
//반드시 앞글자는 대문자 react element를 리턴
const Header = ({title, totalPlayers}) => {
    //console.log(props)
    //객체 해체 할당 es6 분법
    //const {title, totalPlayers, mem1} = props;
    return (
        <header className="header">
            <h1 className="h1">{title}</h1>
            <span className="stats">Players : {totalPlayers}</span>
        </header>
    );
}

//ctrl + alt + l => re formatter
//ctrl + w 해당 블럭 선택
//const Player = (props) => (
const Player = ({name, score, removePlayer, id}) => {
    return (
    <div className="player">
        <span className="player-name">
            <button className="remove-player" onClick={() => removePlayer(id)}>x</button>
            {name}
        </span>
        <Counter score={score}/>
    </div>
)
}

//class component => function component 비해 메모리 사용 증가
class Counter extends React.Component {
    //1. 시간에 따라 변하는 데이타는 state라는 모델로 정의
    //2. state를 변경하는 방법은 setState()밖에 없다.
    //3. setState는 merge(overwriting)
    //4. setState는 비동기로 처리된다.
    //이벤트 우측에는 함수 선언문이 와야 된다. 자바스크립트는 함수를 호출한 결과인점이 다름
    state = {
        score: 0
    }

    /*
    constructor() {
        super();
        this.score = 0;
    }
    */
    //자바스크립트에서 클래스 안에 메소드가 독립적으로 존재할 수 있다.
    //arrow function 안에 쓰이는 this는 lexical this(es6문법)
    changeScore = (delta) => {
        console.log('incrementScore: ', this); //1. bind 2.lexical this(arrow function)
        // this.state.score += 1; //=> 이렇게 하면 안된다. 모델만변경되고 UI는 랜더링이 안됨
        // this.setState({score: this.state.score + delta});
        //이전상태의 상태값을 가지고 처리하여야 한다. 비동기처리이기 때문에
        this.setState(prevState => ({score: prevState.score + delta})); //json객체를 리턴하려면 ()로 감싼다.
    }
    //onClick={() => this.changeScore(-1)} : 함수의 선언문이 와야 하고 파라메타값도 넘겨줘야 하는 조건만족
    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={() => this.changeScore(-1)}> - </button>
                <span className="counter-score">{this.state.score}</span>
                <button className="counter-action increment" onClick={() => this.changeScore(1)} > + </button>
            </div>
        )
    }
}

/* function component
const Counter = (props) => (
    <div className="counter">
        <button className="counter-action decrement"> - </button>
        <span className="counter-score">{props.score}</span>
        <button className="counter-action increment"> + </button>
    </div>
)*/

class App extends React.Component {
    state = {
        players : [
            {name: 'SSUN', score: 30, id: 1},
            {name: 'HONG', score: 40, id: 2},
            {name: 'KING', score: 50, id: 3},
            {name: 'PARK', score: 60, id: 4},
        ]
    }
    //1. 부모에서 삭제하는 callback function을 만든다.
    //2. callback function을 자식에게 props로 넘겨준다.
    //3. 자식에서 props로 받은 callback function을 호출한다.
    render() {
        return (
            <div className="scoreboard">
                <Header title="My Scoreboard" totalPlayers={this.state.players.length}/>
                {
                    this.state.players.map(player =>
                        <Player name={player.name} score={player.score} id={player.id}
                                key={player.id.toString()}
                                removePlayer={this.handleRemovePlayer} />)
                }
            </div>
        )
    }

    handleRemovePlayer = (id) => {
        //자식을 삭제하는 로직을 작성
        console.log(id);
        this.setState(prevState => ({
            players : prevState.players.filter(player => player.id !== id) })
        )
    }
}

//{11} 넘버타입으로 넘김 json으로 만들어서
/*
const App = (props) => (
    <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={props.initialPlayers.length}/>
        {
            props.initialPlayers.map(player =>
                <Player name={player.name} score={player.score} key={player.id.toString()}/>
            )
        }
        {/!*<Player name="SSUN" score={50} />
        <Player name="PARK" score={60} />
        <Player name="HONG" score={70} />
        <Player name="KING" score={80} />*!/}
    </div>
);
*/

//Header function 컴포넌트를 호출한다. 만일 속성이 있다면 속성을 json으로 전달한다.
//name=”ldk” 라면 {name: ‘ldk’} 가 펑션호출시 파라메터로 전달된다.
ReactDOM.render(<App />, document.getElementById('root'));