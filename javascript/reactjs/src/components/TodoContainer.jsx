import React, {useRef} from 'react'
import Todo from './Todo'

import { useSprings, animated, config } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import clamp from 'lodash.clamp'
import swap from 'lodash-move'


const fn =
  (order, active = false, originalIndex = 0, curIndex = 0, y = 0) =>
  (index) =>
    active && index === originalIndex
      ? {
          y: curIndex * 100 + y,
          scale: 1.1,
          zIndex: 1,
          shadow: 15,
          immediate: (key) => key === 'zIndex',
          config: (key) => (key === 'y' ? config.stiff : config.default),
        }
      : {
          y: order.indexOf(index) * 100,
          scale: 1,
          zIndex: 0,
          shadow: 1,
          immediate: false,
        }

function DraggableList({ items }) {
  const order = useRef(items.map((_, index) => index)) // Store indicies as a local ref, this represents the item order
  const [springs, api] = useSprings(items.length, fn(order.current)) // Create springs, each corresponds to an item, controlling its transform, scale, etc.
  const bind = useDrag(({ args: [originalIndex], active, movement: [, y] }) => {
    const curIndex = order.current.indexOf(originalIndex)
    const curRow = clamp(Math.round((curIndex * 100 + y) / 100), 0, items.length - 1)
    const newOrder = swap(order.current, curIndex, curRow)
    api.start(fn(newOrder, active, originalIndex, curIndex, y)) // Feed springs new style data, they'll animate the view without causing a single render
    if (!active) order.current = newOrder
  })

  return (
    <div>
      {springs.map(({ zIndex, shadow, y, scale }, i) => (
        <animated.div
          {...bind(i)}
          key={i}
          style={{
            zIndex,
            boxShadow: shadow.to(s => `rgba(0, 0, 0, 0.15) 0px ${s}px ${2 * s}px 0px`),
            y,
            scale,
          }}
          children={items[i]}
        />
      ))}
    </div>
  )
}


export default function TodoContainer(props) {
    const myTodosComps = () => props.data.map(x => <Todo key={x.id} data={x} todosData={props.todosData} setTodosData={props.setTodosData}/> );
    return (
    <>
        {props?.data?.length? 
            
            // <ul class="list-group shadow-5"><DraggableList items={myTodosComps()} /></ul>
            <ul class="list-group shadow-5">{myTodosComps()}</ul>
            :
            <div className='display-5 fst-italic text-center'>Hmmm... time to do something!</div>
        }
    </>
    )
}
