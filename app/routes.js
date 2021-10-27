const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/application-type-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var protectWhat = req.session.data['protect-what']

  // Check whether the variable matches a condition
  if (protectWhat == "Single tree on open land"){
    // Send user to next page
    res.redirect('/tree-location')
  }
  if (protectWhat == "Woodland"){
    // Send user to next page
    res.redirect('/woodland-location')
  }
  if (protectWhat == "Single tree on private land"){
    // Send user to next page
    res.redirect('/planning-application')
  }
  if (protectWhat == "More than one tree on private land"){
    // Send user to next page
    res.redirect('/planning-application2')
  }

})

router.post('/contact-answer', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var contact = req.session.data['contact']

  // Check whether the variable matches a condition
  if (contact == "Email"){
    // Send user to next page
    res.redirect('/your-email')
  }
  if (contact == "Phone"){
    // Send user to next page
    res.redirect('/your-phone')
  }
  if (contact == "Post"){
    // Send user to next page
    res.redirect('/your-address')
  }

})

router.post('/checking-answers', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var protectWhat = req.session.data['protect-what']

  // Check whether the variable matches a condition
  if (protectWhat == "Single tree on open land"){
    // Send user to next page
    res.redirect('/check-your-answers-open')
  }
  if (protectWhat == "Woodland"){
    // Send user to next page
    res.redirect('/check-your-answers-woodland')
  }
  if (protectWhat == "Single tree on private land"){
    // Send user to next page
    res.redirect('/check-your-answers')
  }
  if (protectWhat == "More than one tree on private land"){
    // Send user to next page
    res.redirect('/check-your-answers-multiple')
  }

})



module.exports = router
