import React from 'react'
import ReactDOM from 'react-dom'
import Pai from './components/Pai'
import Filho from './components/Filho'

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Dilaurentis">
            <Filho nome="Pedro"  />
            <Filho />
            <Filho nome="Carla"/>
        </Pai>
    </div>
, document.getElementById('root'))