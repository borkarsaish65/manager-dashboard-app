import React from 'react'
import '../assets/css/budgetcard.css';
import budgetProfilePic from '../assets/images/image-1.jpg'
function BudgetCard(props) {
  let {
    name,
    subName,
    hoursUsed,
    hoursAvailable,
    profitibility,
    totalBudget,
  } = props;
  return (
    <div className='budget-card'>
        <div className='project-info'>
            <div className='project-name'>
                <h2>
                    {name}
                </h2>
                <span>
                    {subName}
                </span>
            </div>
            <div className='team-image avatar'>
            <img src={budgetProfilePic} className="avatar-img"/>
            </div>
        </div>
        <div className='budget-info'>
            <div className="budget-data">
                <span>
                    Total Budget:
                </span>
                <span>
                    {totalBudget}
                </span>
            </div>
            <div  className="budget-data">
                <span>
                    Profitibility(100%):
                </span>
                <span>
                    {profitibility}
                </span>
            </div>
        </div>
        <div className='indicator-container'>

        <div className='hours-info'>
            <div>
                <span>
                    Actual hours:{hoursUsed}
            </span>
        </div>
        <div>
                <span>
                    {hoursAvailable} Sold Hours
               </span>
        </div>
</div>
</div>

    </div>
  )
}

export default BudgetCard