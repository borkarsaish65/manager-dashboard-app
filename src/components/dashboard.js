import React from 'react'
import Navbar from './navbar'
import TileStats from './TileStats'
import '../assets/css/dashboard.css';
import TeamMood from './TeamMood';
import employeeMoodData from './helper/team-mood-data';
import {CChart} from '@coreui/react-chartjs'
import BudgetCard from './BudgetCard';
import budgetDummyData from './helper/budget-card-data';
import statsData from './helper/stats-data';


function dashboard() {
  return (
    <div>
        <Navbar/>
        <div className='main-container'>
        </div>
        <div className='new-container'>
                    {
                      statsData.map((record)=>{
                       
                        return <div>
                          <TileStats icon={record.icon} stats={record.stats} statsTitle={record.statsTitle}
                              dangerStatus={record.dangerStatus}
                          />
                        </div>
                      })
                    }
                    <div className='grid-team-mood-item'>
                    <div className='mood-container-new'>
        <p>Team Mood</p>
        {employeeMoodData.map((employee)=>{
            return <TeamMood 
                    name={employee.name}  
                    designation={employee.designation}
                    profile_pic={employee.profile_pic}
                    happy={employee.happy}
            />
        })}
        </div>
                    </div>

                    <div className='grid-item1'>
                    <div className='line-graph'>
                <CChart
  type="line" 
  data={{
    labels: ["19 June","20 June","21 June","22 June","23 June","24 June","25 June","26 June"],
    datasets: [
      {
        label: "",
        backgroundColor: "rgba(151, 187, 205, 0.2)",
        borderColor: "rgba(86,150,140,255)",
        pointBackgroundColor: "rgba(151, 187, 205, 1)",
        pointBorderColor: "#fff",
        data: [0, 1000, 3500, 3200, 4000, 5500, 6500,6500]
      },
    ],
  }}
/>
                </div>
                    </div>

                    <div className='grid-item2'>
                    <div className='pie-chart'>
                    <div className='chart-container'>
                    <div className='chart-text-container'>
                        <div>
                          5
                        </div>
                        <div>
                        Total Projects
                        </div>
                    </div>
                    <CChart
                    type="doughnut"
                    data={{
                        labels: ['Over Budget', 'On Budget', 'Under Budget'],
                    datasets: [
                         {
                         backgroundColor: ['#00dec5', '#7a8cd1', '#e50000'],
                         data: [19, 33, 48],
                         borderRadius:0,
                         borderWidth:0
                         },
                              ],
                         }}

                         options= {{
                            cutout:'70%'
                        }}
                />
                    </div>
                </div>

                    </div>
                    <div>
                    </div>


            </div>
            <div className='stats-container'>
            <div className='budget-cta-container'>
                        <div className='budget-heading'>
                            <h2>Budget Status</h2>
                        </div>
                        <button className='btn btn-primary-green'>
                         + Add New Project
                        </button>
                        <button className='btn btn-outline-green'>
                         + Download report
                        </button>
                        <button className='btn btn-outline-green'>
                         + dd/mm/yyyy - dd/mm/yyyy
                        </button>
                        <button className='btn btn-outline-green'>
                         + Filter
                        </button>
            </div>
            
        </div>
        <div className='budget-notification'>
            {
                budgetDummyData.map((data)=>{
                    return <BudgetCard name={data.name}
                            subName={data.subName}
                            totalBudget={data.totalBudget}
                            profitibility={data.profitibility}
                            hoursAvailable={data.hoursAvailable}
                            hoursUsed={data.hoursUsed}
                    
                    />
                })

            }
        </div>
        
    </div>
  )
}

export default dashboard