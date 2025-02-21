import { createContext, useReducer } from "react";
import question from "../data/questions"

const STAGES = ["Start", "Playing", "End"]

const initialStates = {
    gameStage: STAGES[0],
    question
}

const quizReducer = (state, action) =>{
    switch(action.type){
        case "CHANGE_STATE":
            return State;
        default:
            return State;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) =>{
    const value = useReducer(quizReducer, initialStates)
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
}