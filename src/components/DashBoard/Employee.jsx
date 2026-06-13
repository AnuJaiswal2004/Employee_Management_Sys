import React from 'react'
import Header from '../others/header'
import TaskListNumbers from '../others/TaskNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  return (
    <div className="min-h-screen w-full bg-[#070b19] text-white p-6 md:p-10 relative overflow-hidden font-sans selection:bg-emerald-500/30 selection:text-emerald-400">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto space-y-8">
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data} />
            <TaskList data={props.data} />
        </div>
    </div>
  )
}

export default EmployeeDashboard