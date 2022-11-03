import DietForm from "./DietForm";
import './diet.scss';

function Diet() {

  return (
      <div className='diet-banner'>
        <h2 className="diet-title">Are you <span>on-diet?</span> Check our <span>recipes</span> according to your needs</h2>
        <DietForm />
      </div>
  )
}

export default Diet