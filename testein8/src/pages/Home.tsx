import React from 'react'
import styled from 'styled-components'
import Footer from '../components/AboutMe';
import Header from '../components/Header';
import FirstSection from './FirstSection';
import ListSection from './ListSection';
import RegisterSection from './RegisterSection';

type HomeProps = {
    className?: string;
}

const Home = ({className}: HomeProps) =>{
    return(
       <div className={className}>
        <FirstSection/>
        <RegisterSection/>
        <ListSection/>
        <Footer/>
       </div> 
    )
}

export default styled(Home)`
    width: 100vw;
    height: 100%;
`