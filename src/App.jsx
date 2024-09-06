import './App.css'
import ClassComp from './components/ClassComp'
import Counter from './components/Counter'
import Feedback from './components/Feedback'
import FormRoutes from './components/FormRoutes'
import HideShow from './components/HideShow'
import Prop from './components/Prop'
import State from './components/State'
import Form from './Form'
import FormNav from './partials/FormNav'

function App() {
  let myData = {
    myName: "trigon",
    myId: "1212",   
    myEmail: "trigon@gmail.com"      
  }
  return (
    <>
      {/* <State/> */}
      
      {/* <Prop user={myData} />         */}
      
      {/* <ClassComp user={myData}/> */}
    
      {/* <Counter/> */}

      {/* <Form/> */}

      {/* <HideShow/> */}

      {/* <Feedback/> */}

      <FormRoutes/>
    </>
  )
}

export default App
