const express = require("express");
const router = express.Router();

const Person = require('../person');
const { update } = require("lodash");

router.post('/person', async (req, res) => {
    try {
        const { name, age, work, mobile, email, address, salary } = req.body //Assuming the request body contain the person data

        // Create a new Person document using the Mongoose model
        const newPerson = new Person(
            {
                name, age, work, mobile, email, address, Salary: salary
            }
        );

        //Save the new Person to the database
        const response = await newPerson.save();
        console.log('Data Saved !');
        res.status(200).send(response);
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Internal Server Error!' });
    }
});

router.get('/person',async(req,res)=>{
    try{
        const data = await Person.find();
        console.log('Data fetched!');
        res.status(200).send(data);
    }catch(err){
        console.log(err);
        res.status(500).send({ error: 'Internal Server Error!' });
    }
});

router.get('/person/:workType', async (req, res) => {
    try {
        const workType = req.params.workType;
        if (workType === 'chef' || workType === 'waiter' || workType === 'manager') {
            const response = await Person.find({ work: workType });
            console.log('Data is fetched!');
            res.status(200).send(response);
        } else {
            res.status(400).send({ error: 'Invalid Work Type!' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send({ error: 'Internal Server Error!!!' });
    }
});
router.put('/person/:id',async(req,res)=>{
    try{
        const personId = req.params.id;
        const updates = req.body;
        

        const response = await Person.findByIdAndUpdate(personId, updates,{
            new : true,
            runValidators : true
        });

        if(!response){
            return res.status(404).send({error : 'Person not found!'});
        }

        console.log('Data is updated!');
        res.status(200).send(response);
    }catch(err){
        console.log(err);
        res.status(500).send({ error: 'Internal Server Error!!!' });
    }
});

router.delete('/person/:id',async(req,res)=>{
    try{
        const personId =req.params.id;
        const response = await Person.findByIdAndDelete(personId);

        if(!response){
            return res.status(404).send({error : 'Person not found!'});
        }
        console.log("Data is deleted!");
        res.status(200).send({message : 'Person Deleted Successfully!'});
    }catch(err){
        console.log(err);
        res.status(500).send({error : 'Internal Server Error!!!'});
    }
});

module.exports = router;