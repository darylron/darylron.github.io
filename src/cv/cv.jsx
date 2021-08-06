import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const experiences = [
    {
        company: 'Anihan, Inc (Personal project)',
        daterange: 'Oct 2020 - Present',
        position: 'Software Engineer',
        responsibilities: [
            'Support and maintenance',
            'Supply Chain Manager',
            'Software Engineer',
            'Research and Design'

        ],
        achievements: [],
        technologies: ['Django', 'Serverless', 'DigitalOcean', 'AWS S3', 'Docker', 'Kubernetes', 'Minikube']

    },
    {
        company: 'Concentrix',
        daterange: 'Jan 2020 - July 2021',
        position: 'Sr. Software Engineer',
        responsibilities: [
            'Support and maintenance',
            'Web development',
            'Database warehousing',
            'Data analytics, forecasting',

        ],
        achievements: [            
            'Created a reporting system that sends notifications regarding Google’s internal network availability and failures.',
            'Created a system that calculates NetEng’s SLO and KPI, and network availability of the GFiber network.',
            'Borg jobs (or Kubernetes jobs) that collates and transforms data, and exposes it to the clients.'
        ],
        technologies: ['BigQuery, Google AppEngine, MySQL, Protobuffs, Go Language, Python, Pandas, RPC']

    },
    {
        company: 'Willis Towers Watson',
        daterange: 'June 2019 - Dec 2019',
        position: 'Software Engineer',
        responsibilities: [
            'Designs, develops, modifies, adapts, and implements short- and long-term solutions to information technology (IT) and software needs through new and existing applications, systems architecture, network systems, and applications infrastructure.',
            'Reviews system requirements and business processes; codes, tests, debugs, and implements software solutions.',
            'Responsibilities are within the IT Development Function as a generalist or in a combination of families. Includes UX and graphic design, development operations and programming.'

        ],
        achievements: [],
        technologies: ['Django, Docker, Jenkins']

    },
    {
        company: 'Concentrix',
        daterange: 'Dec 2016 - May 2019',
        position: 'Software Engineer',
        responsibilities: [
            'Support and maintenance',
            'Web development',
            'Database warehousing',
            'Data analytics, forecasting',

        ],
        achievements: [
            'Developed a reporting system that sends notifications regarding Google’s internal network failures.',
            'Created a forecasting system that shows patterns regarding Google network’s utilization, and Youtube watchtime.',
            'Developed a dashboard that maps a list of employees to their respective managers, drawing them on a Google map canvas.',
            'Created a proactive monitoring system that notifies developers when a user encounters an error while using a Google Appengine application.',
            'Created a system design for automated website testing.',
            'Spearheaded a monthly ideation: A micro version of Google’s SolvedForX',
            '2018 Originator’s Award',
            '2017 Duck Tape Award: Ability to Fix Just About Anything'


        ],
        technologies: ['BigQuery, Google AppEngine, MySQL, Protobuffs, Go Language, Python, Pandas, RPC']

    },
    {
        company: 'Auberon Solutions, Inc. (defunct)',
        daterange: '02 Feb 2016 - Dec 2016',
        position: 'ERP Developer',
        responsibilities: [
            'Support and maintenance',
            'Web development',
            'Database warehousing',

        ],
        achievements: [
            'Created a system that merges a centralized ERP System (OpenERP/Odoo Framework) with other standalone ERP systems by merging their transactions.',
            'Conducted a 2-day seminar on how to create an ERP system from the ground up  with OpenERP'

        ],
        technologies: ['Odoo/ OpenERP, Python']

    },
    {
        company: 'Eastvantage',
        daterange: '02 May 2012 - Dec 2015',
        position: 'System Developer',
        responsibilities: [
            'Support and maintenance',
            'Web development'
        ],
        achievements: [
            'Created dynamic web applications which serves as a user friendly counterpart of the complex ERP system (OpenERP)',
            'Dashboard for technician dispatchment.',
            '3-time employee of the month',
            '2014 Performance Awardee for JFS',

        ],
        technologies: ['Odoo/ OpenERP, Python, PHP, CoffeeScript, RPC']

    }
];

const references = [
    {
        name: 'Toni Barretto',
        company: 'Google FTE (former Concentrix)',
        relation: 'Former colleage and client',
        mobile: '+63 *** *** 1198',
        email: 'l*****@google.com',
    },
    {
        name: 'Gina Galang',
        company: 'Willis Towers Watson',
        relation: 'Former colleage/team mate',
        mobile: '-',
        email: 'g*******@willistowerswatson.com',
    },
    {
        name: 'Joel Cabral',
        company: 'Eastvantage',
        relation: 'Team lead',
        mobile: '+63 *** *** 1052',
        email: 'joel****@gmail.com',
    }
]

function Header(props) {
    return <Card className="m-2" style={{ 'text-align': "left" }}>
        <Card.Body>
            <Card.Title>Daryl Ronquillo</Card.Title>
            <Card.Text>
                <small>Software Engineer</small><br />
                <small>✉ <a href="mailto:darylron@gmail.com">darylron@gmail.com</a></small><br />
                <small>
                    <b>In</b>&nbsp;
                    <a href="https://www.linkedin.com/in/daryl-ronquillo-93921258/" target="_blank">
                        LinkendIn
                    </a>
                </small>
                <br /><small>✆ +63 926 658 4446</small>
                <br/>
                <br/>
                <p>
                    <h4>Summary</h4>
                    Software Engineer with hands-on experience with web applications, database warehousing, data pipelining, and big data ETL.
                </p>
                <ul>
                    <li>Project management from ideation, brainstorming, creating proof-of-concepts, product requirements documents, task Gantt charts, sprint planning, to finally doing test documentations, and support and maintenance.</li>
                    <li>First hand experience in dealing with <i>millions of data</i>: extraction from different data sources (devices, databases, configurations), transforming it into user readable data format (SLO computation, KPI, and others) via tools like Pandas, Google Collaboratory, humanizing it by hosting it via Google Datastudio, custom displays like a website hosted using Google Cloud Platform.</li>
                    <li>Understanding with <i>Service Oriented Architecture</i> - for the last ~5 years, I've worked with multiple systems (or services) deployed in Borg (Kubernetes) which scales based on need. Coded a lot of scheduled scripts: system status notifier, ETL scripts, data dumps, APIs.</li>
                </ul>
            </Card.Text>
        </Card.Body>
    </Card >
}

class Experience extends Component {

    render() {
        let achievementLabel = ''
        if (this.props.achievements.length) {
            achievementLabel = 'Achievements';
        }
        return (
            <Card className="m-2" style={{ 'text-align': "left" }}>
                <Card.Body>
                    <Card.Title>{this.props.position} @ {this.props.company} - {this.props.daterange}</Card.Title>
                    <Card.Text>
                        <h7>Responsibilities</h7>
                        <ul>
                            {this.props.responsibilities.map(res => (
                                <li>{res}</li>
                            ))}
                        </ul>
                        <h7>{achievementLabel}</h7>
                        <ul>
                            {this.props.achievements.map(ach => (
                                <li>{ach}</li>
                            ))}
                        </ul>

                        <small>
                            <span>Tech stack: &nbsp;</span>
                            {this.props.technologies.map(res => (
                                <span>{res}</span>
                            ))}
                        </small>
                    </Card.Text>
                </Card.Body>
            </Card >
        );
    }
}

function Education(props) {
    return (
        <Card className="m-2" style={{ 'text-align': "left" }}>
            <Card.Body>
                <Card.Title>Education ✍</Card.Title>
                <Card.Text>
                    <h7>Bachelor of Science in Information Technology</h7><br />
                    <h7>Institute of Information Technology</h7><br />
                    <h7>Don Mariano Marcos Memorial State University, San Fernando, La Union</h7>

                </Card.Text>
            </Card.Body>
        </Card>
    )
}

function References(props) {
    return (
        <Card className="m-2" style={{ 'text-align': "left" }}>
            <Card.Body>
                <Card.Title>References</Card.Title>
                <Card.Text>
                    {props.references.map(res => (
                        <div>
                            <h6>{res.name}</h6>
                            <small>{res.company}, {res.relation}</small>
                            <br /><small>✉ {res.email} </small><br /><small>✆ {res.mobile} </small><hr />
                        </div>
                    ))}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

class CV extends Component {

    render() {
        return <Container>
            <Header />
            {experiences.map(exp => (
                <Experience
                    company={exp.company}
                    daterange={exp.daterange}
                    position={exp.position}
                    responsibilities={exp.responsibilities}
                    achievements={exp.achievements}
                    technologies={exp.technologies}
                />
            ))}
            <Education />
            <References
                references={references}
            />
        </Container >
    };
}

export default CV;