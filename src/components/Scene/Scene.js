import React, { useState, useEffect, useRef } from 'react';
import Matter from 'matter-js';
import styled from 'styled-components';

import Button from '../Button';
import BlockBlue from '../../assets/brand/block-blue.svg';
import BlockPink from '../../assets/brand/block-pink.svg';
import BlockOrange from '../../assets/brand/block-orange.svg';
import BlockGreen from '../../assets/brand/block-green.svg';

//

const Scene = () => {
  // *
  // * Set up state

  const [message, setMessage] = useState(true);
  const [timer, setTimer] = useState(5);

  // *
  // * Reference the target div

  const target = useRef(null);

  useEffect(() => {
    // *
    // * Grab what we need

    const {
      Engine,
      Render,
      World,
      Bodies,
      Common,
      Mouse,
      Composites,
      MouseConstraint,
    } = Matter;

    // *
    // * Functions to handle positons as percentages

    function percentX(percent) {
      return Math.round((percent / 100) * window.innerWidth);
    }
    function percentY(percent) {
      return Math.round((percent / 100) * window.innerHeight);
    }

    // *
    // * Set up Matter.js

    const engine = Engine.create();
    const render = Render.create({
      element: target.current,
      engine,
      options: {
        width: percentX(100),
        height: percentY(100),
        wireframes: false,
        background: 'transparent',
      },
    });

    // *
    // * Add some blocks

    const stack = Composites.stack(
      percentX(25),
      percentY(5),
      window.innerWidth > 1000 ? 5 : 3,
      window.innerWidth > 1000 ? 5 : 3,
      window.innerWidth > 1000 ? 25 : 15,
      window.innerWidth > 1000 ? 25 : 15,
      function (x, y) {
        const scale = window.innerWidth > 1000 ? 0.75 : 0.5;
        const Blocks = Bodies.rectangle(x, y, 200 * scale, 200 * scale, {
          restitution: 0.75,
          friction: 0.65,
          render: {
            sprite: {
              texture: Common.choose([
                BlockBlue,
                BlockPink,
                BlockOrange,
                BlockGreen,
              ]),
              xScale: scale,
              yScale: scale,
            },
          },
        });

        return Blocks;
      }
    );

    stack.bodies[3].angle = -0.05;
    if (window.innerWidth > 1000) {
      stack.bodies[12].angle = 0.05;
      stack.bodies[20].angle = -0.05;
    }

    World.add(engine.world, stack);

    // *
    // * Turn off the gravity

    engine.world.gravity.y = 0;

    // *
    // * Build our walls and add them to the world

    World.add(engine.world, [
      // Top
      Bodies.rectangle(percentX(50), 0, percentX(100), 15, {
        isStatic: true,
        render: { visible: false },
      }),
      // Right
      Bodies.rectangle(percentX(100), percentY(50), 15, percentY(100), {
        isStatic: true,
        render: { visible: false },
      }),
      // Bottom
      Bodies.rectangle(percentX(50), percentY(100), percentX(100), 15, {
        isStatic: true,
        render: { visible: false },
      }),
      // Left
      Bodies.rectangle(0, percentY(50), 15, percentY(100), {
        isStatic: true,
        render: { visible: false },
      }),
    ]);

    // *
    // * Add mouse controls

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    World.add(engine.world, mouseConstraint);

    // *
    // * Render the world

    Engine.run(engine);
    Render.run(render);
  }, []);

  setInterval(() => {
    if (timer >= 1) {
      setTimer(timer - 1);
    } else {
      setMessage(false);
    }
  }, 1000);

  return (
    <section style={{ position: 'relative' }}>
      {message && (
        <>
          <Message>
            <p>Click and drag on blocks to move them around... have fun!</p>
            <div className="button">
              <Button
                label={`Got it (${timer})`}
                form={() => setMessage(false)}
              />
            </div>
          </Message>
          <Skrim />
        </>
      )}

      <div ref={target} />
    </section>
  );
};

export default Scene;

//

const Skrim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(25, 25, 25, 0.75);
`;

const Message = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 15;
  display: flex;
  justify-content: space-between;
  width: calc(100% - 2rem);
  max-width: 32rem;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(25, 25, 25, 0.15);
  transform: translateX(-50%) translateY(-50%);

  & p {
    width: 70%;
    margin: 0 1rem 0 0;
    color: var(--ef-black);
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.5rem;
  }

  & .button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 25%;
    min-width: 7rem;
  }
`;
