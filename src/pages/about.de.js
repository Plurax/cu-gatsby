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

const AboutDe = () => {
  return (
    <Layout>
        <div style={{clear:'left'}}>
          <img src={sw} width="200" style={{float:'left', marginRight:'15px'}} alt="me"/>
          <h1>Über mich</h1>
    Hi, ich bin Christoph - Vater, Ehemann und Technologieconsultant bei der <a href="https://www.tarent.de">tarent solutions GmbH</a> in Bonn. Ich durfte bereits an unterschiedlichen Projekten arbeiten und konnte in unterschiedlichen Technologien Erfahrung sammeln. Ich halte mich selbst für lösungsorientiert, hilfsbereit und teamfähig und nutze gern agile Entwicklungsmethoden.
        </div>
        <div style={{clear:'left'}}>
          <h1>Ausgewählte Tätigkeiten</h1>
          <Skillcard>
            Technology Consultant<br/>
            <SkillBadge>SCRUM Product Owner</SkillBadge>
            <SkillBadge>Proof of concept dev</SkillBadge>
          </Skillcard>
          <Skillcard>
            Technischer Produktmanager Cloud of Things<br/>
            <SkillBadge>SCRUM Product Owner</SkillBadge>
            <SkillBadge>Internet der Dinge</SkillBadge>
            <SkillBadge>Digitalisierung</SkillBadge>
          </Skillcard>
          <Skillcard>
            Entwicklungsingenieur für Medizintechnik<br/>
            <SkillBadge>ANSI C</SkillBadge>
            <SkillBadge>Platinendesign</SkillBadge>
            <SkillBadge>Schaltungsentwicklung</SkillBadge>
          </Skillcard>
        </div>
        <div style={{clear:'left'}}>
          <h1>Aus- / Weiterbildung</h1>
          <Skillcard>
            Dipl. Ing. Nachrichtentechnik<br/>
            DTAG Hochschule für Telekommunikation Leipzig<br/>
            <SkillBadge>Kommunikationstechnik</SkillBadge>
            <SkillBadge>Elektrotechnik</SkillBadge>
            <SkillBadge>Platinendesign</SkillBadge>
          </Skillcard>
          <Skillcard>
            Englisch: BEC Preliminary (B1)
          </Skillcard>
          <Skillcard>
            Certified Scrum Master nach Scrum.org
          </Skillcard>
          <Skillcard>
            IREB Certified Professional for Requirements engineering (Foundation level)
          </Skillcard>
        </div>
    </Layout>
  )
}

export default AboutDe
