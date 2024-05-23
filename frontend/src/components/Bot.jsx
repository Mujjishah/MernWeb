import React from 'react'
import ChatBot from 'react-simple-chatbot'
import {Segment} from  'semantic-ui-react'
function Bot() {
    const steps =[
        {
            id: 'Greet',
            message: 'Welcome To Our Website',
            trigger: 'Ask Name'
        },
        {
            id: 'Ask Name',
            message: 'Please Enter Your Name',
            trigger: 'Waiting!'
        },
        {
            id: 'Waiting!',
            user: true,
            trigger: 'Name'
        },
        {
            id: 'Name',
            user: true,
            message: 'Hi {previousValue} Please Select Your Issue',
            trigger: 'issues'
        },
        {
            id: 'issues',
            options:[
                {value:'React', label:'React',trigger:'React'},{value:'Angular', label:'Angular',trigger:'Angular'}]
        },
        {
            id: 'React',
            message: 'Thanks For Telling Your Issue We Will Get In Touch Soon',
            end: true,
        },
        {
            id: 'Angular',
            message: 'Thanks For Telling Your Issue We Will Get In Touch Soon',
            end: true,
        }
        
    ]
  return (
    <div className='d-flex justify-content-center mt-5 my-5'>
    <Segment floated='right'>
        <ChatBot steps={steps}/>
    </Segment>
    </div>
  )
}

export default Bot