//@desc Get Goals
//@route /api/goals
//@access Private
const getGoals = (req , res) => {
    res.status(200).json({message:"Get goals"})
}
//@desc set Goals
//@route /api/goals
//@access Private
const setGoal = (req, res)=>{
    res.status(200).json({message:"Set goal"})
}
//@desc Update Goals
//@route /api/goals/:id
//@access Private
const updateGoals = (req, res)=>{
    res.status(200).json({message:`Update goals ${req.params.id}`})
}
//@desc delete Goals
//@route /api/goals/:id
//@access Private
const deleteGoals = (req,res)=>{
    res.status(200).json({message:`Delete goals ${req.params.id}`})
}
module.exports={
    getGoals,
    setGoal,
    updateGoals,
    deleteGoals
}