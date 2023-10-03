const express = require('express');

exports.create = async (req, res) => { 
    res.status(200).json({status:"success", data:"Create"});
};


exports.read = async (req, res) => { 
    res.status(200).json({status:"success", data: "read"})
};


exports.delete = async (req, res) => { 
    res.status(200).json({status:"success", data: "delete"})
};


exports.update = async (req, res) => { 
    res.status(200).json({status:"success", data: "update"})
};
