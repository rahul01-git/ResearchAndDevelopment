import  { Component } from 'react'
import Header from './components/Header'
import Body from './components/Body'
import './assets/app.css'
export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <Header />
        <Body/>
      </div>
    )
  }
}
