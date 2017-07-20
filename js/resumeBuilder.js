///////////// Personal Information ///////////////////////////
    var bio = {
        "name": "abeer abdelhamed",
        "role": "Graphic Designer",

        "contacts": {
            "mobile": "01129457361",
            "email": "abeer.abdelhamed@yahoo.com",
            "github": "@abeer_younes",
            "location" : "Egypt"   
        },

        "welcomeMessage": "I'm abeer abdelhamed, I lives in Egypt, work as graphic design and web development, My favourite hobbits is play sports, photography and drawing",
        "skills": ["HTML5", "CSS3","JQuery", "Bootstrap", "Maya","photoshop","aftereffect","Premiere"],
        "biopic": "images/abeer.jpg",
                
    ////////// appear information in html classes /////////////////////
        'display' : function () {
            var Name_Formate = HTMLheaderName.replace("%data%", bio.name);
            var Role_Formate = HTMLheaderRole.replace("%data%", bio.role);
            var Image_Formate = HTMLbioPic.replace("%data%", bio.biopic);
            var Message_Formate = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
            $("#header").append(Image_Formate);
            $("#header").append(Message_Formate);
            $("#header").prepend(Name_Formate+Role_Formate);
            
            if(bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                for (var skill in bio.skills) {
                var Skills_Formate = HTMLskills.replace("%data%", bio.skills[skill]);
                $("#header").append(Skills_Formate);
            }
        }
            var Mobile_Formate = HTMLmobile.replace("%data%", bio.contacts.mobile);
            var Email_Formate  = HTMLemail.replace("%data%", bio.contacts.email);
            var Github_Formate  = HTMLgithub.replace("%data%", bio.contacts.github);
            var Location_Formate  = HTMLlocation.replace("%data%", bio.contacts.location);
            $("#topContacts, #footerContacts").append(Mobile_Formate,Email_Formate, Github_Formate , Location_Formate);
        }
    };
   
  
      //// work ^_^ ////
   //// work I made it and love work about it /////////////////
   var work = {
    "jobs": [{
        "employer": "Graphic Designer",
        "title": " Graphic Designer ",
        "dates": "2017",
        "location": "Egypt",
        "description": "Creative design to explain an idea"
    }],
       
   ///////////////////// appear information ////////////////
    'display' : function() {
        for (var job in  work.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
            $(".work-entry:last").append(formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
            $(".work-entry:last").append(formattedDates);

           var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
            $(".work-entry:last").append(formattedLocation);
            
            var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
            $(".work-entry:last").append(formattedDescription);
        }
    }
};



    //// my_projects ////        
    /////// Projects I work about it on coledge or online ///////////////
    var projects = {
        "projects": [{
            "title": "Build a Portfolio Site",
            "dates": "2017",
            "description": "it is my protfolio page",
            "images": ["images/protfolio.PNG"]
        }, 
        {
            "title": "online_library",
            "dates": "2016",
            "description": "to buy books online",
            "images": ["images/library.PNG"]
        }] ,
        
    ///////////////// appear information //////////////////////
    'display':function() {

        for (var item=0 ; item < projects.projects.length ; item++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[item].title);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[item].dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[item].description);
            $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);
            
            var image =0;
            while ( image < projects.projects[item].images.length ) {
                var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[item].images[image]);
                $(".project-entry:last").append(formattedImage);
                image++;
            }
        }
    }
};
    


//// education ^_^ ////
  ///////// Education I learn on it or online course ////////////////////
    var education = {
        "schools": [{
            "name": "Fresh Graduated",
            "location": "Benha University , Egypt",
            "degree": "Good",
            "majors": ["Software engineering"],
            "dates": "2012-2016",
            "url": "http://www.fci.bu.edu.eg/fci/en/"
        }],

        "onlineCourses": [{
            "title": "Front-End Web Developer Nanodegree",
            "school": "Udacity",
            "dates": "2/2017-8/2017",
            "url": "https://www.udacity.com/nanodegree"
        }],
        
    //////// appear information //////////////
    'display': function() {
        for (var school=0; school < education.schools.length ; school++) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
            var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
            var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
            var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);

            ////////// append information in education-entry ///////////////////

            var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
            $(".education-entry:last").append(formattedName , formattedDegree, formattedDates,formattedLocation, formattedMajor);
        }

        if (education.onlineCourses.length !== 0) {
            $("#education").append();
        }
        for (var course =0; course< education.onlineCourses.length ; course++) {
            $("#education").append(HTMLonlineClasses);
            var formattedTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
            var formattedSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
            var formattedDate = HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
            var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedTitle + formattedSchool, formattedDate,formattedURL);
        }
    }
};

// this records the location of the clicks on page and outputs to console
/*$(document).click(function(My_loaction) {
  var x = My_loaction.pageX;
  var y = My_loaction.pageY;

  locationClicks(x, y);
});*/

// adds google map functionality showing the locations lived and worked
 $("#mapDiv").append(googleMap);

////////  Display function to run in page ///////////////////

    
bio.display();
work.display();
projects.display(); 
education.display();



   