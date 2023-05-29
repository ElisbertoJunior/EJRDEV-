import html from '../../assets/icons/html.png'
import css from '../../assets/icons/css.png'
import sass from '../../assets/icons/sass.png'
import gulp from '../../assets/icons/gulp.png'
import jquery from '../../assets/icons/jquery.png'
import bootstrap from '../../assets/icons/bootastrap.png'
import javascript from '../../assets/icons/javascript.png'
import react from '../../assets/icons/react.png'
import typescript from '../../assets/icons/typescript.png'
import redux from '../../assets/icons/redux.png'
import styled from '../../assets/icons/styled.png'
import node from '../../assets/icons/node.png'
import express from '../../assets/icons/express.png'
import mongo from '../../assets/icons/mongo.png'

import { StackItem, StackList } from './styles'

const Stacks = () => {
  return (
    <>
      <StackList>
        <StackItem>
          <img src={html} />
          <p>HTML</p>
        </StackItem>
        <StackItem>
          <img src={css} />
          <p>CSS</p>
        </StackItem>
        <StackItem>
          <img src={sass} />
          <p>SASS</p>
        </StackItem>
        <StackItem>
          <img src={gulp} />
          <p>GULP</p>
        </StackItem>
        <StackItem>
          <img src={jquery} />
          <p>JQUERY</p>
        </StackItem>
        <StackItem>
          <img src={bootstrap} />
          <p>BOOTSTRAP</p>
        </StackItem>
        <StackItem>
          <img src={javascript} />
          <p>JAVASCRIPT</p>
        </StackItem>
        <StackItem>
          <img src={react} />
          <p>REACT</p>
        </StackItem>
        <StackItem>
          <img src={typescript} />
          <p>TYPESCRIPT</p>
        </StackItem>
        <StackItem>
          <img src={redux} />
          <p>REDUX/TOOLKIT</p>
        </StackItem>
        <StackItem>
          <img src={styled} />
          <p>STYLED-COMPONENTS</p>
        </StackItem>
        <StackItem>
          <img src={node} />
          <p>NODEJS</p>
        </StackItem>
        <StackItem>
          <img src={express} />
          <p>EXPRESSJS</p>
        </StackItem>
        <StackItem>
          <img src={mongo} />
          <p>MONGODB</p>
        </StackItem>
      </StackList>
    </>
  )
}

export default Stacks
