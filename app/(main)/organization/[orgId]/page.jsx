import { getOrganization } from '@/actions/organization'
import React from 'react'

const organization = async({params}) => {
    const {orgId} = params

    const organizationData = await getOrganization(orgId);
    if(!organizationData){
        return <div> Orginzation not found </div>
    }
  return (
    <div> 
        <div>
            <h1> {organizationData.name} Projects</h1>
        </div>
    </div>
  )
}

export default organization