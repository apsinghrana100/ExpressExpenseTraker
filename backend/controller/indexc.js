console.log("hey i am controller");
const product=require('../model/expensedatabase');

exports.postaddproduct=(async(req,res,next)=>{
    const naam=req.body.naam;
    const email=req.body.email;
    const price=req.body.price;
    const choice=req.body.choice;
    console.log("naaam------"+naam);
    await product.create({
        nam:naam,
        emailid:email,
        price:price,
        choice:choice
    }).then((result)=>{
        console.log(result);
        res.json("successfully added"+result);
    }).catch((error)=>{
        console.log(error);
        console.log("fail");

    });
});

exports.fetchdata=(async(req,res,next)=>{
    await product.findAll().then((result)=>{
        res.json(result);
    }).catch((error)=>{
        console.log(error);
    })
});

exports.deletedata=(async(req,res,next)=>{
    await product.destroy({where :{id:req.params.id}});
});

exports.updatedata=(async(req,res,next)=>{
    product.findByPk(req.params.id)
    .then(user => {
        user.nam = req.body.naam;
        user.emailid = req.body.email;
        user.price = req.body.price;
        user.choice = req.body.choice;
        user.save()
            .then(() => res.status(200).json({ message: 'User updated successfully' }))
            .catch(err => res.status(400).json({ message: 'Error updating user', error: err }));
    })
    .catch(err => res.status(404).json({ message: 'User not found', error: err }));
})