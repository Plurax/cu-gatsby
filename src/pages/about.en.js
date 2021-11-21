import React from 'react'
import Layout from '../components/layout'
import sw from "../img/sw.png"
import styled from 'styled-components'
import SkillBadge from '../components/skillbadge'

const Skillcard = styled.div`
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 5px; /* 5px rounded corners */
  width: 380px;
  float: left;
  padding: 10px;
  font-weight: bold;
`

const AboutEn = () => {
  return (
    <Layout>
        <div style={{clear:'left'}}>
          <img src={sw} width="200" style={{float:'left', marginRight:'15px'}} alt="me"/>
          <h1>About me</h1>
          Hi, I am Christoph. I am father, husband and tech consultant @ <a href="https://www.tarent.de">tarent solutions GmbH</a> in Bonn. I had the chance to work on different projects and different technologies. I think I am solution-oriented, helpful and a team player and I like agile methodologies.
          </div>
        <div style={{clear:'left'}}>
          <h1>What I've done</h1>
          <Skillcard>
            Technology Consultant<br/>
            <SkillBadge>SCRUM Product Owner</SkillBadge>
            <SkillBadge>Proof of concept dev</SkillBadge>
          </Skillcard>
          <Skillcard>
            Technical produktmanager Cloud of Things<br/>
            <SkillBadge>SCRUM Product Owner</SkillBadge>
            <SkillBadge>Internet of things</SkillBadge>
            <SkillBadge>Digitization</SkillBadge>
          </Skillcard>
          <Skillcard>
            Development engineer medical applications<br/>
            <SkillBadge>ANSI C</SkillBadge>
            <SkillBadge>PCB design</SkillBadge>
            <SkillBadge>Circuit design</SkillBadge>
          </Skillcard>
        </div>
        <div style={{clear:'left'}}>
          <h1>Education</h1>
          <Skillcard>
            Dipl. Ing. Communication engineering<br/>
            DTAG Hochschule für Telekommunikation Leipzig<br/>
            <SkillBadge>Communication technologies</SkillBadge>
            <SkillBadge>Electrical engineering</SkillBadge>
            <SkillBadge>PCB design</SkillBadge>
          </Skillcard>
          <Skillcard>
            Englisch: BEC Preliminary (B1)
          </Skillcard>
          <Skillcard>
            Certified Scrum Master (Scrum.org)
          </Skillcard>
          <Skillcard>
            IREB Certified Professional for Requirements engineering (Foundation level)
          </Skillcard>
        </div>
    </Layout>
  )
}

export default AboutEn
