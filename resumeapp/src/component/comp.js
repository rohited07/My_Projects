import React,{ Component } from "react"
import Skills from "./skills"
import Education from "./edu"
import Projects from "./project"
import Trainings from "./training"




export default class Comp extends Component {

    render (){   
      return (
<div className = "App">
<b><p>Rohit Ednani</p></b>
<hr/>
<Skills/><hr/>
<Education/><hr/>
<Projects/><hr/>
<Trainings/><hr/>
</div>
        );
    }
}