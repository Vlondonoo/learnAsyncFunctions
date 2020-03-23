
function requestHandler(req, res) {
    User.findById(req.userId, function(error, user) {
        if (error) {
            res.send(error);
        } else {
            TextTrackList.findById(user.taaskId,function(error,tasks){
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
}
