import React from 'react'
import TrainingStyle from './Training.module.css'
import {useState} from 'react'


export default function TrainerSection(){
  const[show , setShow] = useState(false)
  return(
    <><div className={TrainingStyle.wrap} id='trainingStyle'>

  <h3 className={TrainingStyle.mediaHead}  style={{color:"black"}}>Check Our Latest Thailand Packages</h3>
 

  <div className={TrainingStyle.griding}>
  <div>
  <img
    style={{
      height: "20em",
      width: "25em",
      backgroundSize: "cover",
    }}
    src="https://tse2.mm.bing.net/th?id=OIP.UiT2uXd3RYd5a2RFSk67nQHaE8&pid=Api&P=0&h=220"
    alt="work"
  />
  <h6 style={{ margin: "0" }}>4 NIGHT 5 DAYS TOUR</h6>
  <h5 style={{ margin: "0" }}>Bangkok Pattaya</h5>
</div>
<div>
  <img
    style={{
      height: "20em",
      width: "25em",
      backgroundSize: "cover",
    }}
    src="https://tse2.mm.bing.net/th?id=OIP.ZcC7X2JL_TPzugvucil8MgHaED&pid=Api&P=0&h=220"
    alt="work"
  />
  <h6 style={{ margin: "0" }}>4 NIGHT 5 DAYS TOUR</h6>
  <h5 style={{ margin: "0" }}>PHUKET KRABI</h5>
</div>
<div>
  <img
    style={{
      height: "20em",
      width: "25em",
      backgroundSize: "cover",
    }}
    src="https://tse1.mm.bing.net/th?id=OIP.VSVcdJU2AeTFSrTvyWnX6AHaFL&pid=Api&P=0&h=220"
    alt="work"
  />
  <h6 style={{ margin: "0" }}>5 NIGHT 6 DAYS TOUR</h6>
  <h5 style={{ margin: "0" }}>Bangkok Pattaya</h5>
</div>
    
</div>

<h3>Check Our Latest Dubai Packages</h3>
<div className={TrainingStyle.grid}>
<div>
  <img
    style={{
      height: "20em",
      width: "25em",
      backgroundSize: "cover",
    }}
    src="https://tse2.mm.bing.net/th?id=OIP.0LQemutZjDE-AB6gMBd2PAHaEK&pid=Api&P=0&h=220"
    alt="work"
  />
  <h6 style={{ margin: "0" }}>5 NIGHT 6 DAYS TOUR</h6>
  <h5 style={{ margin: "0" }}>Bangkok Pattaya</h5>
</div>
<div>
  <img
    style={{
      height: "20em",
      width: "25em",
      backgroundSize: "cover",
    }}
    src="https://tse1.mm.bing.net/th?id=OIP.dHJ2e7OgXAVpbj38MxihIAHaE8&pid=Api&P=0&h=220"
    alt="work"
  />
  <h6 style={{ margin: "0" }}>5 NIGHT 6 DAYS TOUR</h6>
  <h5 style={{ margin: "0" }}>Bangkok Pattaya</h5>
</div>
    </div> 
</div>


    </>
  )
}