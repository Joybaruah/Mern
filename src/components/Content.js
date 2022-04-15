import React from 'react'
import ContentStart from './ContentStart'
import ContentInfo from './ContentInfo'
import MernData from './Data'

export default function Content() {


  return (
    <>
    <ContentStart/>
    <ContentInfo MernData={MernData}/>
    </>
  )
}
