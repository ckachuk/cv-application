
import './App.css';
import PersonalInformation from './component/CVForm/PersonalInformation';
import EducationalExperience from './component/CVForm/EducationExperience';
import WorkExperience from './component/CVForm/WorkExperience';
import React from 'react';
import Preview from './component/CVPreview/Preview';
import uniqid from "uniqid";

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
            id: uniqid(),
            universityName:'',
            country:'',
            city:'',
            titleStudy:'',
            from:'',
            to:'',
        },
        educationalArray: [],
        workExperience: {
          id: uniqid(),
          companyName:'',
          position:'',
          city:'',
          from:'',
          to:'',
        },
        workArray: [],
      }
    }
  }

  personalInputHandler = (e)=>{  
    const value = e.target.value;
    this.setState({
      cv:{
        ...this.state.cv,
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
        ...this.state.cv,
        educationalExperience: {
          ...this.state.cv.educationalExperience,
          id: this.state.cv.educationalExperience.id,
          [e.target.name]:value,
        },
      }
    })
  }

  cleanInputsEducationExperience = ()=>{
    const inputs = document.querySelectorAll(".education");
    inputs.forEach(element => {
        element.value = '';
    });
  }

  onSubmitEducationalExperience = (e)=>{
    e.preventDefault();
    this.setState({
      cv:{
        ...this.state.cv,     
        educationalArray: this.state.cv.educationalArray.concat(this.state.cv.educationalExperience),
        educationalExperience:{
          id:uniqid(),
          universityName:'',
          country:'',
          city:'',
          titleStudy:'',
          from:'',
          to:''
      },
      }
    })
    this.cleanInputsEducationExperience();
  }

  deleteEducationItem = (e)=>{
    e.preventDefault();
    this.setState({
      cv:{
        ...this.state.cv,
        educationalArray: this.state.cv.educationalArray.filter((a)=> a.id !== e.target.value)
      }
    })
  }

  workInputHandler = (e)=>{
    const value = e.target.value;
    this.setState({
      cv:{
        ...this.state.cv,
        workExperience: {
          ...this.state.cv.workExperience,
          id: this.state.cv.workExperience.id,
          [e.target.name]:value,
        },
      }
    })
  }

  cleanInputsWorkExperience = ()=>{
    const inputs = document.querySelectorAll(".work");
    inputs.forEach(element => {
        element.value = '';
    });
  }

  deleteWorkItem = (e)=>{
    e.preventDefault();
    this.setState({
      cv:{
        ...this.state.cv,
        workArray: this.state.cv.workArray.filter((a)=> a.id !== e.target.value)
      }
    })
  }

  onSubmitWorkExperience = (e)=>{
    e.preventDefault();
    this.setState({
      cv:{
        ...this.state.cv,
        workArray: this.state.cv.workArray.concat(this.state.cv.workExperience),
        workExperience:{
          id: uniqid(),
          companyName:'',
          position:'',
          from:'',
          to:'',
      },
      }
    })
    
    this.cleanInputsWorkExperience();
  }


  render(){
    const cv = this.state.cv;
    return (
      <div className="App">
        <div className='inputInformation'>
          <PersonalInformation cleanPersonalInformationObject={this.cleanPersonalInformationObject} handleChangePersonal={this.personalInputHandler} />
          <EducationalExperience onSubmitEducation={this.onSubmitEducationalExperience} inputHandler={this.educationalInputHandler} />
          <WorkExperience onSubmitWork={this.onSubmitWorkExperience} inputHandler={this.workInputHandler} />
        </div>

        <div className='cvInfo'>
          <Preview personalInformation={cv.personalInformation} workExperience={cv.workArray} educationalExperience={cv.educationalArray} deleteEducationOnClick={this.deleteEducationItem} deleteWorkOnClick={this.deleteWorkItem}/>
        </div>
        
    
        
      </div>
    );
  }
}

export default App;
