import React from 'react'
import { Badge, Text } from 'theme-ui'



const SkillBadge = ({children}) => {
  return (
    <Badge variant='tag' sx={{ mx: 1, my: 1 }}>
      <Text>{ children }</Text>
    </Badge>
  )    
}

export default SkillBadge
