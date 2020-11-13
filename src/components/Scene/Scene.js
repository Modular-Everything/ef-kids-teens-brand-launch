import React, { useEffect, useRef } from 'react';
import Matter, { Body } from 'matter-js';

import BlockBlue from '../../assets/brand/block-blue.svg';
import BlockPink from '../../assets/brand/block-pink.svg';
import BlockOrange from '../../assets/brand/block-orange.svg';
import BlockGreen from '../../assets/brand/block-green.svg';

//

const Scene = () => {
  const target = useRef(null);

  useEffect(() => {
    // *
    // * Grab what we need

    const {
      Engine,
      Render,
      World,
      Bodies,
      Body,
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
      5,
      5,
      25,
      25,
      function (x, y) {
        const scale = 0.75;
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
    stack.bodies[12].angle = 0.05;
    stack.bodies[20].angle = -0.05;

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
  });

  return <div ref={target} />;
};

export default Scene;
