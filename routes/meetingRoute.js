const express = require('express');
const router = express.Router();

const { getMeetingByIndividual, getAllMeetingDetails, abortFromMeeting, createMeetingDetails, getIndividualMeetingDetails, updateIndividualMeetingDetails, deleteMeeting } = require('../controllers/meetingController');




router.get('/',getAllMeetingDetails);
router.post('/',createMeetingDetails);
router.get('/:id',getIndividualMeetingDetails);
router.put('/:id',updateIndividualMeetingDetails);
router.delete('/:id',deleteMeeting);
router.post('/abort/:id',abortFromMeeting);
router.post('/individual',getMeetingByIndividual);



module.exports = router;