import styled from "styled-components";


const TaskList = ({tasks}) => {

    
    console.log(tasks)

    return (
        
        <TasksContainer>
            {
                tasks.map(
                    (task) => 
                        <div>
                            <p>{task.task}</p>
                        </div>
                    
                )
            }
        </TasksContainer>
    );
};


export default TaskList;

const TasksContainer = styled.div`
    background-color: var(--faded);
    color: white;
    width: 95%
`