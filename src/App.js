
import './App.css';
import PersonalInformation from './component/CVForm/PersonalInformation';
import EducationalExperience from './component/CVForm/EducationExperience';
import WorkExperience from './component/CVForm/WorkExperience';
import React from 'react';
import Preview from './component/CVPreview/Preview';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      cv:{
        personalInformation:{
          firstName:'',
          lastName: '',
          email: '',
          country: '',
          address: '',
          phone: '',
        },
        educationalExperience:{
            universityName:'',
            country:'',
            city:'',
            titleStudy:'',
            from:'',
            to:''
        },
        educationalArray:[],
        workExperience: {
          companyName:'',
          position:'',
          city:'',
          from:'',
          to:'',
        },
        workArray:[],
      }
    }
  }

  personalInputHandler = (e)=>{  
    const value = e.target.value;
    this.setState({
      cv:{
        personalInformation: {
          ...this.state.cv.personalInformation,
          [e.target.name]:value,
        },
      }
    })
  }

  cleanPersonalInformationObject = (e) =>{
    this.setState({
      cv:{
        personalInformation:{
          firstName:'',
          lastName: '',
          email: '',
          country: '',
          city:'',
          address: '',
          phone: '',
        },
      }
    })
  }

  educationalInputHandler = (e)=>{
    const value = e.target.value;
    this.setState({
      cv:{
        educationalExperience: {
          ...this.state.cv.educationalExperience,
          [e.target.name]:value,
        },
      }
    })
  }

  cleanEducationalInformationObject = ()=>{
    this.setState({
      cv:{
        educationalExperience:{
          universityName:'',
          country:'',
          city:'',
          titleStudy:'',
          from:'',
          to:''
      },
      }
    })
  }

  onSubmitEducationalExperience = (e)=>{
    e.preventDefault();
    this.setState({
      cv:{
        educationalArray: this.state.cv.educationalArray.concat(this.state.cv.educationalExperience),
      }
    })
    
  }


  render(){
    const cv = this.state.cv;
    return (
      <div className="App">
        <PersonalInformation cleanPersonalInformationObject={this.cleanPersonalInformationObject} handleChangePersonal={this.personalInputHandler}/>
        <EducationalExperience onsubmit={this.onSubmitEducationalExperience} inputHandler={this.educationalInputHandler}/>
  
    
               
      </div>
    );
  }
}

export default App;
