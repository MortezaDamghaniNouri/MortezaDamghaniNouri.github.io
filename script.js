
document.getElementById("home").onclick = function()
{
    document.getElementById("content").innerHTML = `
    <div id="content">
        <div class="content-header">
            <h4 id="greetings">Welcome !</h4>
            <h6>I am Morteza Damghani Nouri. I got my Bachlor of Science degree in Computer Engineering at <a class="non_underline-link" href="https://aut.ac.ir/en">Amirkabir University of Technology</a> in Iran.</h6>
        </div>
        <div id="content-text">
            <p>
                I describe myself as someone who tries as hard as possible to achieve his goals.<br>
                I love computers and Computer Science major.
                I personally believe that by the help of computers and technologies, engineers and scientists are capable of making this world a better place to live, and they can make the lives of so many people in distinct parts of the world easier.<br>
                My main interests are <strong>Data Mining</strong>,
                <strong>Big Data</strong>, <strong>Machine Learning</strong>, <strong>Artificial Intelligence</strong>, <strong>Deep Learning</strong> and <strong>Computer Vision</strong>.
                I hope to play my role in this world as well as possible and help some people live a better day.
            </p>
            <p>
                During getting my Bachelor of Science degree in Computer Engineering, I strove to acquire some information about Data Mining and Artificial Intelligence in diverse ways.
                I have passed several AI-related courses, all with A's, and I have practiced this knowledge in a number of <a  onclick="show_projects()" class="non_underline-link blue-btn projects" href="#" >projects</a>.
                My current <strong>total GPA is 3.82 / 4 (18.22 / 20)</strong> and I got <strong>104 / 120 in TOEFL iBT Test</strong>.
                I ranked as Top 2% among more than 150,000 participants in National Entrance Exam for Undergraduate State Universities in Iran. I was chosen as an outstanding student at Amirkabir
                University of Technology, and I was eligible to study in two majors simultaneously.
                Amirkabir University of Technology gave me the opportunity of direct entry for Master of Science (without university entrance exam) in computer engineering.
            </p>
            <p>
                My primary goal is to pursue my education in a top-ranking university and conduct research as a member
                of an enthusiastic team. In this way, I hope to learn what is necessary and be able to create some new technologies in order to be helpful in this world.
            </p>
        </div>
    </div>
    `
    document.getElementById("home").style.color = "black"
    document.getElementById("experience").style.color = "blue"
    document.getElementById("skills").style.color = "blue"
    document.getElementById("projects").style.color = "blue"
    document.getElementById("scores").style.color = "blue"
    return false;
}

document.getElementById("experience").onclick = function()
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h4 class="title">My Experience</h4>
    </div>
    <div id="content-text">
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>I have been a teaching assistant in two courses:</h5>
                <ul id="tas">
                    <li><strong>Microprocessor and Assembly Language</strong> [fall 2020]</li>
                    <li><strong>Advanced Programming (Java)</strong> [spring 2020]</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-2">
            <div class="exp-info">
                <h5>Research and development Intern:</h5>
                <h6>At <a class="non_underline-link" href="https://en.itrc.ac.ir/" id="home">ICT Research Institute</a> [Winter and Spring 2022]</h6>
                <ul class="duties">
                    <li>Worked as a researcher and a programmer for developing machine learning methods under the supervision of Dr. Ehram Safari</li>
                    <li>Found a <a class="non_underline-link" href="https://www.kaggle.com/bittlingmayer/amazonreviews/version/7?select=train.ft.txt.bz2" id="home">dataset of Amazon products comments</a></li>
                    <li>Implemented Unigram Naive Bayes, Bigram Naive Bayes, Fully Connected Neural Network and Random Forest machine learning methods by TensorFlow and 
                    SKLearn libraries in Python programming language</li>
                    <li>Compared Unigram Naive Bayes, Bigram Naive Bayes, Fully Connected Neural Network and Random Forest machine learning methods in term of 
                    accuracy for sentiment analysis on Amazon products comments</li> 
                </ul>
            </div>
        </div>
    </div>
    `
    document.getElementById("home").style.color = "blue"
    document.getElementById("experience").style.color = "black"
    document.getElementById("skills").style.color = "blue"
    document.getElementById("projects").style.color = "blue"
    document.getElementById("scores").style.color = "blue"
    return false;
}

function show_projects()
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h5>Some of the main projects which I carried out in the fields of Data Mining and Artificial Intelligence are listed here. More projects are available on my <a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri?tab=repositories">GitHub</a>.</h5>
    </div>
    <div class="row">
        <div class="proj-item " id="BS-thesis">
            <h6><a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri/Sentiment-Analysis-on-Tweets">1) Sentiment Analysis on Tweets</a></h6>
            <img class="proj-image" src="data/Sentiment%20Analysis%20Img.png" alt="">
        </div>
    </div>
	<div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri/An-Evolutionary-Game">2) An Evolutionary Game</a></h6>
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri/Puzzle-Solver">3) Puzzle Solver</a></h6>
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri/Butter-Bringer-Robot">4) Butter Bringer Robot</a></h6>
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri/Jpotify">5) Jpotify (a music player program in Java)</a></h6>
        <img class="proj-image width-90" src="data/Jpotify%20Img.png" alt="">
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri/E-Shop_Project_Phase2">6) E-Shop</a></h6>
        <img class="proj-image width-90" src="data/E-Shop%20Img.png" alt="">
    </div>
    <div class="proj-item">
        <h6><a class="non_underline-link" href="https://github.com/MortezaDamghaniNouri/GitHub-Users-Info">7) GitHub Users' Info</a></h6>
    </div>
    `
    document.getElementById("home").style.color = "blue"
    document.getElementById("experience").style.color = "blue"
    document.getElementById("skills").style.color = "blue"
    document.getElementById("projects").style.color = "black"
    document.getElementById("scores").style.color = "blue"
    return false;
}


function show_skills()
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h5>Some of my main skills are listed here.</h5>
    </div>
	<div id="content-text">
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>English Language:</h5>
                <ul id="tas">
                    <li>TOEFL iBT Overall Score: 104 (Reading: 27, Listening:26, Speaking: 23, Writing: 28)</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Programming Languages:</h5>
                <ul id="tas">
                    <li>Python (Advanced)</li>
                    <li>Java (Intermediate)</li>
                    <li>C (Intermediate)</li>
                    <li>Racket (Intermediate)</li>
                    <li>ARM Assembly (Beginner)</li>
                    <li>Arduino (Intermediate)</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Libraries:</h5>
                <ul id="tas">
                    <li>TensorFlow (Intermediate)</li>
                    <li>NLTK (Intermediate)</li>
                    <li>NumPy (Intermediate)</li>
                    <li>SKLearn (Intermediate)</li>
                    <li>Matplotlib (Intermediate)</li>
                    <li>Scikit-Learn (Intermediate)</li>
                    <li>Pandas (Intermediate)</li>
                    <li>Tweepy (Intermediate)</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Web Development:</h5>
                <ul id="tas">
                    <li>HTML (Intermediate)</li>
                    <li>CSS (Intermediate)</li>
                    <li>JavaScript (Intermediate)</li>
                    <li>Django (Beginner)</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Database Systems:</h5>
                <ul id="tas">
                    <li>MySQL (Intermediate)</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Software:</h5>
                <ul id="tas">
                    <li>Microsoft Word (Intermediate)</li>
                    <li>Microsoft PowerPoint (Intermediate)</li>
                    <li>Microsoft Excel (Intermediate)</li>
                    <li>Proteus Design Suite (Intermediate)</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Operating Systems:</h5>
                <ul id="tas">
                    <li>Windows</li>
                    <li>Linux</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Code Versioning Tools:</h5>
                <ul id="tas">
                    <li>Git</li>
                </ul>
            </div>
        </div>
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <h5>Miscellaneous:</h5>
                <ul id="tas">
                    <li>Capable of working with virtual machines, Docker and distributed systems</li>
                    <li>Cloud Computing (Intermediate)</li>
                    <li>Capable of designing database (Intermediate)</li>
                    <li>Capable of working with UML designing software (Intermediate)</li>
                </ul>
            </div>
        </div>  
    </div>
    `
    document.getElementById("home").style.color = "blue"
    document.getElementById("experience").style.color = "blue"
    document.getElementById("skills").style.color = "black"
    document.getElementById("projects").style.color = "blue"
    document.getElementById("scores").style.color = "blue"
    return false;
}

function show_scores()
{
    document.getElementById("content").innerHTML = `
    <div class="content-header">
        <h5>The scores of some of the courses which I passed in order to get Bachelor of Science degree are listed here.</h5>
    </div>
	<div id="content-text">
        <div class="exp-item" id="exp-1">
            <div class="exp-info">
                <ul id="tas">
                    <li>Advanced Programming: 19 / 20 (4 / 4)</li>
                    <li>Software Engineering: 18.25 / 20 (4 / 4)</li>
                    <li>Principles of Artificial Intelligence: 18.15 / 20 (4 / 4)</li>
                    <li>Principles of Computational Intelligence: 20 / 20 (4 / 4)</li>
                    <li>Data Structures and Algorithms: 18 / 20 (4 / 4)</li>
                    <li>Signals and Systems: 18 / 20 (4 / 4)</li>
                    <li>Principles of Database Design: 18.47 / 20 (4 / 4)</li>
                    <li>Computer Networks: 19.75 / 20 (4 / 4)</li>
                    <li>Research and Technical Presentation: 18.9 / 20 (4 / 4)</li>
                    <li>Web Programming: 20 / 20 (4 / 4)</li>
                    <li>Internet of Things: 20 / 20 (4 / 4)</li>
                    <li>Cloud Computing: 20 / 20 (4 / 4)</li>
                    <li>Multimedia Systems: 18.3 / 20 (4 / 4)</li>
                    <li>Information Security: 18.6 / 20 (4 / 4)</li>
                </ul>
            </div>
        </div>
    </div>
    `
    document.getElementById("home").style.color = "blue"
    document.getElementById("experience").style.color = "blue"
    document.getElementById("skills").style.color = "blue"
    document.getElementById("projects").style.color = "blue"
    document.getElementById("scores").style.color = "black"
    return false;
}