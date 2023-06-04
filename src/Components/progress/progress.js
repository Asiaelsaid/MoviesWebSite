import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ProgressBarComponent(props){
   
   

    return <>
    
     <label >{props.name}</label>
      <ProgressBar variant="dark " now={props.value} />
      <br></br>
    </> 


}
