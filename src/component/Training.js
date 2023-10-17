import React from "react";
import TrainingStyle from './Training.module.css';
import TrainerSection from './TrainerSection';

export default function Training() {
  return (
    <div className={TrainingStyle.box}>
      <div className={TrainingStyle.car}>
        <h1 className={TrainingStyle.head}>
          <p><b>About TrippyBaba</b></p>
          Providing the Best Travel<br/> Experiences, Always.
        </h1>
        <div className="Detailed">
          <img src="https://grow.trippybabatours.com/img/about.png" alt="Person Image" className={TrainingStyle['person-image']} />
          <h4>Trippy Baba is one of the best travel agencies in Delhi NCR. With a splendid experience of delivering the best travel experiences in stunning holiday destinations ranging from Goa to Singapore and prominent honeymoon locations like Bali. In our journeys, we blend adventure and culture to provide unforgettable memories for our clients. For those with a spirit of exploration and adventure, We offer packages that will help them embark on a transforming journey.</h4>
        </div>
      </div>
      <div>
        <TrainerSection />
      </div>
    </div>
  );
}