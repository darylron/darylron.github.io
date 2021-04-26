import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

const experiences = [
    {
        company: 'Concentrix',
        daterange: 'Jan 2020 - Present',
        position: 'Sr. Software Engineer',
        responsibilities: [
            'Support and maintenance',
            'Web development',
            'Database warehousing',
            'Data analytics, forecasting',
            'Google Internal tool',

        ],
        achievements: [],
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
            'Google Internal tool',

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
            'ERP System (OpenERP/Odoo Framework)',
            'Support and maintenance',

        ],
        achievements: [
            'Created a system that merges a centralized ERP System with other standalone ERP systems by merging their transactions.',
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
        mobile: '+63 91781 51198',
        email: 'lbarretto@google.com',
    },
    {
        name: 'Gina Galang',
        company: 'Willis Towers Watson',
        relation: 'Former colleage/team mate',
        mobile: '-',
        email: 'gin.galang@willistowerswatson.com',
    },
    {
        name: 'Joel Cabral',
        company: 'Eastvantage',
        relation: 'Team lead',
        mobile: '+63 917 564 1052',
        email: 'joelilaocabral@gmail.com',
    }
]

function Header(props) {
    return <Card className="m-2" style={{ 'text-align': "left" }}>
        <Card.Body>
            <Card.Title>Daryl Ronquillo</Card.Title>
            <Card.Text>
                <small>Fullstack Software Engineer</small><br />
                <small>✉ <a href="mailto:darylron@gmail.com">darylron@gmail.com</a></small>
                <br /><small>✆ +6392 658 4446</small>
            </Card.Text>
        </Card.Body>
    </Card >
}

class Experience extends Component {

    render() {
        let achievementLabel = ''
        if (this.props.achievements.length) {
            achievementLabel = 'Achievements;';
        }
        return (
            <Card className="m-2" style={{ 'text-align': "left" }}>
                <Card.Body>
                    <Card.Title>{this.props.company} - {this.props.daterange}</Card.Title>
                    <Card.Text>
                        <h5>Responsibilities</h5>
                        <ul>
                            {this.props.responsibilities.map(res => (
                                <li>{res}</li>
                            ))}
                        </ul>
                        <h5>{achievementLabel}</h5>
                        <ul>
                            {this.props.achievements.map(ach => (
                                <li>{ach}</li>
                            ))}
                        </ul>

                        <small>
                            <span>Tech Stack: &nbsp;</span>
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
                <Card.Title>Education</Card.Title>
                <Card.Text>

                    <h7>Bachelor of Science in Information Technology</h7>
                    <h7>Institute of Information Technology</h7>
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