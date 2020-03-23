async function requestHandler(req,res){
    try{
        const user = await	User.findById(req.userId);
        const tasks = await Tasks.findById(user.tasksId);
            tasks.complete = true;
                await tasks.save();
            
                res.send('tasks completed');
            
    }
    catch(e){
        res.send(e);
    }

}
