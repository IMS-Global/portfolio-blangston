import React, { useState, useEffect } from 'react'
import { Box } from '@primer/components'
import { List } from '../../styled/List'

const workDetails = {
  verisys: [
    'Client Side Web Development (Javascript, ES6, ReactJS, Redux, JSON, HTML, CSS, Webpack)',
    'Server Side Web Development using an MVC Architectural Framework (Ruby on Rails 6 [API, CRUD], External GEMs)',
    'MySQL Database Management (ActiveRecord, SQL)',
    'Redis, SideKiq',
    'GitHub Workflow Management',
    'UX Design (Bootstrap CSS Framework, In House Styled Component Suit)',
    'Quality Assurance Testing of Models, Controllers, and Client-Side Interfaces (RSpec, Factory Girl, Jest, Cypress)',
  ],
  kpmg: [
    'Client Side Web Development (Javascript, ES6, React, Context, JQuery, JSON, HTML, CSS, Webpack)',
    'Server Side Web Development using MVC Architectural Frameworks (Ruby on Rails 5 [API, ERB, CRUD], External GEMs)',
    'PostgreSQL Database Management (ActiveRecord, SQL)',
    'GitHub Workflow Management',
    'Heroku Deployment and Remote Management',
    'UX Design (Bootstrap CSS Frameworks) for desktop interfaces',
  ],
  uou: [
    'Client Side Web Development (Javascript, ES6, React, Redux, JQuery, JSON, HTML, CSS, Webpack)',
    'Server Side Web Development using MVC Architectural Frameworks (Ruby on Rails 5 [API, ERB, CRUD], External APIs)',
    'PostgreSQL Database Management and Design (ActiveRecord, SQL)',
    'GitHub Workflow Management of group projects (Team Lead)',
    'Heroku Deployment of a real-time data acquisition application (micro-electronics, data uploading to remote hosting services)',
    'UX Design (Semantic UI, Materialize and Bootstrap CSS Frameworks) for mobile, tablet, desktop interfaces',
    'Quality Assurance Testing of Models, Controllers, and User Interfaces (RSpec and Factory Girl, Jest)',
    'Security and Controlled Accessibility of Users via Omni-Authentication and Devise',
  ],
  albion: [
    'Data Analysis (Perl Scripts)',
    'Statistical Analysis of absorption rates of foliar applied chelated minerals (R-Scripts)',
  ],
  agrilife: [
    'Ubuntu Server Administration (Shell Scripts, Perl, SQL, Java)',
    'Developed Shell Scripting pipelines for genome alignment and analysis (Phred, Phrap, Consed; InterProScan; EST analysis of reads [Solexa, Illumina]; Functional Characterization)',
  ],
}

const WorkDetails = ({company, ...rest}) => {
  const [details, setDetails] = useState('')

  const updateDetails = () => {
    if(company && workDetails[company]){
      setDetails(workDetails[company])
    }
  }
  useEffect(updateDetails, [company])

  const renderDetailsAsList = () => {
    if(details && details.length > 0){
      return details.map((listItem, index) => (
        <List.Item key={index}>{listItem}</List.Item>
      ))
    }
  }

  return (
    <Box>
      {details && 
        <List.UnOrdered>
          { renderDetailsAsList() }
        </List.UnOrdered>
      }
    </Box>
  )
}

export default WorkDetails
