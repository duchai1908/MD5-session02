import React from 'react'
import ChildrenComponent from './ChildrenComponent'

export default function ParentComponent() {
    const company = "rikkei";
    const love = "love";
  return (
    <div>ParentComponent
        <ChildrenComponent companyProp ={company} loveProp={love} />
    </div>
  )
}
