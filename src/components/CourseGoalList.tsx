// import React from 'react'
import CourseGoal from './CourseGoal';
import { type CourseGoal as CGoal} from '../App';

type CourseGoalListProps = {
    // goals: {
    //     title: string;
    //     description: string;
    //     id: number
    //   }[]
    goals: CGoal[];
    onDeleteGoal: (id:number) => void;
}

function CourseGoalList({goals,onDeleteGoal}: CourseGoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title} id={goal.id} onDelete={onDeleteGoal} >
            <p>{goal.description}</p>
          </CourseGoal>

        </li>
      ))}

    </ul>
  )
}

export default CourseGoalList