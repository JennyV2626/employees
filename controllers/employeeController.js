const {Employee} = require('../models')
const jobtitles = ['CEO', 'VP']
const states = ['CA', 'AZ']

module.exports.displayEmployees = async function(req, res){
    const employees = await Employee.findAll();
    res.render('index', {employees})
}

module.exports.renderAddEmployeeForm = function(req, res) {
    res.render('createUserForm',
        {
            jobtitles,
            stateslist:state
        });
}
