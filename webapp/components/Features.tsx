"use client";
import React from 'react'
import { Book, Bot, Code } from 'lucide-react'
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Card } from './CanvasRevealCard';

const Features = () => {
  return (
    <>
      <h1 className=" text-center my-8 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Features
      </h1>
      <div className='mb-4 flex gap-6 flex-col lg:flex-row items-center justify-center'>

        <Card title={"Make your docs with A.I"} icon={<Book height={65} width={65} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName={"bg-slate-800"}
            colors={[[0, 255, 0]]}

          />
        </Card>
        <Card title={"Embed a chatbot on your docs site"} icon={<Bot height={65} width={65} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName={"bg-slate-800"}
            colors={[[255, 255, 255]]}

          />
        </Card>
        <Card title={"Focus more on your project"} icon={<Code height={65} width={65} />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName={"bg-slate-800"}
            colors={[[255, 0, 0]]}

          />
        </Card>
      </div>
    </>
  )
}

export default Features