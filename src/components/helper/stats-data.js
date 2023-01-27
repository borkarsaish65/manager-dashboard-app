import { faRotateRight, faCube,faSquareCheck,faTriangleExclamation,faPeopleLine } from '@fortawesome/free-solid-svg-icons'


let statsData = [
    {
      icon:faCube,
      stats:5,
      dangerStatus:false,
      statsTitle:"Total Project"
    },
    {
      icon:faSquareCheck,
      stats:1,
      dangerStatus:false,
      statsTitle:"Completed"
    },
    {
      icon:faRotateRight,
      stats:3,
      dangerStatus:false,
      statsTitle:"Ongoing"
    },
    {
      icon:faTriangleExclamation,
      stats:1,
      dangerStatus:true,
      statsTitle:"Delayed"
    },
    {
      icon:faPeopleLine,
      stats:5,
      dangerStatus:false,
      statsTitle:"Employees"
    },
  ]


export default statsData;