const express = require('express')
const inventoryRouter = express.Router()
const Inventory = require('../models/inventory')

inventoryRouter.get("/", async (req, res, next) => {
    try {
        const inventory = await Inventory.find();
        return res.status(200).send(inventory);
    } catch (err) {
        console.log(err);
        res.status(500);
        return next(err)
    }
});

inventoryRouter.get('/:itemId', async (req, res, next) => {
    try {
        const item = await Inventory.findOne({_id: req.params.itemId})
        res.status(200).send(item)
    } catch (err) {
        console.log(err);
        res.status(500);
        return next(err)
    }
});

inventoryRouter.post('/', async (req, res, next) => {
    try {
        const newItem = new Inventory(req.body)
        const savedItem = await newItem.save()
        return res.status(201).send(savedItem)
    } catch (err) {
        console.log(err);
        res.status(500);
        return next(err)
    }
})

inventoryRouter.put('/:itemId', async (req, res, next) => {
    try {
        const item = await Inventory.findOneAndUpdate(
            {_id: req.params.itemId}, 
            req.body, 
            {new:true}
        )
        return res.status(201).send(item)
    } catch (err) {
        console.log(err);
        res.status(500);
        return next(err)
    }
})

inventoryRouter.delete('/:itemId', async (req, res, next) => {
    try {
        const item = await Inventory.findOneAndDelete({_id: req.params.itemId})
        res.status(200).send(`Successfully deleted ${item.name}`)
    } catch (err) {
        console.log(err);
        res.status(500);
        return next(err)
    }
})



module.exports = inventoryRouter