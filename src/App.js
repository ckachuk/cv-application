
import './App.css';
import PersonalInformation from './component/CVForm/PersonalInformation';
import EducationalExperience from './component/CVForm/EducationExperience';
import WorkExperience from './component/CVForm/WorkExperience';
import React, {useState} from 'react';
import Preview from './component/CVPreview/Preview';
import uniqid from "uniqid";

const App = (props)=> {

  const [personalInformation, setPersonalInformation] = useState({
          firstName:'',
          lastName: '',
          email: '',
          country: '',
          address: '',
          phone: '',
        });
const [educationalExperience, setEducationExperience] = useState({
            id: uniqid(),
            universityName:'',
            country:'',
            city:'',
            titleStudy:'',
            from:'',
            to:'',
      });
const [educationalArray, setEducationalArray] = useState([])
const [workExperience, setWorkExperience] =  useState({
          id: uniqid(),
          companyName:'',
          position:'',
          city:'',
          from:'',
          to:'',
      });
const [workArray, setWorkArray] = useState([]);
      
    


  const personalInputHandler = (e)=>{  
    const value = e.target.value;
    setPersonalInformation({
      ...personalInformation,
      [e.target.name]:value, 
    })
  }
 

  const cleanPersonalInformationObject = (e) =>{
    setPersonalInformation({
      firstName:'',
      lastName: '',
      email: '',
      country: '',
      city:'',
      address: '',
      phone: '',
    })
  }

  const educationalInputHandler = (e)=>{
    const value = e.target.value;
    setEducationExperience({
      ...educationalExperience,
      id: educationalExperience.id,
      [e.target.name]:value,   
    })
  }

  const cleanInputsEducationExperience = ()=>{
    const inputs = document.querySelectorAll(".education");
    inputs.forEach(element => {
        element.value = '';
    });
  }

  const onSubmitEducationalExperience = (e)=>{
    e.preventDefault();
    setEducationalArray(
      educationalArray.concat(educationalExperience),
    );
    setEducationExperience({    
      id:uniqid(),
      universityName:'',
      country:'',
      city:'',
      titleStudy:'',
      from:'',
      to:''
    });
    cleanInputsEducationExperience();
  }

  const deleteEducationItem = (e)=>{
    e.preventDefault();
    setEducationalArray(
      educationalArray.filter((a)=> a.id !== e.target.value)
    )
  }

  const workInputHandler = (e)=>{
    const value = e.target.value;
    setWorkExperience({
      ...workExperience,
      id: workExperience.id,
      [e.target.name]:value,   
    })
  }

  const cleanInputsWorkExperience = ()=>{
    const inputs = document.querySelectorAll(".work");
    inputs.forEach(element => {
        element.value = '';
    });
  }

  const deleteWorkItem = (e)=>{
    e.preventDefault();
    setWorkArray(
      workArray.filter((a)=> a.id !== e.target.value)
    )
  }

  const onSubmitWorkExperience = (e)=>{
    e.preventDefault();
    setWorkArray(workArray.concat(workExperience))
    setWorkExperience({
      id: uniqid(),
      companyName:'',
      position:'',
      from:'',
      to:'',
    })
    cleanInputsWorkExperience();
  }


  return (
      <div className="App">
        <div className='inputInformation'>
          <PersonalInformation cleanPersonalInformationObject={cleanPersonalInformationObject} handleChangePersonal={personalInputHandler} />
          <EducationalExperience onSubmitEducation={onSubmitEducationalExperience} inputHandler={educationalInputHandler} />
          <WorkExperience onSubmitWork={onSubmitWorkExperience} inputHandler={workInputHandler} />
        </div>

        <div className='cvInfo'>
           <Preview personalInformation={personalInformation} workExperience={workArray} educationalExperience={educationalArray} deleteEducationOnClick={deleteEducationItem} deleteWorkOnClick={deleteWorkItem}/>
        </div>
        
    
        
      </div>
    );
}

export default App;
