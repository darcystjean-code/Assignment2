var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Assignment 2', home_desc: 'This is my Assignment 2 Website' });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me',  about_desc: `Hello I'm Darcy St Jean. I'm a second year student at Ontario Tech studying Networking & IT Security<br/>
    This is my portfolio website to demonstate my HTML, CSS and Express skills<br/>
    I have previous work experience as a backend web developer but I do have some experience with frontend technologies`,
  about_desc_pt2: `When I'm not studying or working on assignments I'm usually reading or playing fighting games,<br/>
    primarily Street Fighter or Guilty Gear`});
});

/* GET projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects', project1_title: 'Event Orgnization Software', project1: 'Command line software made in python to find and organize upcoming events',
    project2_title: 'Simulated Network', project2: 'Simulated autonomous system made in packet tracer as a networking final project',
    project3_title: 'Card Game', project3: 'Card game with a computer controlled opponent made in C#',
    project4_title: 'Word Guessing Game', project4: 'A word guessing game made in python',
    project5_title: 'Real Estate Browsing Site', project5: 'Backend functionality and database design for a web development final project'});
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

module.exports = router;
