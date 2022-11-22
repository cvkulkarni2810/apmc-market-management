const express = require("express");
const router = new express.Router();
const con = require("./db.js");

router.get("/farmer/:id",(req,res)=>{

    const {id} = req.params;

    con.query("SELECT * FROM farmer WHERE f_id = ? ",id,(err,result)=>{
        if(err){
            res.status(422).json(err);
        }else{
            res.status(201).json(result);
        }
    })
});

router.get("/trades",(req,res)=>{

    

    con.query("select lot.lot_no, f_fname, lot_quantity, c_fname, bid_price, t_fname, commodity_name from lot join farmer on farmer.f_id=lot.f_id join commodity on lot.commodity_code=commodity.commodity_code join commission_agent on commission_agent.c_id=lot.c_id join auction on lot.lot_no = auction.lot_no join bid on closing_bidid=bid_id join trader on trader.t_id= bid.t_id",(err,result)=>{
        if(err){
            res.status(422).json(err);
        }else{
            res.status(201).json(result);
        }
    })
});
module.exports=router

router.get("/mylots/:f_id",(req,res)=>{

    const {f_id} = req.params;

    con.query("select lot.lot_no, f_fname, lot_quantity, commodity_name, c_fname, base_price, start_time, auction.status from lot join farmer on farmer.f_id=lot.f_id join commodity on lot.commodity_code=commodity.commodity_code join commission_agent on commission_agent.c_id=lot.c_id join auction on lot.lot_no = auction.lot_no where farmer.f_id=?" ,f_id,(err,result)=>{
        if(err){
            res.status(422).json(err);
        }else{
            res.status(201).json(result);
        }
    })
});
module.exports=router