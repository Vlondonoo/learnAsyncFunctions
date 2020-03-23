function requestHandler(req,res){
	User.findById(req.userId)
    .then(function(user){
        //res.send(user);
        return Tasks.findById(user.tasksId)
    }).then(function(tasks){
        tasks.complete = true;
        return tasks.save();
    }).then(()=>{
        res.send('tasks completed')
    })
    .catch(function(errors){
        res.send(errors);
    })

}



/* function requestHandler(req, res) {
	User.findById(req.userId, function(error, user) {
			if (error) {
					res.send(error);
			} else {
					Tasks.findById(user.taaskId,function(error,tasks){
							if (error) {
									res.send(error);
							}else{
									tasks.complete = true;
									tasks.save(function(error){
											
									})
							}
					})
			}
	})
} */