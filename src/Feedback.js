import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import "./Feedback.css"

const dummyComments = [
  { text: 'Desirous of doing a Jain pilgrimage tour of Uttar Pradesh which has many important Jain temples, I wrote to four tour operators. But only Tour My India replied positively. It was a first for them too, but they took up the challenge and worked out a plan for me.I thank them for this. Beginning from prompt replies from Vishwa ji at the planning stage and the hotels and the driver, everythin...  ', rating: 5 },
  { text: 'It was a wonderful experience for us. All your arrangements were up to the mark.All hotels and transportation arrangements were excellent. Though we had faced some problems with hotel at Kedarnath you handled it swiftly and efficiently. Thanks for your support and prompt response.The driver (Mahesh) just was very cooperative, polite and friendly. His driving skills were excellent and safe. In addition he was well tr...   ', rating: 4 },
  { text: '"Trippy Baba stands out. They set the bar for meticulousness and commitment to offering unique cultural experiences. With the native guides, I had a wonderful day of exploration and truly felt like I was with friends. Trippy Baba will always be a favorite of mine!"  ', rating: 5 },
  { text: '"Although I have traveled with several different companies, Trippy Baba stands out. They set the bar for meticulousness and commitment to offering unique cultural experiences. With the native guides, I had a wonderful day of exploration and truly felt like I was with friends. Trippy Baba will always be a favorite of mine!"', rating: 5 },
];

function FeedbackPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyComments.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="feedback-page">
      <h2>Client Feedback</h2>
      <h1>Trippy Baba Through Their Eyes</h1>
      <div className="comment-box">
        <StarRatings
          rating={dummyComments[currentIndex].rating}
          starRatedColor="gold"
          starEmptyColor="lightgray"
          numberOfStars={5}
          name="rating"
        />
        <p className="black-text">{dummyComments[currentIndex].text}</p> 
      </div>
    </div>
  );
}

export default FeedbackPage;
