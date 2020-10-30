import React,{Component} from 'react';



class MeuComponente extends Component{

    constructor(props){
        super(props);
        
        this.state = {numero: 5}
        this.adicionarNumero = this.adicionarNumero.bind(this)
            console.log('constructor...')
       // this.setState({numero:5})
    
       // this.state.numero =5
    }
    static getDerivedStateFromProps(props,state){
        console.log('getDerivedStateFromProps...');
        // console.log(props)
        // console.log(state)
        // return{numero:6}
        return null
    }

    componentDidMount(){
        console.log('componentDidMount...')
    }

    shouldComponentUpdate(nextProps,nextState){
        console.log('shouldComponentUpdate...')
        console.log('estado atual',this.state)
        console.log('proximo estado',nextState)
        return true
    }

    adicionarNumero(){
        console.log('setState...')
        let numeroAtual = this.state.numero
        numeroAtual+=1
        this.setState({numero:numeroAtual})

    }
    componentDidUpdate(){
        console.log('componentDidUpdate...')
    }


    render(){
        console.log('render')
        return <div>
            <p>Ola eu sou um respeitador de casadas</p>
            <p>{this.props.titulo}</p>
            <p>{this.state.numero}</p>
       
        <button onClick = {this.adicionarNumero}>
            Adicionar Numero
        </button>
       
        </div>
    }


}

export default MeuComponente;