import React from 'react'
import styled from 'styled-components'

const navbar = () => {
    return (
        <>
            <Wrapper>
                <Name>
                    <h3>Bogonko</h3>
                </Name>
                <Hire>
                    <h3>Hire Me</h3>
                </Hire>
            </Wrapper>
        </>
    )
}

export default navbar

const Wrapper = styled.div`
    width: 100%;
    height: 64px;
    background-color: #fff;
    padding: 40px 20px;
    border: 1px solid red;
    display: flex;
`
const Name = styled.h3`
    width: 100%;
    height: 24px;
    background-color: #fff;
    padding: 40px 20px;
    border: 1px solid #000;
`
const Hire = styled.h3`
    width: 100%;
    height: 24px;
    background-color: #fff;
    padding: 40px 20px;
    border: 1px solid #000;
`