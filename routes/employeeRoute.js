const express = require('express');
const router = express.Router();

const { getEmployeesEmail, giveAdminAccess, getEmployeeByTeam, getEmployeeDetails, getIndividualEmployeeDetails, deleteIndividualEmployeeDetails, updateIndividualEmployeeDetail } = require('../controllers/employeeController')




router.get('/',getEmployeeDetails);
router.get('/employee/:id',getIndividualEmployeeDetails);
router.delete('/employee/:id',deleteIndividualEmployeeDetails);
router.put('/employee/:id',updateIndividualEmployeeDetail);
router.post('/employee/team',getEmployeeByTeam);
router.get('/emails',getEmployeesEmail);
router.put('/employee/access/:id',giveAdminAccess);


module.exports = router;