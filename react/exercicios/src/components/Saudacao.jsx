import React, {Component} from 'react'

export default class Saudacao extends Component{

    constructor(props){
        super(props)
        this.state={
            tipo: "Fala..",
            nome: "Alfredo"
        }

        this.setNome = this.setNome.bind(this)
        this.setTipo = this.setTipo.bind(this)
    }

    setTipo(e){
        this.setState({tipo: e.target.value})
    }

    setNome(e){
        this.setState({nome: e.target.value})
    }

    render(){
        const {tipo, nome} = this.state

        return (
            <div>
                <h1>{tipo} {nome}!</h1>
                <hr/>
                <input type="text" placeholder="Tipo..." value={tipo} onChange={this.setTipo} />
                <input type="text" placeholder="Nome..." value={nome} onChange={this.setNome}/>
            </div>
        )
    }
}