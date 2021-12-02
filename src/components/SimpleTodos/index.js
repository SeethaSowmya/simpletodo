

import {Component} from 'react'
import TodoItem from "../TodoItem/index"

import './index.css'
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

class SimpleTodos extends Component {
    state={
        filterList:initialTodosList,
    }

    deleteTodo=(id)=>{
    const {filterList}=this.state
    const update=filterList.filter(each=>each.id!==id)                                                                                                                                                                                                                        )
    this.setState({filterList:update,})
    }

  render() {
      const{filterList}=this.state
    return(
    <div className="bg">
       <div className="bg2">
       <h1>Simple Todos</h1>
        <ul> 
            {filterList.map(each=>(
                <TodoItem
                    key={each.id}
                    list={each}
                    deleteTodo={this.deleteTodo}
                />))}
        </ul> 
       </div>
    </div>
  )
}
}

export default SimpleTodos;
